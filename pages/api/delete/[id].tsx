import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

const delet = async function (req: NextApiRequest, res: NextApiResponse) {

    const { id } = req.query
    console.log({id})
    const result = await axios.delete(`https://api-ashen-xi.vercel.app/lista/${id}`)

    // console.log("result", result.data)
    res.send(result.data)
    console.log("chegou aqui")
}
export default delet