"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export default function FeaturedSignagePro() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 76%",
            once: true,
          },
          defaults: { ease: "power3.out" },
        });

        intro
          .fromTo(".featured-kicker", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.55 })
          .fromTo(".featured-title-line", { yPercent: 112 }, { yPercent: 0, duration: 0.9, stagger: 0.12 }, "-=0.25")
          .fromTo(".featured-summary", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.45")
          .fromTo(".featured-meta", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.1 }, "-=0.45")
          .fromTo(".featured-media", { autoAlpha: 0, y: 48, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: 1 }, "-=0.55")
          .fromTo(".featured-actions", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.55 }, "-=0.35");

        return () => intro.kill();
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="signagepro"
      aria-labelledby="featured-signagepro-title"
      className="relative isolate overflow-hidden bg-[#0C0E1D] py-20 text-white sm:py-28 lg:py-32"
    >
      {/* Decoración completamente estática: sin bucles ni filtros animados. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(125,78,225,.20),transparent_48%),radial-gradient(ellipse_at_95%_65%,rgba(51,135,235,.14),transparent_45%)]" />
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-45" fill="none">
          <ellipse cx="850" cy="460" rx="800" ry="260" transform="rotate(-18 850 460)" stroke="#A78BFA" strokeOpacity=".35" strokeWidth="1" />
          <ellipse cx="850" cy="460" rx="610" ry="200" transform="rotate(-18 850 460)" stroke="#93C5FD" strokeOpacity=".22" strokeWidth="1" strokeDasharray="4 12" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-14">
        <div className="featured-kicker mb-9 flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[.23em] text-[#C4B5FD] sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-violet-400" />
          <span>01 / Experiencia destacada</span>
          <span className="h-px flex-1 bg-gradient-to-r from-violet-300/40 to-transparent" />
          <span className="hidden text-white/40 md:block">Featured work / 2026</span>
        </div>

        <div className="grid items-end gap-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div className="min-w-0">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[.22em] text-[#A5BAFF] sm:text-xs">
              SaaS · Digital signage · Front-End
            </p>
            <h2 id="featured-signagepro-title" className="font-heading font-bold leading-[.92] tracking-[-.075em]">
              <span className="block overflow-hidden pb-[.11em]">
                <span className="featured-title-line block text-[clamp(3.6rem,8vw,8.5rem)]">Signage</span>
              </span>
              <span className="block overflow-hidden pb-[.11em]">
                <span className="featured-title-line block bg-gradient-to-r from-[#E8D7FF] via-[#A78BFA] to-[#85C6FF] bg-clip-text text-[clamp(4.8rem,10vw,10rem)] text-transparent">Pro.</span>
              </span>
            </h2>
          </div>

          <div className="pb-2 lg:pb-5">
            <p className="featured-summary max-w-lg text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl">
              Durante cinco meses colaboré en el desarrollo de una plataforma SaaS de cartelería digital. Me encargué de gran parte de la base de componentes del Front-End y, en la etapa final, trabajé en el pulido general de sus interfaces. También desarrollé la identidad visual del producto y aporté mejoras al dashboard y a la experiencia responsive de la landing.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-2 border-t border-white/15 pt-5 sm:gap-4">
              <div className="featured-meta min-w-0">
                <p className="font-heading text-3xl font-bold text-white sm:text-4xl">05</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/50 sm:text-[10px]">Meses</p>
              </div>
              <div className="featured-meta min-w-0 border-l border-white/15 pl-3 sm:pl-5">
                <p className="font-heading text-xl font-bold text-[#C4B5FD] sm:text-2xl">Equipo</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/50 sm:text-[10px]">Colaboración</p>
              </div>
              <div className="featured-meta min-w-0 border-l border-white/15 pl-3 sm:pl-5">
                <p className="font-heading text-xl font-bold text-[#93C5FD] sm:text-2xl">UI / UX</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-widest text-white/50 sm:text-[10px]">Front-End</p>
              </div>
            </div>
          </div>
        </div>

        {/* Portada real del proyecto dentro de un marco editorial propio. */}
        <div className="featured-media relative mt-12 lg:mt-16">
          <div className="relative overflow-hidden rounded-[20px] border border-[#A78BFA]/25 bg-gradient-to-br from-[#DCCFFF] via-[#EDF0FF] to-[#BFDFFF] p-2 shadow-[0_35px_110px_rgba(0,0,0,.32)] sm:rounded-[30px] sm:p-4 lg:p-6">
            <div className="overflow-hidden rounded-[13px] border border-white/60 bg-white shadow-[0_16px_50px_rgba(40,28,91,.17)] sm:rounded-[19px]">
              <div className="flex items-center justify-between gap-3 bg-[#111529] px-3 py-2.5 font-mono text-[9px] uppercase tracking-[.15em] text-white/60 sm:px-5 sm:py-3">
                <span className="flex items-center gap-2"><span className="h-2 w-2 rotate-45 border border-[#BDA1FF]" /> SIGNAGEPRO / LIVE PROJECT</span>
                <span className="hidden text-[#C9B5FF] sm:block">DESIGN · DEVELOPMENT</span>
              </div>
              <div className="relative aspect-[16/10] w-full sm:aspect-video">
                <Image
                  src={`${basePath}/images/signagepro-cover.png`}
                  alt="Captura real de la plataforma SignagePro"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1300px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <span className="absolute bottom-4 right-5 hidden font-mono text-[10px] uppercase tracking-[.18em] text-[#514587]/70 sm:block">01 — SELECTED EXPERIENCE</span>
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-3 -z-10 h-28 w-28 rounded-full bg-violet-400/20 blur-2xl sm:h-56 sm:w-56" aria-hidden="true" />
        </div>

        <div className="featured-actions mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-7">
          <div className="max-w-2xl">
            <p className="font-mono text-[10px] uppercase tracking-[.2em] text-[#AFA0D3]">Mis aportes</p>
            <p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-base">Arquitectura de componentes, identidad visual, refinamiento general del Front-End, mejoras del dashboard y optimización responsive de la landing.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/proyectos/signagepro" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C6ACFF] px-6 py-3.5 text-sm font-semibold text-[#18102C] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6ACFF]">
              Ver caso de estudio <span aria-hidden="true">↗</span>
            </Link>
            <a href="https://signagepro.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Visitar plataforma <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
