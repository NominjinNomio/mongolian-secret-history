"use client";

import { motion } from "framer-motion";

interface CmsContentProps {
  html: string;
  className?: string;
}

function toHtml(content: string): string {
  if (content.includes("<")) return content;
  return content
    .split(/\n{2,}/)
    .map((block) => `<p>${block.replace(/\n/g, "<br />")}</p>`)
    .join("");
}

export default function CmsContent({ html, className = "" }: CmsContentProps) {
  if (!html) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: toHtml(html) }}
    />
  );
}
