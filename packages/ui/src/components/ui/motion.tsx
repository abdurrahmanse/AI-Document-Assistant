"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 20,
  className, 
  ...props 
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeInView({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 20,
  className, 
  ...props 
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionDiv({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
