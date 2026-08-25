import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export function ContactInfo() {
  return (
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
  );
}
