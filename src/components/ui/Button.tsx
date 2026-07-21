"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

const MotionLink = motion(Link);
const MotionButton = motion.button;

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark" | "gold";
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
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-md",
    secondary: "bg-white text-primary border border-primary hover:bg-primary-light hover:text-primary-dark",
    outline: "bg-transparent text-primary border border-primary hover:bg-primary-light",
    dark: "bg-primary-dark text-white hover:bg-primary hover:shadow-md",
    gold: "bg-gold text-white hover:bg-gold-dark hover:shadow-md",
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
