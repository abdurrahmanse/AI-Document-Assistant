import { StatusFeature } from "@workspace/marketing";
import { env } from "../../env";

export default function StatusPage() {
  return <StatusFeature apiUrl={env.NEXT_PUBLIC_API_URL} />;
}
