'use client'

import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

export type Model = {
  name: 'Multipurpose' | 'Code'
  type: 'text-davinci-003' | 'code-davinci-002'
}

export type Temperature = {
  name: 'Minimal' | 'None' | 'Repeat'
  type: 0.6 | 1 | 0
}

type TGlobalContext = {
  model: Model
  setModel: Dispatch<SetStateAction<Model>>
  temperature: Temperature
  setTemperature: Dispatch<SetStateAction<Temperature>>
}

export const GlobalContext = createContext<TGlobalContext>(null!)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [model, setModel] = useState<Model>({ name: 'Multipurpose', type: 'text-davinci-003' })
  const [temperature, setTemperature] = useState<Temperature>({ name: 'Minimal', type: 0.6 })
  const providerValue = {
    model,
    setModel,
    temperature,
    setTemperature,
  }
  return <GlobalContext.Provider value={providerValue}>{children}</GlobalContext.Provider>
}

export default ContextProvider
