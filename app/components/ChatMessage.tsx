import React from 'react'
import { TChatLog } from './ChatBox'

const ChatMessage = ({ message }: { message: TChatLog }) => {
  return (
    <article className={`w-fit ${message.user === 'You' && 'self-end text-right'}`}>
      <p className='px-1'>{message.user}</p>
      <p
        className={`px-6 py-3  bg-white/[0.08] text-white  ${
          message.user === 'ChatGPT' && '!bg-tertiary !text-primary'
        } border border-border rounded-xl`}>
        {message.message}
      </p>
    </article>
  )
}

export default ChatMessage
