import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


const update = async function (req: NextApiRequest, res: NextApiResponse,) {

  const { nome } = req.body
  console.log({ nome })
  const { id } = req.query

  console.log('pessoa pronta para atualizar', id, nome)

  const result = await axios.patch(`https://apinestjs.herokuapp.com/lista/${id}`, {
    name: nome
  })

  console.log("result", result.data)

  res.send(result.data)


}
export default update