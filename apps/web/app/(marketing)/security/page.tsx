"use client";

import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Shield, Lock, Server, FileKey, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";

const securityFeatures = [
  {
    title: "SOC2 Type II Compliant",
    description: "Our platform undergoes regular independent audits to ensure we meet the highest standards of security, availability, and confidentiality.",
    icon: Shield,
    span: "md:col-span-2",
  },
  {
    title: "End-to-End Encryption",
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256.",
    icon: Lock,
    span: "md:col-span-1",
  },
  {
    title: "Zero Data Retention",
    description: "We do not store your documents permanently. Once processed, they are securely wiped from our servers according to your custom retention policy.",
    icon: Server,
    span: "md:col-span-1",
  },
  {
    title: "BYOK (Bring Your Own Key)",
    description: "Enterprise customers can manage their own encryption keys via AWS KMS or HashiCorp Vault.",
    icon: FileKey,
    span: "md:col-span-2",
  }
];

export default function SecurityPage() {
  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden relative">
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(16,185,129,0.1),rgba(255,255,255,0))] -z-10" />
      
      {/* Hero */}
      <div className="text-center space-y-6 max-w-3xl mx-auto py-24 px-4 relative z-10">
        <div className="mx-auto w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center border border-emerald-500/20 mb-8">
          <Shield className="w-10 h-10 text-emerald-500" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">Enterprise-grade <span className="text-emerald-500">security</span></h1>
        <p className="text-xl text-muted-foreground">We protect your sensitive documents with military-grade encryption and strict compliance standards.</p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 relative z-10 w-full">
        {securityFeatures.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <FadeInView key={i} delay={i * 0.1} yOffset={20} className={feature.span}>
              <Card className="h-full bg-background/50 backdrop-blur-sm border-white/5 shadow-xl overflow-hidden group">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInView>
          );
        })}
      </div>

      {/* Trust Checklist */}
      <div className="max-w-4xl mx-auto mt-24 px-4 w-full">
        <FadeInView delay={0.4} yOffset={30}>
          <div className="bg-muted/30 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 backdrop-blur-md">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Our Security Commitments</h3>
              <p className="text-muted-foreground text-lg">We don't just talk about security, we guarantee it.</p>
            </div>
            <div className="flex-1 space-y-4 w-full">
              {[
                "No training on customer data",
                "Regular penetration testing",
                "Role-Based Access Control (RBAC)",
                "SSO & MFA support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </div>
  );
}
