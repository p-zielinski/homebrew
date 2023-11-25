'use client';

import { useState } from 'react';
import cn from 'classnames';
import { useChat } from 'ai/react';

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages: any[];
  chatId: string;
}

export function Chat({ chatId, initialMessages }: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10')}>
        {messages.map((message: { role: string; content: string }) => (
          <div>
            {message.role}: {message.content}
          </div>
        ))}
      </div>

      <input value={input} placeholder="Message" onChange={handleInputChange} />
      <button onClick={handleSubmit}>Send Message</button>
    </>
  );
}
