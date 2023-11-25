import { getChat } from '@/aiActions/actions';
import { Chat } from '@/components/ai/chat';

export const runtime = 'edge';
export const preferredRegion = 'home';

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export default async function ChatPage({ params }: ChatPageProps) {
  const chatId = params.id;
  const chat = await getChat(chatId);

  return <Chat chatId={chatId} initialMessages={chat?.messages || []} />;
}
