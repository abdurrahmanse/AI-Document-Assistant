import { ImageResponse } from "next/og";
import { AppIcon } from '@workspace/ui/components/app-icon';

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <AppIcon letter="A" gradient="linear-gradient(to bottom right, #3b82f6, #8b5cf6)" />,
    { ...size }
  );
}
