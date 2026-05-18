"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className={cn(
          "rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-shadow hover:shadow-card",
          className
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-100 bg-white p-6 shadow-soft",
        className
      )}
    >
      {children}
    </div>
  );
}
