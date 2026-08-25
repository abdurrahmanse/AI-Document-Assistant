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
            <Card>
              <CardHeader>
                <CardTitle>Pro Plan</CardTitle>
                <CardDescription>Everything you need for production.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold">$49<span className="text-lg text-muted-foreground font-normal">/mo</span></div>
                <ul className="space-y-3">
                  {["Unlimited Documents", "GPT-4 & Claude 3", "Priority Support", "Custom Branding"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Subscribe Now</Button>
              </CardContent>
            </Card>
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
