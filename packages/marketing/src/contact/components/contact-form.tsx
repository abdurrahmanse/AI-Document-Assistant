import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Button } from "@workspace/ui/components/ui";

interface ContactFormProps {
  form: {
    fields: {
      id: string;
      label: string;
      type: string;
      placeholder: string;
    }[];
    submitButton: string;
    disclaimer: string;
  };
}

export function ContactForm({ form }: ContactFormProps) {
  return (
    <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
      <FadeInView delay={0.3} yOffset={30}>
        <div className="bg-background/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none" />
          
          <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            {form.fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <label htmlFor={field.id} className="text-sm font-semibold">{field.label}</label>
                {field.type === "textarea" ? (
                  <textarea 
                    id={field.id}
                    rows={4}
                    className="w-full bg-muted/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder={field.placeholder}
                  />
                ) : (
                  <input 
                    type={field.type} 
                    id={field.id}
                    className="w-full bg-muted/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}

            <Button size="lg" className="w-full font-bold h-12 text-lg">{form.submitButton}</Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              {form.disclaimer}
            </p>
          </form>
        </div>
      </FadeInView>
    </div>
  );
}
