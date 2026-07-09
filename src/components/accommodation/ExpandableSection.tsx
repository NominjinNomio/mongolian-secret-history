"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExpandableSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function ExpandableSection({
  title,
  children,
  defaultOpen = false,
}: ExpandableSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border pb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-2xl md:text-3xl text-foreground">
          {title}
        </span>
        <span className="flex items-center gap-2 text-sm text-blue-600 font-medium flex-shrink-0">
          {isOpen ? "Show less" : "Click for more"}
          {isOpen ? (
            <ChevronUp className="w-5 h-5" />
          ) : (
            <ChevronDown className="w-5 h-5" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[2000px] mt-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
