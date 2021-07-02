import axios from 'axios'
import { Pessoa } from 'types'

const list = async (): Promise<Pessoa[]> => {
  const { data: listadePessoas } = await axios.get(
    'https://apinestjs.herokuapp.com/lista',
  )
  return listadePessoas
}

const remove = async (id: string) => {
  await axios.delete(`/api/delete/${id}`)
}

const save = async (name: string): Promise<Pessoa> => {
  const novaPessoa = {
    name
  }
  const { data: pessoa } = await axios.post('/api/save/add', novaPessoa)
  
  return pessoa
}

const update = async (pessoa: Pessoa) => {
  console.log({ pessoa })
  const { data } = await axios.patch(`/api/update/${pessoa._id}`, pessoa)

  console.log("pessoa:", pessoa)
}

const service = {
  list,
  remove,
  save,
  update
}

export default service

