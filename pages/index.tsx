import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'
import { Pessoa } from 'types'

type Props = {
  pessoas: Pessoa[]
}

export default function Home({ pessoas }: Props) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <List pessoas={pessoas} />
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

export async function getStaticProps(context) {
  const pessoas = [
    { id: 'a', name: 'Lucas' },
    { id: 'b', name: 'Luis Henrique' },
  ]
  return {
    props: {
      pessoas,
    },
  }
}
