import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'
import React from 'react'
import { useAppContext } from 'context/AppContext'
import { useEffect } from 'react'
import srvPessoa from 'services/pessoa'
import { Pessoa } from 'types'

type Props = {
  listaDePessoas: Pessoa[]
}

export default function Home({ listaDePessoas }: Props) {
  const { setPessoas } = useAppContext()

  useEffect(() => {
    setPessoas(listaDePessoas)
  }, [])

  return (
    <Wrapper>
      <Container>
        <Header />
        <List />
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

export async function getServerSideProps(context: any) {
  const pessoas = await srvPessoa.list()
  return {
    props: {
      listaDePessoas: pessoas,
    },
  }
}
