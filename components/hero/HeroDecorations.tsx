
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

      const isMobile = window.matchMedia(
        "(max-width: 767px)"
      ).matches;

      // En celulares y con movimiento reducido:
      // decoración visible, pero sin animaciones.
      if (reducedMotion || isMobile) return;

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
      className="pointer-events-none absolute inset-0 z-20"
    >
      {/* TEXTO MANUSCRITO */}
      <div
        className="
          hero-handwritten
          absolute
          left-[5%] top-[1%]
          -rotate-6
          text-center
          sm:left-[3%] sm:top-[2%]
          xl:left-[1%] xl:top-[28%] xl:-rotate-12
        "
      >
        <p
          className="
            text-[13px] leading-[1.15]
            text-[#8293BA]
            sm:text-[17px]
            xl:text-[28px] xl:leading-[1.3]
          "
          style={{ fontFamily: "cursive" }}
        >
          Desarrollo
          <br />
          ideas
          <br />
          en la web
        </p>
      </div>

      {/* FLECHA */}
      <svg
        className="
          hero-arrow
          absolute
          left-[24%] top-[7%]
          h-[45px] w-[55px]
          sm:left-[20%] sm:top-[9%]
          sm:h-[65px] sm:w-[75px]
          xl:left-[8%] xl:top-[46%]
          xl:h-[100px] xl:w-[115px]
        "
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
