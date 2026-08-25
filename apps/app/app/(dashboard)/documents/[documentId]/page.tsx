import type { Metadata } from "next";

type Props = {
  params: Promise<{ documentId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { documentId } = await params;
  
  return {
    title: `Document ${documentId.slice(0, 8)}`,
    description: `Analysis for document ${documentId}`,
  };
}

export default async function Page({ params }: Props) {
  const { documentId } = await params;
  return <div>Document {documentId} Placeholder</div>;
}
