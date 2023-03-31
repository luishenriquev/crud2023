import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'


const update = async function (req: NextApiRequest, res: NextApiResponse,) {

  const { name } = req.body
  console.log({ name })
  const { id } = req.query

  console.log('pessoa pronta para atualizar', id, name)

  const result = await axios.patch(`https://api-ashen-xi.vercel.app/lista/${id}`, {
    name: name
  })

  console.log("result", result.data)

  res.send(result.data)


}
export default update