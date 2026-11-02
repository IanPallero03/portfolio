"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Animación de mejora progresiva: el contenido siempre existe y es legible
 * sin JavaScript o cuando el usuario prefiere reducir el movimiento.
 * No hay pin, scrub, parallax ni bucles infinitos.
 */
export default function CaseStudyMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const sections = gsap.utils.toArray<HTMLElement>(root.querySelectorAll("[data-case-section]"));
      sections.forEach((section) => {
        const items = gsap.utils.toArray<HTMLElement>(section.querySelectorAll("[data-case-reveal]"));
        if (!items.length) return;
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.10,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          }
        );
      });
    });
    return () => mm.revert();
  }, { scope: rootRef });

  return <div ref={rootRef} className="contents">{children}</div>;
}
