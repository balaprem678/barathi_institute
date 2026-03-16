"use client";

import { useEffect } from "react";

interface DeferredCSSProps {
  href: string;
}

export default function DeferredCSS({ href }: DeferredCSSProps) {
  useEffect(() => {
    // Check if the link already exists to avoid duplicates
    if (document.querySelector(`link[href="${href}"]`)) return;

    const link = document.createElement("link");
    link.href = href;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [href]);

  return null;
}
