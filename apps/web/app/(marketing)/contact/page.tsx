"use client";

import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";

export default function ContactPage() {
  return (
    <div className="flex flex-col pb-24 overflow-hidden relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_0%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto w-full px-4 py-24 relative z-10 flex flex-col md:flex-row gap-16 lg:gap-32">
        
        {/* Left Side - Info */}
        <div className="flex-1 space-y-12">
          <FadeInView delay={0.1}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Get in touch</h1>
              <p className="text-xl text-muted-foreground">Whether you have a question about features, pricing, or need a custom enterprise solution, our team is ready to answer all your questions.</p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Chat with Sales</h3>
                  <p className="text-muted-foreground mb-2">Speak directly with our enterprise team.</p>
                  <a href="mailto:sales@aidocs.com" className="font-semibold text-primary hover:underline">sales@aidocs.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Support</h3>
                  <p className="text-muted-foreground mb-2">Need help with the platform?</p>
                  <a href="mailto:support@aidocs.com" className="font-semibold text-primary hover:underline">support@aidocs.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Global HQ</h3>
                  <p className="text-muted-foreground">
                    100 Innovation Drive<br/>
                    San Francisco, CA 94111<br/>
                    United States
                  </p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Right Side - Form */}
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

      </div>
    </div>
  );
}
