import { useState } from 'react'
import { createContext, useContext } from 'react'
import { Pessoa } from 'types'

// INICIAL VALUE TYPE
type InicialState = {
  pessoas: Pessoa[]
  setPessoas: (pessoas: Pessoa[]) => void
}

// INICIAL VALUE
const initialState = {
  pessoas: [],
  setPessoas: ([]) => {},
}

// CONTEXT
const AppContext = createContext<InicialState>(initialState)

// EMPACOTADOR
export const AppWrapper: React.FC = ({ children }) => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([])

  // PULO DO GATO
  let sharedState = {
    pessoas,
    setPessoas,
  }

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  )
}

// HOOK
export function useAppContext() {
  return useContext(AppContext)
}
