import { CheckCircle2 } from "lucide-react";
import { 
  Button, 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent, 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "@workspace/ui/components/ui";

export function InteractiveDemo() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Interactive Showcase</h2>
          <p className="text-muted-foreground text-lg">Verifying Radix and Shadcn UI integration.</p>
        </div>

        <Tabs defaultValue="pricing" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pricing" className="mt-0">
            <div className="relative group max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-indigo-500 to-purple-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <Card className="relative bg-background/50 backdrop-blur-xl border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary/20 text-primary px-4 py-1 rounded-bl-lg text-sm font-semibold border-b border-l border-primary/20">
                  Most Popular
                </div>
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-bold tracking-tight">Pro Plan</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">Everything you need for production.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="text-6xl font-black tracking-tighter">$49<span className="text-xl text-muted-foreground font-normal tracking-normal">/mo</span></div>
                  <ul className="space-y-4">
                    {["Unlimited Documents", "GPT-4 & Claude 3", "Priority Support", "Custom Branding"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium text-muted-foreground hover:text-foreground transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] transition-all">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it built with Radix UI?</AccordionTrigger>
                <AccordionContent>
                  Yes, it uses Radix UI primitives under the hood via Shadcn UI, providing unstyled, accessible components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it fully responsive?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. The UI is built mobile-first using Tailwind CSS.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
                <AccordionContent>
                  Yes, it respects your system preferences and includes a beautiful dark mode implementation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
