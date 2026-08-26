"use client";

import { Container } from "@workspace/ui/components/ui/container";
import { useAdminFeatures } from "@workspace/data";

export function DocumentsFeature() {
  const { data, isLoading } = useAdminFeatures();

  if (isLoading || !data) return null;
  const featureData = data["documents"];

  return (
    <Container size="fluid" className="py-6">
      <h1 className="text-3xl font-bold tracking-tight">{featureData?.title}</h1>
      <p className="mt-2 text-muted-foreground">{featureData?.description}</p>
    </Container>
  );
}
