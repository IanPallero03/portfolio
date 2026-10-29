"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const entries = [
  {
    number: "01",
    label: "Formación universitaria",
    title: "Universidad Nacional del Litoral",
    detail: "Tecnicatura en Informática Aplicada al Diseño Multimedia y de Sitios Web · En curso",
    color: "violet",
  },
  {
    number: "02",
    label: "Colaboración en equipo",
    title: "SignagePro · AzzADesigns",
    detail: "Desarrollo Front-End, componentes reutilizables e identidad visual en un producto SaaS.",
    color: "blue",
  },
  {
    number: "03",
    label: "Desarrollo independiente",
    title: "Proyectos propios y aprendizaje continuo",
    detail:
      "Desarrollo de aplicaciones web con React, integración de APIs y aprendizaje autodidacta de nuevas tecnologías.",
    color: "indigo",
  },
] as const;

export default function ExperienceJourney() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      // En celulares, el contenido permanece visible y sin animaciones GSAP.
      // En escritorio se conservan todas las animaciones originales.
      if (reducedMotion || isMobile) return;

      gsap.fromTo(
        ".experience-heading",
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".experience-heading", start: "top 88%", once: true },
        },
      );
      gsap.fromTo(
        ".experience-title-slide",
        {
          x: -140,
          autoAlpha: 0,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-title-slide",
            start: "top 85%",
            once: true,
          },
        }
      );
      gsap.fromTo(
        ".experience-description, .experience-language",
        { autoAlpha: 0, y: 25 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-description",
            start: "top 88%",
            once: true,
          },
        },
      );
      gsap.fromTo(
        ".experience-card",
        { autoAlpha: 0, y: 38, scale: 0.985 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".experience-card", start: "top 88%", once: true },
        },
      );
      gsap.fromTo(
        ".experience-item",
        { autoAlpha: 0, y: 14 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".experience-card", start: "top 88%", once: true },
        },
      );
      gsap.to(".experience-wave-one", { x: 30, y: -10, duration: 12, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".experience-wave-two", { x: -24, y: 12, duration: 15, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".experience-shape", {
        x: 18,
        y: -16,
        rotation: 6,
        duration: 11,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="experiencia"
      ref={sectionRef}
      aria-labelledby="experience-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#F7F8FF] via-[#F1F4FF] to-[#F5F2FF] px-5 pt-10 pb-20 sm:px-8 sm:pt-12 sm:pb-24 lg:pt-5 lg:pb-28"
    >
      {/* Fondo suave para mantener continuidad visual con el Hero. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-44 top-10 h-96 w-96 rounded-full bg-blue-200/35 blur-[40px] md:blur-[105px]" />
        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-200/40 blur-[45px] md:blur-[115px]" />
        <svg className="absolute inset-0 h-full w-full opacity-75" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="experience-wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" stopOpacity="0.05" />
              <stop offset="0.5" stopColor="#A78BFA" stopOpacity="0.48" />
              <stop offset="1" stopColor="#60A5FA" stopOpacity="0.12" />
            </linearGradient>
          </defs>
          <path className="experience-wave-one" d="M-120 475 C 210 190, 350 710, 710 420 S 1110 160, 1570 430" stroke="url(#experience-wave-gradient)" strokeWidth="2" />
          <path className="experience-wave-two" d="M-110 570 C 240 300, 430 760, 760 510 S 1190 280, 1540 570" stroke="url(#experience-wave-gradient)" strokeWidth="1.5" opacity="0.45" />
        </svg>
        <div
          className="experience-shape absolute -left-52 bottom-[-12rem] h-[420px] w-[420px] opacity-45 sm:h-[560px] sm:w-[560px]"
          style={{
            borderRadius: "53% 47% 59% 41% / 50% 57% 43% 50%",
            background: "radial-gradient(ellipse at 65% 25%, #fff 0%, #e9d5ff 17%, #c4b5fd 39%, #93c5fd 68%, #a78bfa 90%)",
            boxShadow: "inset 25px 25px 50px rgba(255,255,255,.75)",
          }}
        />
        <div
          className="experience-shape absolute -right-36 top-[12%] h-72 w-72 opacity-35 sm:h-80 sm:w-80"
          style={{
            borderRadius: "58% 42% 35% 65% / 42% 58% 42% 58%",
            background:
              "radial-gradient(ellipse at 30% 25%, #fff 0%, #e9d5ff 16%, #c4b5fd 39%, #93c5fd 65%, #a78bfa 84%, #dbeafe 100%)",
            boxShadow: "inset 25px 25px 50px rgba(255,255,255,.8)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Etiqueta superior con línea separadora, igual que en Proyectos. */}
        <div className="experience-heading mb-10 flex w-full items-center gap-4 sm:mb-12 lg:mb-14">
          <span className="h-2 w-2 shrink-0 rounded-full bg-violet-500" />
          <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-700 sm:text-[11px]">
            02 / Experiencia y formación
          </span>
          <span aria-hidden="true" className="h-px min-w-0 flex-1 bg-gradient-to-r from-violet-400/65 via-violet-300/35 to-transparent" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        {/* Izquierda: un solo titular, sin repetir el mensaje dentro de la tarjeta. */}
        <div className="max-w-3xl">
          <h2
            id="experience-title"
            className="experience-title-slide font-heading text-[clamp(3.5rem,6.4vw,7rem)] font-bold leading-[0.99] tracking-[-0.07em] text-[#17192D]"
          >
            Desarrollo, diseño y{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
            colaboración.
            </span>
          </h2>
          <p className="experience-description mt-8 max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
  Combino formación universitaria, colaboración en proyectos reales
  y desarrollo independiente para construir soluciones web
  funcionales y bien diseñadas.
</p>
<div className="experience-language mt-6 inline-flex items-center gap-3 rounded-full border border-violet-200/80 bg-white/65 px-4 py-2.5">
  <span className="h-2 w-2 rounded-full bg-violet-500" />
  <span className="font-mono text-xs font-medium text-slate-600">
    Inglés · Nivel intermedio
  </span>
</div>          
        </div>

        {/* Derecha: tarjeta compacta, tres menciones claras. */}
        <article className="experience-card relative min-w-0 overflow-hidden rounded-[26px] border border-white/90 bg-white/85 p-6 shadow-[0_24px_75px_rgba(75,55,140,0.09)] md:backdrop-blur-xl sm:p-8 lg:p-9">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-violet-100/65 blur-xl md:blur-3xl" />
          <div className="relative">
            {entries.map((item, index) => (
              <div
                key={item.number}
                className={`experience-item flex items-start gap-4 py-5 first:pt-0 last:pb-0 ${index !== entries.length - 1 ? "border-b border-violet-100" : ""}`}
              >
                <span
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                    item.color === "blue"
                      ? "bg-blue-100 text-blue-700"
                      : item.color === "indigo"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {item.number}
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-700">
                    {item.label}
                  </p>
                  <h3 className="mt-1.5 text-base font-bold leading-snug tracking-tight text-[#17192D] sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.detail}</p>
                  {item.number === "02" && (
                    <a
                      href="https://signagepro.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex text-sm font-semibold text-violet-700 underline-offset-4 transition hover:underline focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
                    >
                      Conocer SignagePro ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </article>
        </div>
      </div>
    </section>
  );
}

