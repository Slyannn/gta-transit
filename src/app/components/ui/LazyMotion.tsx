"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactNode } from "react";

// Composant wrapper pour optimiser framer-motion avec le lazy loading
export const OptimizedMotion = ({ children }: { children: ReactNode }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
};

// Export du composant motion optimisé
export { m as motion };