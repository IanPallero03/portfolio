
"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function CaseStudyMotion({
  children,
}: {
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Solo animamos en escritorio y cuando está permitido.
    const media = window.matchMedia(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );

    let cancelled = false;
    let cleanupAnimations: (() => void) | undefined;

    const initAnimations = async () => {
      if (!media.matches || cancelled) return;

      // GSAP y ScrollTrigger se descargan solamente
      // cuando realmente necesitamos animaciones.
      const [gsapModule, scrollTriggerModule] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);

      if (cancelled || !media.matches) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      // GSAP Context permite limpiar animaciones
      // y ScrollTriggers al salir de la página.
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-case-section]")
        );

        sections.forEach((section) => {
          const items = gsap.utils.toArray<HTMLElement>(
            section.querySelectorAll("[data-case-reveal]")
          );

          if (!items.length) return;

          gsap.fromTo(
            items,
            {
              autoAlpha: 0,
              y: 22,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              stagger: 0.1,
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
      }, root);

      cleanupAnimations = () => ctx.revert();
    };

    void initAnimations();

    return () => {
      cancelled = true;
      cleanupAnimations?.();
    };
  }, []);

  return (
    <div ref={rootRef} className="contents">
      {children}
    </div>
  );
}
