import styled from 'styled-components'

export default function Form() {
  return (
    <Wrapper>
      <Input value="João da Silva" />
      <Button type="button">Salvar</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  border-radius: .4rem;
  overflow: hidden;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.4);
`

const Input = styled.input`
  flex: 80%;
  border: none;
  padding: 1rem;
`

const Button = styled.button`
  flex: 20%;
  min-width: 100px;
  border: none;
`
