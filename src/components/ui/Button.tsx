"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

const MotionLink = motion(Link);
const MotionButton = motion.button;

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors";

  const variants = {
    primary: "bg-accent text-foreground hover:bg-accent-dark",
    secondary: "bg-white/0 text-white border-2 border-white hover:bg-white/10",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary/5",
    dark: "bg-primary-dark text-white hover:bg-primary",
  };

  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionButton>
  );
}
