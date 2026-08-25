import type { Metadata } from "next";

type Props = {
  params: Promise<{ conversationId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { conversationId } = await params;
  
  return {
    title: `Chat ${conversationId.slice(0, 8)}`,
    description: `AI Chat conversation ${conversationId}`,
  };
}

export default async function Page({ params }: Props) {
  const { conversationId } = await params;
  return <div>Chat {conversationId} Placeholder</div>;
}
