import React from 'react'
import { AlertCircle } from 'react-feather'

const Header = () => {
  return (
    <header className='w-full flex justify-between items-center mb-14'>
      <h1 className='text-4xl'>GPT-X</h1>
      <button className='flex justify-center items-center p-3 bg-border-dark border border-border-dark rounded-lg'>
        <AlertCircle size={16} />
      </button>
    </header>
  )
}

export default Header
