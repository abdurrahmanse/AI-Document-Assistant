import { Shield, Lock, Server, FileKey } from "lucide-react";
import { SecurityFeature } from "@workspace/types";

export const securityFeatures: SecurityFeature[] = [
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

export const trustChecklist = [
  "No training on customer data",
  "Regular penetration testing",
  "Role-Based Access Control (RBAC)",
  "SSO & MFA support"
];
