
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionBackground from "@/components/layout/SectionBackground";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const highlights = [
  {
    number: "01",
    title: "Desarrollo",
    description:
      "Construyo interfaces modernas, funcionales y adaptadas a diferentes dispositivos.",
  },
  {
    number: "02",
    title: "Diseño",
    description:
      "Me interesa crear experiencias visuales cuidadas, intuitivas y con personalidad.",
  },
  {
    number: "03",
    title: "Aprendizaje",
    description:
      "Disfruto explorar nuevas tecnologías y mejorar continuamente mis proyectos.",
  },
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);

  // ANIMACIONES DE ENTRADA
  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      // Textos y encabezado
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 55,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Tarjetas
      gsap.from(".about-card", {
        opacity: 0,
        y: 65,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-cards",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="sobre-mi"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#F8FAFF] px-6 pb-24 pt-28 sm:px-10 lg:pb-32 lg:pt-36"
    >
      {/* FONDO COMPARTIDO CON EL HERO */}
      <SectionBackground variant="about" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ENCABEZADO */}
        <div className="about-reveal mb-16 flex items-center gap-4">
          <span className="h-2 w-2 rounded-full bg-primary" />

          <span className="font-mono text-xs font-medium uppercase tracking-[0.3em] text-primary">
            01 / Sobre mí
          </span>

          <div className="h-px flex-1 bg-slate-200" />
        </div>

        {/* DISTRIBUCIÓN EN DOS COLUMNAS */}
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* COLUMNA IZQUIERDA */}
          <div>
            <p className="about-reveal mb-5 font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              Un poco sobre quién soy
            </p>

            {/* TÍTULO */}
            <h2 className="about-reveal font-heading text-[clamp(3.5rem,7vw,7rem)] font-bold leading-[0.95] tracking-[-0.07em] text-foreground">
              Más allá
              <br />
              del{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                código.
              </span>
            </h2>

            {/* LÍNEA DECORATIVA */}
            <div className="about-reveal mt-9 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />

            {/* PRESENTACIÓN */}
            <p className="about-reveal mt-9 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Soy desarrollador Front-End y disfruto transformar
              ideas en experiencias web modernas, interactivas
              y funcionales.
            </p>

            <p className="about-reveal mt-5 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
              Me interesa tanto lo que sucede detrás de una página
              como la experiencia de quienes la utilizan. Por eso,
              combino programación, diseño y creatividad para
              construir proyectos que cuiden cada detalle.
            </p>

            {/* BOTÓN Y UBICACIÓN */}
            <div className="about-reveal mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Explorar proyectos ↗
              </a>

              <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Argentina · Front-End
              </span>
            </div>
          </div>

          {/* COLUMNA DERECHA: TARJETAS */}
          <div className="about-cards grid gap-4 pt-2 lg:pt-12">
            {highlights.map((item) => (
              <div
                key={item.number}
                className="about-card group relative overflow-hidden rounded-[24px] border border-violet-100 bg-white/85 p-7 shadow-[0_12px_45px_rgba(25,25,70,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_50px_rgba(139,92,246,0.1)] sm:p-8"
              >
                {/* LUZ INTERIOR */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-100/50 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                <div className="relative flex items-start gap-5">

                  {/* NÚMERO */}
                  <span className="mt-1 font-mono text-xs font-semibold text-primary">
                    {item.number}
                  </span>

                  {/* TEXTO */}
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                      {item.description}
                    </p>
                  </div>

                  {/* FLECHA DECORATIVA */}
                  <span className="ml-auto text-xl text-primary/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
