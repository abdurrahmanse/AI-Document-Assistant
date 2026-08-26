"use client";


import { useCore, useAuthContent, useLogin } from "@workspace/data";
import Link from "next/link";
import { Button } from "@workspace/ui/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@workspace/ui/components/ui/container";
import { AnimatedMesh } from "@workspace/ui/components/ui/motion";

export default function LoginPage() {
  const { data: coreData, isLoading: coreLoading } = useCore();
  const { data: authData, isLoading: authLoading } = useAuthContent();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginMutation = useLogin();

  if (coreLoading || authLoading || !coreData || !authData) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      await loginMutation.mutateAsync([email, password]);
      // Assuming a successful login sets some global state or cookie, redirect:
      // localStorage.setItem("access_token", result.access_token);
      router.push("/app");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center py-12 md:py-24">
      <Container size="default">
        <div className="flex flex-col md:flex-row min-h-[600px] lg:min-h-[700px] rounded-3xl overflow-hidden border border-border shadow-2xl">
          {/* Left side Hero Section */}
          <div className="hidden md:flex flex-1 relative bg-zinc-950 overflow-hidden flex-col justify-center p-12 lg:p-16 text-white">
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
                Welcome back to the future of documents.
              </h1>
              <p className="text-xl text-zinc-400">
                Log in to continue extracting insights and analyzing your enterprise data securely.
              </p>
            </div>
          </div>

          {/* Right side Auth Form */}
          <div className="flex-1 flex flex-col bg-background relative z-10">
            <main className="flex-grow flex flex-col items-center justify-center p-6 lg:p-12">
              <div className="w-full max-w-sm lg:max-w-md">
                <div className="mb-10 text-center md:text-left">
                  <h2 className="text-3xl font-bold tracking-tight mb-2">{authData.login.title}</h2>
                  <p className="text-muted-foreground">
                    {authData.login.description}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md border border-destructive/20">
                      {error}
                    </div>
                  )}
                  
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
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-sm font-medium">Password</label>
                      <Link href="/forgot-password" className="text-sm text-primary hover:underline transition-colors">
                        Forgot password?
                      </Link>
                    </div>
                    <input
                      id="password"
                      type="password"
                      required
                      className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-base font-semibold" disabled={loginMutation.isPending}>
                    {loginMutation.isPending ? "Authenticating..." : authData.login.title}
                  </Button>
                </form>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link href="/register" className="text-primary hover:underline font-semibold transition-colors">
                    Create one now
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Container>
    </div>
  );
}
