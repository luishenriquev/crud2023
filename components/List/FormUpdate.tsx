import { useState } from "react"
import styled from "styled-components"
import { Pessoa } from "types"

type Props = {
  pessoa: Pessoa
  handleUpdate: (e: React.FormEvent<HTMLFormElement>) => void
}
export default function FormUpdate({pessoa,handleUpdate}: Props){
  return(
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