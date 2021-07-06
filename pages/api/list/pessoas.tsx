import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const list = async function (req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get('https://apinestjs.herokuapp.com/lista')
  res.send(data)
}

export default list
