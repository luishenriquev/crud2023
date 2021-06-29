import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'

export default function Home() {
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