'use client';

import { useChat, type Message } from 'ai/react';

import { ChatList } from './chat-list';
import { ChatPanel } from './chat-panel';
import { EmptyScreen } from './empty-screen';
import { ChatScrollAnchor } from './chat-scroll-anchor';
import { useLocalStorage } from '@/lib/hooks/use-local-storage';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './ui/dialog';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'react-hot-toast';
import cn from 'classnames';

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages: Message[];
  chatId: string;
}

export function Chat({ chatId, initialMessages }: ChatProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState('');
  return (
    <>
      <div className={cn('pb-[200px] pt-4 md:pt-10')}>
        {JSON.stringify(messages)}
      </div>

      <Input
        value={message}
        placeholder="Message"
        onChange={(e: any) => setMessage(e.target.value)}
      />
      <button
        onClick={() => {
          //
        }}
      >
        Send Message
      </button>
    </>
  );
}
