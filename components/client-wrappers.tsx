"use client";

import dynamic from "next/dynamic";

export const ThreeCanvas = dynamic(() => import("@/components/three-canvas"), {
  ssr: false,
});

export const GSAPAnimations = dynamic(
  () => import("@/components/gsap-animations"),
  { ssr: false },
);
