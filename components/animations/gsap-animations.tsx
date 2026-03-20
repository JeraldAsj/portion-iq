"use client";

import { useEffect } from "react";

export default function GSAPAnimations() {
  useEffect(() => {
    (async () => {
      const { gsap }         = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Reveal all .reveal elements
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });

      // Animated counters — [data-target]
      document.querySelectorAll<HTMLElement>("[data-target]").forEach((el) => {
        ScrollTrigger.create({
          trigger: el, start: "top 85%", once: true,
          onEnter: () => {
            const target = parseInt(el.dataset.target || "0", 10);
            const prefix = el.dataset.prefix || "";
            const suffix = el.dataset.suffix || "";
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target, duration: 2.2, ease: "power2.out",
              onUpdate() {
                const v = Math.round(obj.val);
                el.textContent = prefix + v.toLocaleString() + suffix;
              },
            });
          },
        });
      });
    })();
  }, []);

  return null;
}
