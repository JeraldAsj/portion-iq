"use client";

import dynamic from "next/dynamic";

export const ThreeCanvas = dynamic(() => import("./three-canvas"), {
  ssr: false,
});

export const GSAPAnimations = dynamic(
  () => import("./gsap-animations"),
  { ssr: false },
);
