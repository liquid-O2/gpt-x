'use client'

import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

export type Temperature = {
  name: 'Minimal' | 'None' | 'Repeat'
  type: 0.6 | 1 | 0
}

type TGlobalContext = {
  temperature: Temperature
  setTemperature: Dispatch<SetStateAction<Temperature>>
}

export const GlobalContext = createContext<TGlobalContext>(null!)

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [temperature, setTemperature] = useState<Temperature>({ name: 'Minimal', type: 0.6 })
  const providerValue = {
    temperature,
    setTemperature,
  }
  return <GlobalContext.Provider value={providerValue}>{children}</GlobalContext.Provider>
}

export default ContextProvider
