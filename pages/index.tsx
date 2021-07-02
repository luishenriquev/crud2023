import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'
import { Pessoa } from 'types'
import React, { useState } from 'react'
import srvPessoa from 'services/pessoa'

type Props = {
  listadePessoas: Pessoa[]
}

export default function Home({ listadePessoas }: Props) {
  const [pessoas, setPessoas] = useState<Pessoa[]>(listadePessoas)

  return (
    <Wrapper>
      <Container>
        <Header />
        <List pessoas={pessoas} setPessoas={setPessoas}  />
        <Form pessoas={pessoas} setPessoas={setPessoas} />
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
  const pessoas = await srvPessoa.list()

  console.log(pessoas)
  return {
    props: {
      listadePessoas: pessoas,
    },
    revalidate: 5
  }
}
