import { NotFoundContent } from "@workspace/ui/components/errors";
import { websiteData } from "@workspace/data";

export default function NotFound() {
  return <NotFoundContent returnLabel={websiteData.appContent.notFound.admin.returnLabel} returnUrl={websiteData.appContent.notFound.admin.returnUrl} />;
}
