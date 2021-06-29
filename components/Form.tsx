import styled from 'styled-components'

export default function Form() {
  return (
    <Wrapper>
      <Input />
      <Button type="button">Salvar</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.4);
  border: 1px solid #b856d0;
`

const Input = styled.input`
  flex: 80%;
  border: none;
  padding: 1rem;
  background: #282a36;
  color: white;
  text-transform: uppercase;
  font-size: 1rem;
  transition: background .2s;
  :focus {
    background: black;
  }
`

const Button = styled.button`
  flex: 20%;
  min-width: 100px;
  border: none;
  background-image: linear-gradient(90deg, #e94cb4, #b856d0);
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.9);
    background-image: linear-gradient(90deg, #e94cb4, #e94cb4);
  }
`
