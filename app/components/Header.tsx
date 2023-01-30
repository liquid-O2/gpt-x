import React, { Dispatch, SetStateAction } from 'react'
import { AlertCircle, X } from 'react-feather'

const Header = ({ setIsSidebarOpen }: { setIsSidebarOpen?: Dispatch<SetStateAction<boolean>> }) => {
  return (
    <header className='w-full flex justify-between items-center mb-8 md:mb-14'>
      <h1 className='text-4xl'>GPT-X</h1>
      <button className='hidden md:flex justify-center items-center p-3 bg-border-dark border border-border-dark rounded-lg'>
        <AlertCircle size={16} />
      </button>
      <button
        onClick={() => setIsSidebarOpen!((prev) => !prev)}
        className='flex md:hidden justify-center items-center p-3 bg-border-dark border border-border-dark rounded-lg'>
        <X size={16} />
      </button>
    </header>
  )
}

export default Header
