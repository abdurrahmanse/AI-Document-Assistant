import { FadeInView } from "@workspace/ui/components/ui/motion";

import { FAQItem } from "@workspace/types";

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <div className="max-w-3xl mx-auto w-full relative z-10 border-t border-border/50 pt-24 mt-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg">Everything you need to know about the product and billing.</p>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <FadeInView key={i} delay={i * 0.1}>
            <div className="p-6 rounded-2xl bg-muted/20 border border-white/5 backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  );
}
