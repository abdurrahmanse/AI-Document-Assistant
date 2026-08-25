import { type Metadata } from "next";
import { DocumentGrid } from "@workspace/app-features";

export const metadata: Metadata = {
  title: "Documents",
  description: "Manage your uploaded documents and files",
};

export default function Page() {
  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4">
      <DocumentGrid />
    </div>
  );
}
