
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

      // ==========================================
      // ESCRITORIO: ANIMACIONES ORIGINALES
      // ==========================================
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

          // Desaparece el Hero.
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

          // Aparece la sección narrativa.
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

          // Animación de Diseño, Código y Creatividad.
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

          // Animación de la descripción.
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

      // ==========================================
      // CELULARES: MODO RENDIMIENTO
      // ==========================================
      mm.add("(max-width: 767px)", () => {
        // El Hero se muestra normalmente.
        gsap.set(contentRef.current, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          clearProps: "transform",
        });

        // La sección narrativa aparece directamente.
        gsap.set(sceneRef.current, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          clearProps: "transform",
        });

        // Sin timeline.
        // Sin ScrollTrigger.
        // Sin pin.
        // Sin animaciones de entrada.
      });

      // ==========================================
      // ACCESIBILIDAD EN ESCRITORIO
      // ==========================================
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: reduce)",
        () => {
          gsap.set(contentRef.current, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            clearProps: "transform",
          });

          gsap.set(sceneRef.current, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            clearProps: "transform",
          });
        }
      );

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
