"use client";

import { Footer } from "@workspace/marketing";
import { useCore, useAuthContent, useRegister } from "@workspace/data";
import Link from "next/link";
import { Button } from "@workspace/ui/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedMesh } from "@workspace/ui/components/ui/motion";

export default function RegisterPage() {
  const { data: coreData, isLoading: coreLoading } = useCore();
  const { data: authData, isLoading: authLoading } = useAuthContent();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const registerMutation = useRegister();

  if (coreLoading || authLoading || !coreData || !authData) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    
    try {
      await registerMutation.mutateAsync([email, password, firstName, lastName]);
      setSuccess(true);
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch {
      setError("Failed to register. Email may already be in use.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col md:flex-row">
      {/* Left side Hero Section */}
      <div className="hidden md:flex flex-1 relative bg-zinc-950 overflow-hidden flex-col justify-center p-12 lg:p-24 text-white">
        {/* Animated Background Elements */}
        <AnimatedMesh
          animationType="primary"
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[100px] pointer-events-none"
        />
        <AnimatedMesh
          animationType="secondary"
          className="absolute top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#09090b_100%)] opacity-80" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />

        {/* Hero Content */}
        <div className="relative z-10 max-w-lg">
          <Link href="/" className="inline-block mb-12">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xl">A</span>
              </div>
              <span>AI Document</span>
            </div>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Unlock the intelligence in your documents.
          </h1>
          <p className="text-xl text-zinc-400">
            Join thousands of teams using AI Document Assistant to streamline operations and uncover hidden data.
          </p>
        </div>
      </div>

      {/* Right side Auth Form */}
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-col items-center justify-center p-6 lg:p-12 pt-32 md:pt-12">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold tracking-tight mb-2">{authData.register.title}</h2>
              <p className="text-muted-foreground">
                {authData.register.description}
              </p>
            </div>

            {success ? (
              <div className="p-4 text-center font-medium text-primary bg-primary/10 border border-primary/20 rounded-md">
                Registration successful! Redirecting to login...
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md border border-destructive/20">
                    {error}
                  </div>
                )}
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                    <input
                      id="firstName"
                      className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                    <input
                      id="lastName"
                      className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <input
                    id="password"
                    type="password"
                    required
                    className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-base font-semibold" disabled={registerMutation.isPending}>
                  {registerMutation.isPending ? "Creating account..." : authData.register.title}
                </Button>
              </form>
            )}

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline font-semibold transition-colors">
                Log in here
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
