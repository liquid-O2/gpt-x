'use client'
import React, { FormEvent, Suspense, useContext, useRef, useState } from 'react'
import { ChevronRight, Divide, Sidebar, Trash } from 'react-feather'
import ChatMessage from './ChatMessage'
import { GlobalContext } from './ContextProvider'
import Dropdown from './Dropdown'
import Header from './Header'

export type TChatLog = {
  user: 'You' | 'ChatGPT'
  message: string
}

const ChatBox = () => {
  const { temperature, setTemperature } = useContext(GlobalContext)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [prompt, setPrompt] = useState('')
  const [chatLog, setChatLog] = useState<TChatLog[]>([])
  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    inputRef.current!.value = ''
    setChatLog((prevLog) => [...prevLog, { user: 'You', message: prompt }])
    const response = await fetch('/api/gpt3/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ temperature, prompt }),
    })
    if (response.status === 500) {
      alert('Error')
      return
    }
    const data = await response.json()
    setChatLog((prevLog) => [...prevLog, { user: 'ChatGPT', message: data.response }])
  }
  return (
    <section className='overflow-hidden w-full relative h-full rounded-2xl bg-background-light border border-white/5 px-4 md:px-8 '>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className='md:hidden flex absolute top-4 z-50 left-4 justify-center items-center p-3 bg-border-dark border backdrop-blur-xl border-border-dark rounded-lg'>
        <Sidebar size={16} />
      </button>
      {isSidebarOpen && (
        <aside className='absolute z-[999] px-4 bg-background top-0 left-0 flex h-full w-full py-4 flex-col justify-between'>
          <Header setIsSidebarOpen={setIsSidebarOpen} />
          <Dropdown
            title='Repeat Answer'
            options={[
              { name: 'Minimal', type: 0.6 },
              { name: 'Repeat', type: 0 },
              { name: 'None', type: 1 },
            ]}
            state={temperature}
            setState={setTemperature}
            className=' mb-auto'
          />

          <footer className='leading-none opacity-60'>
            <a
              href='https://www.arunava.dev'
              target={'_blank'}
              rel={'noreffer noreferrer'}
              className='leading-none hover:underline underline-offset-2'>
              © Built by Arunava
            </a>
            <p className='text-lg -mt-1'>This site is not associated with Open AI</p>
          </footer>
        </aside>
      )}
      <button
        onClick={() => setChatLog([])}
        className='flex absolute top-4 z-50 right-4 justify-center items-center p-3 bg-border-dark border backdrop-blur-xl border-border-dark rounded-lg'>
        <Trash size={16} />
      </button>
      <section className='h-full flex flex-col justify-end'>
        <article className=' px-1 py-10 pb-20 messages overflow-y-scroll relative scroll-m-4  w-full self-end '>
          {chatLog.map((chat, idx) => (
            <ChatMessage key={idx} message={chat} />
          ))}
        </article>
      </section>
      <form onSubmit={handleSubmit} className='w-full absolute z-20 bottom-6 left-0 px-4 md:px-8 h-14'>
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
