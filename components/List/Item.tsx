import axios from 'axios'
import { useState } from 'react'
import styled from 'styled-components'
import { Pessoa } from 'types'
import FormUpdate from './FormUpdate'

type Props = {
  pessoa: Pessoa
  handleDelete: (id: string) => void
}

export default function Item({ pessoa, handleDelete }: Props) {
  const [editando, setEditando] = useState<boolean>(false)
  function handleEditando(name:string){
    // console.log(name)
    setEditando(true)
  }
  async function handleUpdate(e:React.FormEvent<HTMLFormElement>){
    // e.preventDefault()
    const inputNome = e.currentTarget.elements[0] as HTMLInputElement
      const novaPessoa = {
        nome: inputNome.value
      }
      const { data: pessoaa } = await axios.patch(`/api/update/${pessoa._id}`, novaPessoa)
  }
  return (
    <Wrapper>
      {!editando && <Name>{pessoa.name}</Name>}
      {editando && <FormUpdate pessoa={pessoa} handleUpdate={handleUpdate}/>}
      <Controls>
        {!editando && <Control onClick={()=> handleEditando(pessoa.name)}>Editar</Control>}
        {editando && <Control onClick={()=>setEditando(false)}>cancelar</Control>}
       {!editando && <Control onClick={() => handleDelete(pessoa._id)}>Excluir</Control>}
      </Controls>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
  transition: .2s;
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
