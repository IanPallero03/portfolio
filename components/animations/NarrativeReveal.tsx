
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InfiniteMarquee from "@/components/about/InfiniteMarquee";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function NarrativeReveal() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const isMobile = window.matchMedia(
        "(max-width: 767px)"
      ).matches;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      // Conservamos el comportamiento original de desktop.
      // Solo agregamos entradas GSAP en mobile.
      if (!isMobile || reducedMotion) return;

      const section = sectionRef.current;
      if (!section) return;

      const label = section.querySelector(
        ".narrative-label"
      );

      const words = section.querySelectorAll(
        ".narrative-word"
      );

      const description = section.querySelector(
        ".narrative-description"
      );

      const marquee = section.querySelector(
        ".narrative-marquee"
      );

      // Animaciones de entrada, sin parallax
      // ni animaciones decorativas continuas.
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
        },
      });

      if (label) {
        timeline.fromTo(
          label,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
          }
        );
      }

      // Diseño, Código y Creatividad
      // se revelan desde abajo.
      if (words.length) {
        timeline.fromTo(
          words,
          {
            autoAlpha: 0,
            yPercent: 65,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: "power3.out",
            clearProps: "transform,visibility,opacity",
          },
          "-=0.35"
        );
      }

      if (description) {
        timeline.fromTo(
          description,
          {
            autoAlpha: 0,
            y: 25,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,visibility,opacity",
          },
          "-=0.45"
        );
      }

      if (marquee) {
        timeline.fromTo(
          marquee,
          {
            autoAlpha: 0,
            y: 20,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "transform,visibility,opacity",
          },
          "-=0.35"
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      className="
        relative flex w-full flex-col
        overflow-hidden bg-[#F8FAFF]
        px-6
        md:h-full
      "
    >
      {/* ==================================
          MOBILE: FONDO DECORATIVO ESTÁTICO
         ================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          overflow-hidden md:hidden
        "
      >
        {/* Degradado suave */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-b
            from-[#F8FAFF]
            via-[#F0F3FF]
            to-[#F6F1FF]
          "
        />

        {/* Reflejos suaves sin blur pesado */}
        <div
          className="
            absolute -left-24 top-[15%]
            h-64 w-64 rounded-full
            bg-blue-200/20
          "
          style={{
            background:
              "radial-gradient(circle, rgba(147,197,253,0.22) 0%, transparent 70%)",
          }}
        />

        <div
          className="
            absolute -right-24 bottom-[10%]
            h-72 w-72 rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, rgba(196,181,253,0.24) 0%, transparent 70%)",
          }}
        />

        {/* Ondas violetas y azules estáticas */}
        <svg
          className="
            absolute inset-0
            h-full w-full opacity-80
          "
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="narrative-mobile-wave"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                stopColor="#93C5FD"
                stopOpacity="0.08"
              />

              <stop
                offset="45%"
                stopColor="#A78BFA"
                stopOpacity="0.48"
              />

              <stop
                offset="75%"
                stopColor="#60A5FA"
                stopOpacity="0.30"
              />

              <stop
                offset="100%"
                stopColor="#C4B5FD"
                stopOpacity="0.08"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M-100 320
              C 250 110, 410 580, 760 340
              S 1260 150, 1550 390
            "
            stroke="url(#narrative-mobile-wave)"
            strokeWidth="2.5"
          />

          <path
            d="
              M-100 490
              C 280 220, 490 720, 850 470
              S 1290 280, 1560 520
            "
            stroke="url(#narrative-mobile-wave)"
            strokeWidth="2"
            opacity="0.65"
          />

          <path
            d="
              M-100 730
              C 280 530, 530 930, 920 690
              S 1290 530, 1550 760
            "
            stroke="url(#narrative-mobile-wave)"
            strokeWidth="1.5"
            opacity="0.40"
          />
        </svg>
      </div>

      {/* ==================================
          DESKTOP: LUCES ORIGINALES
         ================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 top-1/4
          hidden md:block
          h-72 w-72 rounded-full
          bg-blue-300/25 blur-[85px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 bottom-1/4
          hidden md:block
          h-80 w-80 rounded-full
          bg-violet-300/25 blur-[90px]
        "
      />

      {/* ONDAS ORIGINALES DE DESKTOP */}
      <svg
        className="
          pointer-events-none absolute inset-0
          hidden md:block
          h-full w-full opacity-50
        "
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-100 550 C 300 200, 550 850, 1000 400 S 1500 250, 1600 500"
          fill="none"
          stroke="#C4B5FD"
          strokeWidth="2"
        />

        <path
          d="M-100 650 C 350 350, 650 950, 1100 500 S 1500 400, 1600 600"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="2"
        />
      </svg>

      {/* ==================================
          CONTENIDO PRINCIPAL
         ================================== */}
      <div
        className="
          relative z-10
          flex w-full flex-col
          items-center justify-center
          py-10
          sm:py-12
          md:h-full md:py-16
        "
      >
        {/* TEXTO */}
        <div className="mx-auto w-full max-w-6xl text-center">
          <span
            className="
              narrative-label
              mb-3 block
              font-mono text-xs font-medium
              uppercase tracking-[0.35em]
              text-primary
              sm:mb-6 sm:text-sm
            "
          >
            Mi forma de crear
          </span>

          <h2
            className="
              font-heading
              text-[clamp(3rem,8vw,8rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.07em]
            "
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span className="narrative-word block text-[#101426]">
                Diseño.
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.06em]">
              <span
                className="
                  narrative-word block
                  bg-gradient-to-r
                  from-primary to-secondary
                  bg-clip-text text-transparent
                "
              >
                Código.
              </span>
            </span>

            <span className="block overflow-hidden pb-[0.06em]">
              <span className="narrative-word block text-[#101426]">
                Creatividad.
              </span>
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p
            className="
              narrative-description
              mx-auto mt-4 max-w-xl
              text-base leading-relaxed
              text-slate-600
              sm:mt-8 sm:text-lg
            "
          >
            Tres elementos que combino para transformar ideas en
            experiencias digitales únicas.
          </p>
        </div>

        {/* CARRUSEL */}
        <div
          className="
            narrative-marquee
            -mx-6 mt-3
            w-[calc(100%+3rem)]
            shrink-0
            sm:mt-6
          "
        >
          <InfiniteMarquee />
        </div>
      </div>
    </div>
  );
}
