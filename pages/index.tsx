import styled from 'styled-components'
import Header from 'components/Header'
import List from 'components/List'
import Form from 'components/Form'
import Footer from 'components/Footer'
import { Pessoa } from 'types'
import axios from 'axios'

type Props = {
  listadePessoas: Pessoa[]
}

export default function Home({ listadePessoas }: Props) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <List listadePessoas={listadePessoas} />
        <Form listadePessoas={listadePessoas}/>
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

export async function getStaticProps(context:any) {
  const {data:listadePessoas} = await axios.get('https://apinestjs.herokuapp.com/lista')
  return {
    props: {
      listadePessoas,
    },
  }
}
