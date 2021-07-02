import { useState } from "react"
import styled from "styled-components"
import { Pessoa } from "types"
import srvPessoa from 'services/pessoa'

type Props = {
  pessoa: Pessoa
  pessoas: Pessoa[]
  setPessoas: any
  setEditando: any
}
export default function FormUpdate({ pessoa, pessoas, setPessoas, setEditando }: Props) {

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>,) {
    e.preventDefault()
    const inputNome = e.currentTarget.elements[0] as HTMLInputElement
    const novaPessoa = {
      ...pessoa,
      name: inputNome.value
    }
    await srvPessoa.update(novaPessoa)

    const listaAtualizada = pessoas.map(p => {
      if (p._id === pessoa._id) {
        return novaPessoa
      }
      return p
    })

    setPessoas(listaAtualizada)

    setEditando(false)
  }

  return (
    <Formm onSubmit={handleUpdate}>
      <Input defaultValue={pessoa.name} />
      <Button type='submit'>Salvar</Button>
    </Formm>
  )
}
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
const Formm = styled.form`
  display: flex;
  width: 100%;
`
const Input = styled.input`
  flex: 80%;
  /* border: none; */
  padding: 0.3rem;
  background: #282a36;
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
  /* transition: background 0.2s;
  :focus {
    background: black;
  } */
`