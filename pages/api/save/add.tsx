import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const add = async function (req: NextApiRequest, res: NextApiResponse) {
  const pessoa = {

    name: req.body.name,
   // name: JSON.parse(req.body).nome,
  }
  console.log('Pessoa pronta para salvar', pessoa)
  const result = await axios.post('https://apinestjs.herokuapp.com/lista', pessoa)
  console.log("result", result.data)
  res.send(result.data)
}

export default add;