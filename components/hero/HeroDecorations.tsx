
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroDecorations() {
  const decorationsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      gsap.from(".hero-handwritten", {
        opacity: 0,
        x: -25,
        rotation: -10,
        duration: 1.2,
        delay: 0.8,
        ease: "power3.out",
      });

      gsap.from(".hero-arrow", {
        opacity: 0,
        y: -15,
        duration: 1,
        delay: 1.2,
        ease: "power2.out",
      });

      gsap.to(".hero-handwritten", {
        y: -7,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });
    },
    { scope: decorationsRef }
  );

  return (
    <div
      ref={decorationsRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 hidden xl:block"
    >
      <div className="hero-handwritten absolute left-[1%] top-[28%] -rotate-12 text-center">
        <p
          className="text-[28px] leading-[1.3] text-[#8293BA]"
          style={{ fontFamily: "cursive" }}
        >
          Desarrollo
          <br />
          ideas
          <br />
          en la web
        </p>
      </div>

      <svg
        className="hero-arrow absolute left-[8%] top-[46%] h-[100px] w-[115px]"
        viewBox="0 0 115 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5 C20 45 50 65 95 75"
          stroke="#8293BA"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M82 65 L96 76 L81 84"
          stroke="#8293BA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
