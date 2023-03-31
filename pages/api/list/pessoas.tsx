import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const list = async function (req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get('https://api-ashen-xi.vercel.app/lista')
  res.send(data)
}

export default list
