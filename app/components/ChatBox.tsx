'use client'
import React, { FormEvent, useContext, useRef, useState } from 'react'
import { ChevronRight, Trash } from 'react-feather'
import ChatMessage from './ChatMessage'
import { GlobalContext } from './ContextProvider'

export type TChatLog = {
  user: 'You' | 'ChatGPT'
  message: string
}

const ChatBox = () => {
  const { model, temperature } = useContext(GlobalContext)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [prompt, setPrompt] = useState('')
  const [chatLog, setChatLog] = useState<TChatLog[]>([])
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setChatLog((prevLog) => [...prevLog, { user: 'You', message: prompt }])
    const response = await fetch('/api/gpt3/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, temperature, prompt }),
    })
    if (response.status === 500) {
      alert('Error')
      return
    }
    const data = await response.json()
    setChatLog((prevLog) => [...prevLog, { user: 'ChatGPT', message: data.response }])
    setPrompt('')
    inputRef.current!.value = ''
  }
  return (
    <section className='w-full relative h-full rounded-2xl bg-background-light border border-white/5 px-8 flex flex-col justify-end pb-32 gap-6'>
      <button
        onClick={() => setChatLog([])}
        className='flex absolute top-4 right-4 justify-center items-center p-3 bg-border-dark border backdrop-blur-xl border-border-dark rounded-lg'>
        <Trash size={16} />
      </button>
      {chatLog.map((chat, idx) => (
        <ChatMessage key={idx} message={chat} />
      ))}
      <form onSubmit={handleSubmit} className='w-full absolute z-20 bottom-6 left-0 px-8 h-14'>
        <div className='relative w-full h-full '>
          <input
            ref={inputRef}
            defaultValue={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            type='text'
            placeholder='Enter your query'
            className=' rounded-full w-full h-full bg-background-light/10 backdrop-blur-xl border border-border-dark px-6 text-primary-dark placeholder:text-primary-dark/70 leading-none'
          />
          <button
            type='submit'
            className='absolute rounded-full right-2 px-4 h-[calc(56px-16px)] mt-2 w-20 bg-white/[0.04] border border-border'>
            <ChevronRight className='stroke-primary-dark mx-auto' />
          </button>
        </div>
      </form>
    </section>
  )
}

export default ChatBox
