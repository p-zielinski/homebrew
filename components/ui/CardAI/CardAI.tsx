'use client';

import React from 'react';
import { useChat } from 'ai/react';
import { nanoid } from 'ai';
import { Message } from 'ai/react/dist';

interface ContentSection {
  subtitle: string;
  content: string;
}

interface CardProps {
  title: string;
  sections?: ContentSection[]; // Make sections optional
  options?: { initialMessages: Message[] } & Record<string, any>;
}

const CardAI: React.FC<CardProps> = ({ title, sections = [], options }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: options?.initialMessages ? options.initialMessages : []
  });

  return (
    <div className="mx-auto max-w-5xl px-2 pt-20 lg:px-8 lg:py-8">
      <div className="bg-vc-border-gradient rounded-xl p-px">
        <div className="rounded-xl bg-black p-3.5 lg:p-6">
          {sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-3xl font-bold">{section.subtitle}</h3>
              <p className="text-xl">{section.content}</p>
            </div>
          ))}
          <div className="mt-4 text-2xl ">
            {/* Chat messages area */}
            <div className="h-[24rem] overflow-y-auto p-4 bg-black border border-gray-400 rounded-lg">
              {/* Placeholder for AI responses */}
              <p>
                <strong>AI:</strong> Hello! Are you ready to anwser so
                questions?
              </p>
              {messages
                .filter((message) =>
                  ['user', 'assistant'].includes(message.role)
                )
                .map((message: Message) => (
                  <p key={message.id}>
                    <strong>{message.role === 'user' ? 'You' : 'AI'}</strong>:{' '}
                    {message.content}
                  </p>
                ))}
            </div>

            {/* User input area */}
            <div className="mt-4 flex justify-between">
              <input
                value={input}
                type="text"
                placeholder="Type your message here..."
                className="w-full p-2 rounded-lg bg-black border border-gray-400"
                onChange={handleInputChange}
              />
              <button
                className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                //@ts-ignore
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAI;
