import { useAppFeatures } from "@workspace/data";

export function BillingFeature() {
  const { data, isLoading } = useAppFeatures();

  if (isLoading || !data) return null;
  const featureData = data["billing"];

  return (
    <div className="w-full max-w-7xl mx-auto py-6">
      <h1 className="text-3xl font-bold tracking-tight">{featureData?.title}</h1>
      <p className="mt-2 text-muted-foreground">{featureData?.description}</p>
    </div>
  );
}
