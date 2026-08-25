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

interface AnimatedMeshProps extends HTMLMotionProps<"div"> {
  animationType?: "primary" | "secondary" | "tertiary";
}

export function AnimatedMesh({ animationType = "primary", className, ...props }: AnimatedMeshProps) {
  const getAnimation = () => {
    switch (animationType) {
      case "primary":
        return {
          animate: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0],
          },
          transition: { duration: 20, repeat: Infinity, ease: "linear" }
        };
      case "secondary":
        return {
          animate: {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0],
          },
          transition: { duration: 25, repeat: Infinity, ease: "linear" }
        };
      case "tertiary":
        return {
          animate: {
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15],
            y: [0, 50, 0],
          },
          transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
        };
    }
  };

  const anim = getAnimation();

  return (
    <motion.div
      animate={anim.animate}
      transition={anim.transition as any}
      className={className}
      {...props}
    />
  );
}
