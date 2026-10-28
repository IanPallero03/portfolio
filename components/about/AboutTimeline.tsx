
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import SectionBackground from "@/components/layout/SectionBackground";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* =========================================
   DATOS DE LA LÍNEA DE TIEMPO
========================================= */

const milestones = [
  {
    number: "01",
    category: "FORMACIÓN",
    title: "Construyendo mis bases",
    description:
      "Formación universitaria en Informática Aplicada al Diseño Multimedia y de Sitios Web en la UNL, con conocimientos en programación, redes y tecnologías web.",
    tag: "Universidad Nacional del Litoral",
  },
  {
    number: "02",
    category: "DESARROLLO WEB",
    title: "De las ideas a la web",
    description:
      "Desarrollo de sitios y aplicaciones web utilizando HTML, CSS y JavaScript, con especial atención a la estructura, la accesibilidad y el diseño responsive.",
    tag: "HTML · CSS · JavaScript",
  },
  {
    number: "03",
    category: "FRONT-END",
    title: "Interfaces más completas",
    description:
      "Construcción de interfaces dinámicas y reutilizables con React y Tailwind CSS, priorizando la experiencia de usuario, la organización del código y la adaptación a distintos dispositivos.",
    tag: "React · Tailwind CSS",
  },
  {
    number: "04",
    category: "TECNOLOGÍAS ACTUALES",
    title: "Experiencias web modernas",
    description:
      "Implementación de interfaces con TypeScript, Next.js y animaciones con GSAP, combinando interactividad, rendimiento y una identidad visual cuidada.",
    tag: "Next.js · TypeScript · GSAP",
  },
];

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function AboutTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  /* =========================================
     ANIMACIONES GSAP
  ========================================= */

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      /* APARICIÓN DEL ENCABEZADO */

      gsap.from(".timeline-heading", {
        opacity: 0,
        y: 45,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".timeline-header",
          start: "top 80%",
          once: true,
        },
      });

      /* LÍNEA QUE SE DIBUJA CON EL SCROLL */

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          {
            scaleY: 0,
          },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-items",
              start: "top 75%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        );
      }

      /* APARICIÓN PROGRESIVA DE LAS TARJETAS */

      gsap.utils
        .toArray<HTMLElement>(".timeline-card")
        .forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 55,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          });
        });
    },
    {
      scope: sectionRef,
    }
  );

  /* =========================================
     ESTRUCTURA VISUAL
  ========================================= */

  return (
    <section
      ref={sectionRef}
      id="recorrido"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#F8FAFF] px-6 pb-24 pt-16 sm:px-10 lg:pb-28 lg:pt-24"
    >
      {/* FONDO DECORATIVO */}
      <SectionBackground variant="timeline" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =====================================
            ENCABEZADO
        ===================================== */}

        <div className="timeline-header mb-12 text-center md:mb-14">
          <span className="timeline-heading font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Mi camino hasta acá
          </span>

          <h2 className="timeline-heading mt-5 font-heading text-[clamp(3rem,6vw,6rem)] font-bold leading-tight tracking-[-0.06em] text-foreground">
            Mi{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              recorrido.
            </span>
          </h2>

          <p className="timeline-heading mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Cada proyecto, cada tecnología y cada desafío
            forman parte de mi evolución como desarrollador.
          </p>
        </div>

        {/* =====================================
            LÍNEA DE TIEMPO
        ===================================== */}

        <div className="timeline-items relative">

          {/* LÍNEA VERTICAL DE FONDO */}
          <div className="absolute bottom-0 left-[15px] top-0 w-[2px] bg-violet-100 md:left-1/2 md:-translate-x-1/2" />

          {/* LÍNEA VERTICAL ANIMADA */}
          <div
            ref={lineRef}
            className="absolute bottom-0 left-[15px] top-0 w-[2px] origin-top bg-gradient-to-b from-primary via-secondary to-primary md:left-1/2 md:-translate-x-1/2"
          />

          {/* CONTENEDOR DE TARJETAS */}
          <div className="space-y-8 md:space-y-12">
            {milestones.map((item, index) => {
              const left = index % 2 === 0;

              return (
                <div
                  key={item.number}
                  className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-6 md:grid-cols-[1fr_64px_1fr] md:gap-6"
                >

                  {/* PUNTO CENTRAL */}
                  <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-8 md:col-start-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full border-[3px] border-primary bg-white shadow-[0_0_0_7px_rgba(139,92,246,0.1)]" />
                  </div>

                  {/* =====================================
                      TARJETA
                  ===================================== */}

                  <div
                    className={`timeline-card col-start-2 row-start-1 min-w-0 ${
                      left
                        ? "md:col-start-1"
                        : "md:col-start-3"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-[24px] border border-violet-100 bg-white/90 p-7 shadow-[0_15px_50px_rgba(30,30,80,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_55px_rgba(139,92,246,0.1)] sm:p-8">

                      {/* LUZ DECORATIVA DE LA TARJETA */}
                      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-violet-100/50 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                      <div className="relative">

                        {/* CATEGORÍA Y NÚMERO */}
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <span className="font-mono text-xs font-semibold tracking-[0.15em] text-primary">
                            {item.category}
                          </span>

                          <span className="font-mono text-xs text-slate-400">
                            {item.number}
                          </span>
                        </div>

                        {/* TÍTULO */}
                        <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                          {item.title}
                        </h3>

                        {/* DESCRIPCIÓN */}
                        <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                          {item.description}
                        </p>

                        {/* ETIQUETA DE TECNOLOGÍAS */}
                        <div className="mt-7 border-t border-slate-100 pt-5">
                          <span className="inline-block rounded-full border border-violet-100 bg-violet-50/60 px-4 py-2 font-mono text-[11px] text-primary">
                            {item.tag}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
