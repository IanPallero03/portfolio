
"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HeroBackground from "./HeroBackground";
import HeroDecorations from "./HeroDecorations";

gsap.registerPlugin(useGSAP);

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
];

const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function HeroIntro() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const isMobile = window.matchMedia(
        "(max-width: 767px)"
      ).matches;

      // En celulares o con movimiento reducido,
      // todo el contenido se muestra sin animaciones.
      if (reduceMotion || isMobile) {
        return;
      }

      // Animaciones originales de escritorio.
      // Los botones NO están incluidos.
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero-photo", {
          opacity: 0,
          y: 45,
          scale: 0.96,
          duration: 1.1,
        })
        .from(
          ".hero-label",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.7"
        )
        .from(
          ".hero-name-line",
          {
            yPercent: 110,
            duration: 1,
            stagger: 0.13,
          },
          "-=0.45"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.45"
        )
        .from(
          ".hero-details",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.35"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-labelledby="hero-title"
      className="
        relative isolate flex min-h-screen w-full items-center
        overflow-hidden
        pb-6 pt-12
        sm:pb-10 sm:pt-32
      "
    >
      {/* FONDO ANIMADO */}
      <HeroBackground />

      <div className="hero-intro-content relative mx-auto w-full max-w-[1600px]">
        {/* DECORACIONES */}
        <HeroDecorations />

        {/* CONTENIDO PRINCIPAL */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-12">
          <div className="grid items-center gap-4 sm:gap-12 md:grid-cols-[0.65fr_1.35fr] lg:gap-16">

            {/* FOTOGRAFÍA: MÁS PEQUEÑA EN CELULARES */}
            <div className="hero-photo relative mx-auto w-full max-w-[145px] sm:max-w-[240px] md:max-w-[310px] lg:max-w-[320px]">
              <div className="absolute -inset-3 rounded-[28px] border border-primary/15" />

              <div className="relative aspect-[4/4.5] overflow-hidden rounded-[20px] bg-slate-200">
                <Image
                  src={`${basePath}/images/imagen_principal_mejorada_11zon.webp`}
                  alt="Retrato de Ian Pallero"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 639px) 145px, (max-width: 767px) 240px, (max-width: 1023px) 310px, 320px"
                  className="object-cover object-center"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101426]/15 via-transparent to-primary/5" />
              </div>

              <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-br-[24px] border-b-2 border-r-2 border-primary/60" />
            </div>

            {/* INFORMACIÓN PROFESIONAL */}
            <div className="min-w-0">

              {/* ETIQUETA */}
              <div className="hero-label mb-3 flex flex-wrap items-center gap-3 sm:mb-6">
                <span className="h-2 w-2 rounded-full bg-primary" />

                <span className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary sm:text-sm">
                  Front-End Developer
                </span>
              </div>

              {/* NOMBRE */}
              <h1
                id="hero-title"
                className="font-heading font-bold uppercase leading-[0.9] tracking-[-0.075em] text-foreground"
              >
                <span className="block overflow-hidden pb-2">
                  <span className="hero-name-line block text-[clamp(2.8rem,9.5vw,9rem)]">
                    IAN MARCO
                  </span>
                </span>

                <span className="block overflow-hidden pb-3">
                  <span className="hero-name-line block bg-gradient-to-r from-primary to-secondary bg-clip-text text-[clamp(2.8rem,7.5vw,7.5rem)] text-transparent">
                    PALLERO.
                  </span>
                </span>
              </h1>

              {/* DESCRIPCIÓN */}
              <div className="hero-description mt-4 max-w-xl border-l-2 border-primary/40 pl-5 sm:mt-7">
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  Desarrollo interfaces web modernas, rápidas e interactivas
                  con React y Next.js, combinando diseño, funcionalidad
                  y atención al detalle.
                </p>
              </div>

              {/* TECNOLOGÍAS */}
              <div className="hero-details mt-4 flex flex-wrap gap-2 sm:mt-7">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/15 bg-white/75 px-4 py-2 font-mono text-xs text-slate-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* BOTONES: SIEMPRE EN EL HERO Y SIN ANIMACIONES */}
              <div className="hero-actions relative z-20 mt-4 grid grid-cols-2 gap-2 sm:mt-9 sm:flex sm:flex-wrap sm:items-center sm:gap-4">

                {/* VER PROYECTOS */}
                <a
                  href="#proyectos"
                  className="
                    inline-flex min-w-0 items-center justify-center
                    whitespace-nowrap rounded-full
                    bg-foreground px-2 py-3
                    text-[11px] font-semibold text-white
                    sm:px-7 sm:py-3.5 sm:text-sm
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-primary
                  "
                >
                  Ver proyectos ↗
                </a>

                {/* DESCARGAR CV */}
                <a
                  href={`${basePath}/CV_Ian_Pallero.pdf`}
                  download="CV-Ian-Pallero.pdf"
                  className="
                    inline-flex min-w-0 items-center justify-center
                    whitespace-nowrap rounded-full
                    border border-primary/20 bg-white/70
                    px-2 py-3 text-[11px] font-semibold text-foreground
                    sm:px-7 sm:py-3.5 sm:text-sm
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-primary
                  "
                >
                  Descargar CV ↓
                </a>

              </div>
            </div>
          </div>

          
{/* DETALLES INFERIORES: VISIBLES DESDE EL INICIO */}
<div className="hero-footer mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5 sm:mt-14">

            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
              Argentina · Desarrollo web
            </span>

            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 sm:text-xs">
              Scroll para explorar ↓
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
