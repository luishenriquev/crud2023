import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'
import { Pessoa } from 'types'
import axios from 'axios'
import { useState } from 'react'

type Props = {
  listadePessoas: Pessoa[]
}

export default function Home({ listadePessoas }: Props) {
  const [pessoas, setPessoas] = useState<Pessoa[]>(listadePessoas)

  async function handleDelete(id: string) {
    console.log({ id })
    const result = await axios.delete(`/api/pessoa/delete/${id}`)
    console.log(result)
    // aqui é onde as pessoas são filtradas
    const pessoasFiltradas = pessoas.filter((p) => p._id !== id)
    console.log({ pessoasFiltradas })
    // aqui é o que faltou, o react precisa saber que deve atualizar as pessoas com o novo resultado
    setPessoas(pessoasFiltradas)
  }

  return (
    <Wrapper>
      <Container>
        <Header />
        <List pessoas={pessoas} handleDelete={handleDelete} />
        <Form />
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
  }
}
