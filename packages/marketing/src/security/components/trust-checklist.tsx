import { FadeInView } from "@workspace/ui/components/ui/motion";
import { CheckCircle2 } from "lucide-react";

interface TrustChecklistProps {
  items: string[];
}

export function TrustChecklist({ items }: TrustChecklistProps) {
  return (
    <div className="max-w-4xl mx-auto mt-24 px-4 w-full">
      <FadeInView delay={0.4} yOffset={30}>
        <div className="bg-muted/30 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 backdrop-blur-md">
          <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold tracking-tight">Our Security Commitments</h3>
            <p className="text-muted-foreground text-lg">We don&apos;t just talk about security, we guarantee it.</p>
          </div>
          <div className="flex-1 space-y-4 w-full">
            {items.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                <span className="font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>
    </div>
  );
}
