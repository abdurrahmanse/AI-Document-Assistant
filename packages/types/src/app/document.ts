export interface Document {
  id: string;
  title: string;
  type: string;
  size: string;
  uploadedAt: string;
  status: "processing" | "ready" | "failed";
}
