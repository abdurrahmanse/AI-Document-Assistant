"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, RefreshCcw } from "lucide-react";

export function ErrorBoundaryUI({
  error,
  reset,
  onBack,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  onBack?: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-destructive/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full"
      >
        <div className="bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-destructive/50 via-destructive to-destructive/50" />

          <motion.div
            initial={{ rotate: -15, scale: 0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1,
            }}
            className="w-20 h-20 mx-auto bg-destructive/10 rounded-full flex items-center justify-center text-destructive"
          >
            <AlertTriangle className="w-10 h-10" />
          </motion.div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight">
              Something went wrong
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              We encountered an unexpected error. Our team has been notified and
              is working on it.
            </p>
          </div>

          <div className="bg-muted/50 rounded-xl p-4 text-left border border-border/50 text-sm overflow-auto max-h-32">
            <p className="font-mono text-muted-foreground whitespace-pre-wrap break-words">
              {error.message || "Unknown error occurred"}
            </p>
            {error.digest && (
              <p className="font-mono text-xs text-muted-foreground/70 mt-2">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium w-full sm:w-auto justify-center shadow-lg shadow-primary/25"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted transition-colors font-medium w-full sm:w-auto justify-center"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
