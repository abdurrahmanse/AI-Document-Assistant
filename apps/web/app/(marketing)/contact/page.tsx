"use client";

import { ContactInfo } from "../../../modules/contact/components/contact-info";
import { ContactForm } from "../../../modules/contact/components/contact-form";

export default function ContactPage() {
  return (
    <div className="flex flex-col pb-24 overflow-hidden relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_100%_0%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto w-full px-4 pt-32 pb-24 relative z-10 flex flex-col md:flex-row gap-16 lg:gap-32">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
