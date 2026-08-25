import { useAdminFeatures } from "@workspace/data";

export function SettingsFeature() {
  const { data, isLoading } = useAdminFeatures();

  if (isLoading || !data) return null;
  const featureData = data["settings"];

  return (
    <div className="w-full max-w-5xl mx-auto py-6">
      <h1 className="text-3xl font-bold tracking-tight">{featureData?.title}</h1>
      <p className="mt-2 text-muted-foreground">{featureData?.description}</p>
    </div>
  );
}
