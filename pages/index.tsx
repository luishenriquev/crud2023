import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'
import { Pessoa } from 'types'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {
  listadePessoas: Pessoa[]
}

export default function Home({ listadePessoas }: Props) {
  const [pessoas, setPessoas] = useState<Pessoa[]>(listadePessoas)

  async function handleDelete(id: string) {
    const result = await axios.delete(`/api/delete/${id}`)
    // aqui é onde as pessoas são filtradas
    const pessoasFiltradas = pessoas.filter((p) => p._id !== id)
    // aqui é o que faltou, o react precisa saber que deve atualizar as pessoas com o novo resultado
    setPessoas(pessoasFiltradas)
  }
  async function handleSave(e:React.FormEvent<HTMLFormElement>) {
      e.preventDefault()

      const inputNome = e.currentTarget.elements[0] as HTMLInputElement
      const novaPessoa = {
        nome: inputNome.value
      }
      
      const { data: pessoa } = await axios.post('/api/save/add', novaPessoa)
      setPessoas([...pessoas, pessoa])
      inputNome.value = ""
      // e.target.querySelector('input').value = ''
    }

  return (
    <Wrapper>
      <Container>
        <Header />
        <List pessoas={pessoas} handleDelete={handleDelete} />
        <Form  handleSave={handleSave}/>
        <Footer />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`

const Container = styled.div`
  max-width: 400px;
  > * {
    margin-bottom: 1.3rem;
  }
`

export async function getStaticProps(context: any) {
  const { data: listadePessoas } = await axios.get(
    'https://apinestjs.herokuapp.com/lista',
  )
  return {
    props: {
      listadePessoas,
    },
    revalidate: 5
  }
}
