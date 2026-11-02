"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const principles = [
  {
    number: "01",
    title: "Entender",
    description: "Primero, el problema que necesitamos resolver.",
  },
  {
    number: "02",
    title: "Construir",
    description: "Después, una solución clara y bien desarrollada.",
  },
  {
    number: "03",
    title: "Refinar",
    description: "Finalmente, esos detalles que hacen la diferencia.",
  },
];

export default function ProjectsInterlude() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const titleLines = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-interlude-line]")
        );
        const details = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-interlude-detail]")
        );
        const steps = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-interlude-step]")
        );

        // Una sola entrada, sin pin ni scrub: liviano también en mobile.
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        timeline
          .fromTo(
            "[data-interlude-label]",
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.65 }
          )
          .fromTo(
            titleLines,
            { yPercent: 105, rotate: 1.5 },
            { yPercent: 0, rotate: 0, duration: 1.05, stagger: 0.12, ease: "power4.out" },
            "-=0.35"
          )
          .fromTo(
            details,
            { autoAlpha: 0, y: 22 },
            { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.12 },
            "-=0.55"
          )
          .fromTo(
            steps,
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 },
            "-=0.4"
          );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      aria-labelledby="projects-interlude-title"
      className="relative isolate overflow-hidden bg-[#F6F5FC] py-20 text-[#1B1A30] sm:py-28 lg:py-32"
    >
      {/* Fondo estático: conserva la identidad violeta / azul sin efectos pesados. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 8% 18%, rgba(196,181,253,.23) 0%, transparent 45%), radial-gradient(ellipse at 100% 85%, rgba(147,197,253,.20) 0%, transparent 43%), linear-gradient(165deg, #FAFAFF 0%, #F6F5FC 48%, #EFF4FF 100%)",
          }}
        />
        <svg
          className="absolute -right-28 top-12 hidden h-[560px] w-[850px] opacity-40 lg:block"
          viewBox="0 0 850 560"
          fill="none"
          aria-hidden="true"
        >
          <ellipse cx="430" cy="275" rx="405" ry="125" transform="rotate(-26 430 275)" stroke="#A78BFA" strokeWidth="1" />
          <ellipse cx="430" cy="275" rx="335" ry="88" transform="rotate(-26 430 275)" stroke="#93C5FD" strokeWidth="1" strokeDasharray="4 10" />
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-10 lg:px-14">
      <div className="experience-heading mb-10 flex w-full items-center gap-4 sm:mb-12 lg:mb-14">
          <span className="h-2 w-2 shrink-0 rounded-full bg-violet-500" />
          <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-[11px]">
            02 / DETRÁS DEL CODIGO
          </span>
          <span aria-hidden="true" className="h-px min-w-0 flex-1 bg-gradient-to-r from-violet-400/65 via-violet-300/35 to-transparent" />
        </div>


        <div className="mt-10 grid items-start gap-12 lg:mt-16 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
          <div>
            <h2
              id="projects-interlude-title"
              className="font-heading text-[clamp(3.1rem,6.1vw,6.8rem)] font-bold leading-[.98] tracking-[-.075em]"
            >
              <span className="block overflow-hidden pb-[.11em]">
                <span data-interlude-line className="block">Una idea.</span>
              </span>
              <span className="block overflow-hidden pb-[.11em]">
                <span
                  data-interlude-line
                  className="block bg-gradient-to-r from-[#8651DA] via-[#7767E9] to-[#488DEB] bg-clip-text text-transparent"
                >
                  Muchas formas
                </span>
              </span>
              <span className="block overflow-hidden pb-[.11em]">
                <span data-interlude-line className="block">de crear.</span>
              </span>
            </h2>

            <div data-interlude-detail className="mt-7 max-w-lg border-l-2 border-[#A78BFA]/50 pl-5 sm:mt-10">
              <p className="text-sm leading-relaxed text-[#68647A] sm:text-base">
                Detrás de cada interfaz hay decisiones de diseño, lógica y experiencia.
                Me gusta conectar esas tres partes para crear productos que sean tan
                funcionales como agradables de usar.
              </p>
            </div>
          </div>

          <div className="lg:pt-5">
            <div data-interlude-detail className="flex items-center justify-between border-b border-[#28233F]/15 pb-4 font-mono text-[10px] uppercase tracking-[.2em] text-[#817A95]">
              <span>Mi manera de trabajar</span>
              <span>01 — 03</span>
            </div>
            <p data-interlude-detail className="mt-7 max-w-xl text-[clamp(1.15rem,1.7vw,1.55rem)] font-medium leading-[1.55] tracking-[-.025em] text-[#343149]">
              Soy desarrollador Front-End. Disfruto transformar ideas en experiencias
              web, cuidar el responsive y darles vida a las interfaces con movimiento
              cuando realmente aporta valor.
            </p>

            <div className="mt-10 grid gap-0">
              {principles.map((item) => (
                <div
                  key={item.number}
                  data-interlude-step
                  className="grid grid-cols-[45px_1fr] gap-4 border-t border-[#28233F]/15 py-5 sm:grid-cols-[60px_1fr]"
                >
                  <span className="pt-1 font-mono text-xs font-semibold text-[#8B5CF6]">{item.number}</span>
                  <div className="grid gap-1 sm:grid-cols-[.62fr_1fr] sm:items-start sm:gap-4">
                    <h3 className="font-heading text-xl font-bold tracking-[-.045em] text-[#242038] sm:text-2xl">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-[#777187]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div data-interlude-detail className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[.16em] text-[#827A98]">
              <span>Santa Fe · Argentina</span>
              <span className="h-1 w-1 rounded-full bg-[#8B5CF6]" aria-hidden="true" />
              <span>Front-End · UI · Motion</span>
            </div>
          </div>
        </div>

        <div data-interlude-detail className="mt-16 flex items-center justify-between gap-4 border-t border-[#28233F]/15 pt-5 font-mono text-[10px] uppercase tracking-[.17em] text-[#827A98] sm:mt-24">
          <span>De una experiencia a nuevos desafíos</span>
          <span className="flex shrink-0 items-center gap-2 text-[#7951CF]">
            Explorar proyectos <span aria-hidden="true">↓</span>
          </span>
        </div>
      </div>
    </section>
  );
}
