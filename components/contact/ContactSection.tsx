"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Replace these links with your real contact details.
const CONTACT = {
  email: "ianpallero@gmail.com",
  github: "https://github.com/ianpallero03",
  linkedin: "https://www.linkedin.com/in/ian-pallero-489900258/", 
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(".contact-reveal", {
        y: 45,
        opacity: 0,
        duration: 0.95,
        stagger: 0.13,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.fromTo(
        ".contact-title-slide",
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
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      gsap.to(".contact-orb", {
        y: -24,
        x: 16,
        rotation: 6,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".contact-wave", {
        x: 35,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  const emailReady = !CONTACT.email.includes("EJEMPLO.COM");

  return (
    <section
      id="contacto"
      ref={sectionRef}
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#111426] via-[#17152F] to-[#0C1122] px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:pt-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="absolute -right-32 top-10 h-[440px] w-[440px] rounded-full bg-violet-600/20 blur-[110px]" />
        <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none">
          <defs>
            <linearGradient id="contact-wave-gradient" x1="0" x2="1440" y1="0" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#93C5FD" stopOpacity="0.16" />
              <stop offset="0.5" stopColor="#A78BFA" stopOpacity="0.55" />
              <stop offset="1" stopColor="#60A5FA" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path className="contact-wave" d="M-160 540 C 190 210, 430 750, 790 410 S 1180 260, 1590 460" stroke="url(#contact-wave-gradient)" strokeWidth="2" />
        </svg>
        <div
          className="contact-orb absolute -right-32 bottom-[-220px] h-[440px] w-[440px] opacity-25 sm:h-[580px] sm:w-[580px]"
          style={{
            borderRadius: "54% 46% 60% 40% / 48% 58% 42% 52%",
            background: "radial-gradient(ellipse at 30% 24%, #fff 0%, #e9d5ff 18%, #c4b5fd 42%, #93c5fd 72%, #a78bfa 100%)",
            boxShadow: "inset 25px 25px 50px rgba(255,255,255,.8)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="contact-reveal mb-12 flex items-center gap-4 sm:mb-16">
          <span className="h-2 w-2 shrink-0 rounded-full bg-violet-400" />
          <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300 sm:text-[11px]">
            03 / Contacto
          </span>
          <span className="h-px min-w-0 flex-1 bg-gradient-to-r from-violet-400/75 via-blue-300/30 to-transparent" />
        </div>

        {/* Editorial full-width CTA inspired by a bold SaaS landing-page ending. */}
        <div className="pb-20 sm:pb-24 lg:pb-32">
          <p className="contact-reveal mb-6 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-violet-300">
            Disponible para conectar
          </p>
          <h2
  id="contact-title"
  className="contact-title-slide max-w-[1350px] font-heading text-[clamp(4rem,11vw,11.75rem)] font-bold leading-[0.9] tracking-[-0.085em] text-white"
>
            ¿Creamos algo
            <span className="block bg-gradient-to-r from-violet-300 via-violet-400 to-sky-300 bg-clip-text pb-[0.12em] text-transparent">
              juntos?
            </span>
          </h2>

          <div className="contact-reveal mt-8 flex flex-col gap-7 sm:mt-12 lg:mt-14 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Me interesa colaborar en productos digitales, sumarme a nuevos desafíos y conectar con personas que compartan las ganas de crear.
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-5">
              {emailReady ? (
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("¡Hablemos de un proyecto!")}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#17192D] shadow-[0_12px_40px_rgba(167,139,250,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-300"
                >
                  Hablemos ↗
                </a>
              ) : (
                <span className="rounded-full border border-violet-300/25 bg-white/10 px-6 py-4 text-sm text-slate-200">
                  Configurá tu correo para activar el botón
                </span>
              )}
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white underline decoration-violet-400/70 underline-offset-8 transition hover:text-violet-300">
                GitHub ↗
              </a>
              {CONTACT.linkedin && (
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white underline decoration-violet-400/70 underline-offset-8 transition hover:text-violet-300">
                  LinkedIn ↗
                </a>
              )}
            </div>
          </div>
        </div>

        <footer className="contact-reveal flex flex-col gap-4 border-t border-white/15 py-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold tracking-tight text-white">IP<span className="text-violet-500">.</span></span>
          <span>© 2026 · Portfolio personal</span>
          <a href="#inicio" className="font-medium text-white transition hover:text-violet-300">Volver arriba ↑</a>
        </footer>
      </div>
    </section>
  );
}
