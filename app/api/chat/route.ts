// import { kv } from '@vercel/kv';
// import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
// import { nanoid } from 'nanoid';
import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
export async function POST(req: Request) {
  const json = await req.json();
  const { messages, chatId } = json;

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages,
    temperature: 0.7,
    stream: true
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
  // const stream = OpenAIStream(res, {
  //   async onCompletion(completion: string) {
  //     const title = json.messages[0].content.substring(0, 100);
  //     const id = json.id ?? nanoid();
  //     const createdAt = Date.now();
  //     const path = `/chat/${id}`;
  //     const payload = {
  //       id,
  //       title,
  //       createdAt,
  //       path,
  //       messages: [
  //         ...messages,
  //         {
  //           content: completion,
  //           role: 'assistant'
  //         }
  //       ]
  //     };
  //     // await kv.hmset(`chat:${id}`, payload);
  //     // await kv.zadd(`user:chat:${userId}`, {
  //     //   score: createdAt,
  //     //   member: `chat:${id}`
  //     // });
  //   }
  // });

  // return new StreamingTextResponse(stream);
}
