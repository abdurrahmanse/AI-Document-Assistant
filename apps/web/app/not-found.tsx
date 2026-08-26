import { NotFoundContent } from "@workspace/ui/components/errors";
import { websiteData } from "@workspace/data";

export default function NotFound() {
  return <NotFoundContent returnLabel={websiteData.appContent.notFound.web.returnLabel} returnUrl={websiteData.appContent.notFound.web.returnUrl} />;
}
