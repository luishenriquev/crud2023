import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import { Pessoa } from 'types'

type Props = {
  pessoas: Pessoa[]
  handleDelete: (id: string) => void
}

export default function List({ pessoas, handleDelete }: Props) {
  return (
    <Wrapper>
      {pessoas &&
        pessoas.map((p) => (
          <Item key={p._id} pessoa={p} handleDelete={handleDelete} />
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

/**
 * ITEM
 */

type PropsItem = {
  pessoa: Pessoa
  handleDelete: (id: string) => void
}

function Item({ pessoa, handleDelete }: PropsItem) {
  return (
    <WrapperItem>
      <Name>{pessoa.name}</Name>
      <Controls>
        <Control>Editar</Control>
        <Control onClick={() => handleDelete(pessoa._id)}>Excluir</Control>
      </Controls>
    </WrapperItem>
  )
}

const WrapperItem = styled.div`
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  :nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }
  :hover {
    section {
      height: 1.7rem;
    }
  }
`
const Name = styled.div``

const Controls = styled.section`
  height: 0;
  overflow: hidden;
  transition: 0.2s;
`

const Control = styled.button`
  font-size: 0.6rem;
  background: none;
  border: 1px solid #c466d2;
  color: #c466d2;
  padding: 0.15rem 0.7rem;
  background: white;
  :not(:last-child) {
    margin-right: 0.5rem;
  }
  transition: all 0.2s;
  :hover {
    cursor: pointer;
    color: #e94cb4;
    border-color: #e94cb4;
  }
`
