import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import { Pessoa } from 'types'
import Item from './Item'

type Props = {
  pessoas: Pessoa[]
  setPessoas: any
  // handleDelete: (id: string) => void
}

export default function List({ pessoas, setPessoas}: Props) {

  return (
    <Wrapper>
     {pessoas &&
        pessoas.map((p) => (
          <Item key={p._id} pessoa={p} pessoas={pessoas} setPessoas={setPessoas} />
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