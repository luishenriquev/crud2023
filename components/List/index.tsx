import styled from 'styled-components'
import Item from './Item'
import { useAppContext } from 'context/AppContext'

export default function List() {
  const { pessoas } = useAppContext()

  return (
    <Wrapper>
      {pessoas.map((p) => (
        <Item
          key={p._id}
          pessoa={p}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: white;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.4);
`
