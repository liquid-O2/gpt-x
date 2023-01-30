'use client'
import { useContext } from 'react'
import { GlobalContext } from './ContextProvider'

import Dropdown from './Dropdown'
import Header from './Header'

const Sidebar = () => {
  const { temperature, setTemperature } = useContext(GlobalContext)
  return (
    <aside className='hidden md:flex h-full w-64 py-4 flex-col justify-between'>
      <Header />
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
  )
}

export default Sidebar
