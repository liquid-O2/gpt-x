'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Temperature } from './ContextProvider'

type TDropdown = {
  title: string
  options: Temperature[]
  state: Temperature
  setState: Dispatch<SetStateAction<any>>
  className?: string
}

const Dropdown = ({ title, options, state, setState, className }: TDropdown) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  return (
    <menu className={`relative ${className}`}>
      <p className='text-[1.8rem] mb-2 leading-none opacity-80'>{title}</p>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className='w-full h-12 border border-border-dark rounded-lg flex justify-between items-center px-4'>
        <span className='leading-none -mb-1'>{state.name}</span> <ChevronDown className=' stroke-primary' />
      </button>
      {isDropdownOpen && (
        <menu className='absolute z-20 left-0 w-full top-[calc(48px+16px+32px+8px)] py-4 border border-border-dark bg-background-light rounded-lg flex flex-col gap-2'>
          {options.map((option) => (
            <button
              className='w-full h-12 px-6 text-left'
              onClick={() => {
                setState({ name: option.name, type: option.type })
                setIsDropdownOpen(false)
              }}
              key={option.name}>
              {option.name}
            </button>
          ))}
        </menu>
      )}
    </menu>
  )
}

export default Dropdown
