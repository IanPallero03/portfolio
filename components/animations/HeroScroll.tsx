
"use client";

import { useRef } from "react";
import type { ReactNode } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type HeroScrollProps = {
  content: ReactNode;
  scene: ReactNode;
};

export default function HeroScroll({
  content,
  scene,
}: HeroScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ESCRITORIO: TRANSICIÓN CINEMATOGRÁFICA ORIGINAL
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(contentRef.current, {
            autoAlpha: 1,
            y: 0,
          });

          gsap.set(sceneRef.current, {
            autoAlpha: 0,
            y: 100,
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=1050",
              scrub: 1.2,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          timeline.to(
            contentRef.current,
            {
              autoAlpha: 0,
              y: -100,
              ease: "none",
              duration: 0.35,
            },
            0
          );

          timeline.to(
            sceneRef.current,
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
              duration: 0.4,
            },
            0.25
          );

          timeline.from(
            ".narrative-word",
            {
              y: 90,
              opacity: 0,
              stagger: 0.12,
              ease: "power2.out",
              duration: 0.3,
            },
            0.35
          );

          timeline.from(
            ".narrative-description",
            {
              y: 30,
              opacity: 0,
              ease: "power2.out",
              duration: 0.25,
            },
            0.65
          );
        }
      );

      // MÓVIL: REVELADO PROGRESIVO SIN PIN
      mm.add(
        "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
        () => {
          gsap.set(contentRef.current, {
            autoAlpha: 1,
            y: 0,
          });

          const scene = sceneRef.current;

          if (!scene) return;

          const label = scene.querySelector(".narrative-label");
          const words = scene.querySelectorAll(".narrative-word");
          const description = scene.querySelector(
            ".narrative-description"
          );
          const marquee = scene.querySelector(".narrative-marquee");

          // Animación vinculada al desplazamiento.
          // No usamos pin ni pinSpacing.
          const timeline = gsap.timeline({
            defaults: {
              ease: "power2.out",
            },
            scrollTrigger: {
              trigger: scene,
              start: "top 85%",
              end: "center 45%",
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });

          timeline.fromTo(
            scene,
            {
              autoAlpha: 0,
              y: 35,
            },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: "none",
            },
            0
          );

          if (label) {
            timeline.from(
              label,
              {
                opacity: 0,
                y: 15,
                duration: 0.2,
              },
              0.05
            );
          }

          if (words.length) {
            timeline.from(
              words,
              {
                opacity: 0,
                y: 45,
                stagger: 0.12,
                duration: 0.35,
              },
              0.12
            );
          }

          if (description) {
            timeline.from(
              description,
              {
                opacity: 0,
                y: 20,
                duration: 0.25,
              },
              0.55
            );
          }

          if (marquee) {
            timeline.from(
              marquee,
              {
                opacity: 0,
                y: 20,
                duration: 0.25,
              },
              0.7
            );
          }
        }
      );

      // ACCESIBILIDAD
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(contentRef.current, {
          autoAlpha: 1,
          y: 0,
        });

        gsap.set(sceneRef.current, {
          autoAlpha: 1,
          y: 0,
        });
      });

      return () => mm.revert();
    },
    {
      scope: containerRef,
    }
  );

  return (
    <div
      ref={containerRef}
      className="
        relative
        w-full
        md:h-screen
        md:supports-[height:100dvh]:h-dvh
      "
    >
      {/* HERO ORIGINAL */}
      <div
        ref={contentRef}
        className="
          relative
          h-screen
          supports-[height:100dvh]:h-dvh
          w-full
          overflow-hidden
          md:absolute
          md:inset-0
          md:z-20
        "
      >
        {content}
      </div>

      {/* TRANSICIÓN NARRATIVA */}
      <div
        ref={sceneRef}
        className="
          relative
          w-full
          md:invisible
          md:absolute
          md:inset-0
          md:z-10
        "
      >
        {scene}
      </div>
    </div>
  );
}
