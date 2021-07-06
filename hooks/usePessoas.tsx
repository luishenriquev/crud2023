import { useEffect, useState } from 'react'
import { Pessoa } from 'types'
import axios from 'axios'

export default function usePessoas(): {
  pessoas: Pessoa[]
  setPessoas: any
  loading: boolean
} {
  const [loading, setLoading] = useState(true)
  const [pessoas, setPessoas] = useState<Pessoa[]>([])

  useEffect(() => {
    axios.get('/api/list/pessoas').then((result) => {
      console.log('result', result.data)
      setPessoas(result.data)
      setLoading(false)
    })
  }, [])

  return {
    pessoas,
    setPessoas,
    loading,
  }
}
