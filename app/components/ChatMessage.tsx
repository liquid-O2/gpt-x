import React from 'react'
import { TChatLog } from './ChatBox'

const ChatMessage = ({ message }: { message: TChatLog }) => {
  return (
    <article className={`w-fit max-w-full ${message.user === 'You' && 'self-end text-right ml-auto'} mb-6`}>
      <p className='px-1'>{message.user}</p>
      <p
        className={`md:px-6 px-4 md:py-3 py-2  bg-white/[0.08] text-white  ${
          message.user === 'ChatGPT' && '!bg-tertiary !text-primary'
        } border border-border rounded-xl leading-[1.1] overflow-hidden break-words`}>
        {message.message}
      </p>
    </article>
  )
}

export default ChatMessage
