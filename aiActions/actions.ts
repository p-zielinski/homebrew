'use server';

import { revalidatePath } from 'next/cache';
import { kv } from '@vercel/kv';
import { Chat } from '@/types/types';

export async function getChat(id: string) {
  return { messages: [] };
  // return await kv.hgetall<Chat>(`chat:${id}`);
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  await kv.del(`chat:${id}`);

  revalidatePath('/');
  return revalidatePath(path);
}
