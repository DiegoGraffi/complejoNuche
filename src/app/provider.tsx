"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import { FormspreeProvider } from "@formspree/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <FormspreeProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </FormspreeProvider>
  );
}
