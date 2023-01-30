'use client'

import { createContext, Dispatch, SetStateAction, useState } from 'react'
import '../styles/globals.css'
import ChatBox from './components/ChatBox'
import Container from './components/Container'
import Sidebar from './components/Sidebar'

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

export default function Home() {
  const [model, setModel] = useState<Model>({ name: 'Multipurpose', type: 'text-davinci-003' })
  const [temperature, setTemperature] = useState<Temperature>({ name: 'Minimal', type: 0.6 })
  const providerValue = {
    model,
    setModel,
    temperature,
    setTemperature,
  }
  return (
    <main className='h-screen w-screen'>
      <GlobalContext.Provider value={providerValue}>
        <Container className='grid gap-x-6 grid-cols-[0.25fr_1fr] h-full'>
          <Sidebar />
          <ChatBox />
        </Container>
      </GlobalContext.Provider>
    </main>
  )
}
