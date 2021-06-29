import styled from 'styled-components'

export default function List() {
  return (
    <Wrapper>
      <Item />
      <Item />
      <Item />
      <Item />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: white;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.4);
`

/**
 * ITEM
 */
function Item() {
  return (
    <WrapperItem>
      <Name>Item X</Name>
      <Controls>
        <Control>Editar</Control>
        <Control>Excluir</Control>
      </Controls>
    </WrapperItem>
  )
}

const WrapperItem = styled.div`
  padding: .6rem 1rem;
  :nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }
`
const Name = styled.div``

const Controls = styled.div``

const Control = styled.button``
