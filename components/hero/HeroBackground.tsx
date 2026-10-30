"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function HeroBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const element = backgroundRef.current;
      if (!element) return;

      // Solo animamos la decoración en escritorio y cuando el usuario
      // no ha solicitado reducir el movimiento.
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const animations: gsap.core.Tween[] = [
            gsap.to(".liquid-shape-left", {
              x: 25,
              y: -22,
              rotation: 8,
              duration: 10,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            }),
            gsap.to(".liquid-shape-right", {
              x: -22,
              y: 28,
              rotation: -7,
              duration: 12,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            }),
            gsap.to(".hero-wave-one", {
              x: 35,
              y: -15,
              duration: 12,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            }),
            gsap.to(".hero-wave-two", {
              x: -40,
              y: 20,
              duration: 15,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            }),
            gsap.to(".hero-orb", {
              y: -18,
              x: 10,
              duration: 5,
              stagger: 0.8,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            }),
          ];

          // No consumimos recursos fuera del área visible.
          animations.forEach((animation) => animation.pause());

          const observer = new IntersectionObserver(
            ([entry]) => {
              animations.forEach((animation) => {
                if (entry.isIntersecting) animation.resume();
                else animation.pause();
              });
            },
            { threshold: 0, rootMargin: "100px 0px" }
          );

          observer.observe(element);

          return () => {
            observer.disconnect();
            animations.forEach((animation) => animation.kill());
          };
        }
      );

      return () => mm.revert();
    },
    { scope: backgroundRef }
  );

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 -top-32 -bottom-32 z-0 w-screen -translate-x-1/2 overflow-hidden"
      style={{
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
      }}
    >
      {/* MOBILE: fondo liviano, sin filtros ni animaciones infinitas. */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#F8FAFF_0%,#EEF3FF_42%,#F4EDFF_78%,#F8FAFF_100%)]" />

        <div
          className="absolute -left-28 top-[18%] h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(147,197,253,0.35) 0%, rgba(147,197,253,0) 72%)",
          }}
        />
        <div
          className="absolute -right-24 bottom-[12%] h-72 w-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,181,253,0.32) 0%, rgba(196,181,253,0) 72%)",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 420 850"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="heroMobileWaveGradient" x1="0" y1="0" x2="420" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#93C5FD" stopOpacity="0.10" />
              <stop offset="0.5" stopColor="#A78BFA" stopOpacity="0.48" />
              <stop offset="1" stopColor="#60A5FA" stopOpacity="0.10" />
            </linearGradient>
          </defs>
          <path
            d="M-70 240 C 30 145, 120 340, 220 245 S 390 145, 490 270"
            stroke="url(#heroMobileWaveGradient)"
            strokeWidth="2"
          />
          <path
            d="M-70 455 C 40 345, 140 555, 250 440 S 385 360, 490 500"
            stroke="url(#heroMobileWaveGradient)"
            strokeWidth="1.8"
            opacity="0.72"
          />
          <path
            d="M-70 670 C 55 570, 140 780, 270 650 S 390 575, 490 715"
            stroke="url(#heroMobileWaveGradient)"
            strokeWidth="1.5"
            opacity="0.52"
          />
        </svg>
      </div>

      {/* DESKTOP: decoración y animaciones originales. */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute -left-40 top-[25%] h-[450px] w-[450px] rounded-full bg-blue-200/35 blur-[110px]" />
        <div className="absolute -right-40 top-[5%] h-[500px] w-[500px] rounded-full bg-violet-200/40 blur-[120px]" />

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1600 850"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <defs>
            <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
              <stop offset="40%" stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="hero-wave-one"
            d="M-100 230 C250 40 380 450 760 270 S1300 100 1750 290"
            stroke="url(#heroWaveGradient)"
            strokeWidth="2"
          />
          <path
            className="hero-wave-two"
            d="M-100 670 C300 470 450 850 850 650 S1300 480 1750 650"
            stroke="url(#heroWaveGradient)"
            strokeWidth="2"
          />
        </svg>

        <div className="liquid-shape-left absolute -left-[140px] bottom-[5%] h-[440px] w-[440px] opacity-70">
          <div
            className="h-full w-full rounded-[48%_52%_62%_38%/42%_45%_55%_58%]"
            style={{
              background:
                "radial-gradient(ellipse at 28% 24%, #ffffff 0%, #e9d5ff 18%, #b9b5ff 42%, #93c5fd 65%, #c4b5fd 82%, #ffffff 100%)",
              boxShadow:
                "inset 22px 25px 45px rgba(255,255,255,0.85), inset -35px -35px 65px rgba(99,102,241,0.25), 20px 25px 75px rgba(139,92,246,0.12)",
              filter: "blur(1px)",
            }}
          />
        </div>

        <div className="liquid-shape-right absolute -right-[160px] top-[13%] h-[510px] w-[510px] opacity-75">
          <div
            className="h-full w-full rounded-[58%_42%_35%_65%/42%_58%_42%_58%]"
            style={{
              background:
                "radial-gradient(ellipse at 30% 25%, #ffffff 0%, #e9d5ff 15%, #c4b5fd 38%, #93c5fd 63%, #a78bfa 82%, #dbeafe 100%)",
              boxShadow:
                "inset 30px 30px 55px rgba(255,255,255,0.9), inset -45px -40px 75px rgba(99,102,241,0.25), -20px 30px 90px rgba(59,130,246,0.12)",
              filter: "blur(1px)",
            }}
          />
        </div>

        <div className="hero-orb absolute left-[9%] top-[12%] h-7 w-7 rounded-full bg-gradient-to-br from-white via-violet-300 to-blue-400 shadow-lg shadow-blue-300/30" />
        <div className="hero-orb absolute right-[13%] bottom-[14%] h-10 w-10 rounded-full bg-gradient-to-br from-white via-blue-300 to-violet-400 shadow-lg shadow-violet-300/30" />
        <div className="hero-orb absolute right-[4%] top-[8%] h-5 w-5 rounded-full bg-gradient-to-br from-white via-violet-200 to-blue-400" />
      </div>
    </div>
  );
}
