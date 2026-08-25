import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Button } from "@workspace/ui/components/ui";

export function ContactForm() {
  return (
    <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
      <FadeInView delay={0.3} yOffset={30}>
        <div className="bg-background/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
          
          <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-semibold">Full Name</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-muted/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Jane Doe"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold">Work Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-muted/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="jane@company.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold">How can we help?</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-muted/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <Button size="lg" className="w-full font-bold h-12 text-lg">Send Message</Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </form>
        </div>
      </FadeInView>
    </div>
  );
}
