"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string[];
  video: string;
  poster: string;
  theme: "violet" | "blue" | "dark";
  demo: string;
  github: string;
  eyebrow: string;
  signature: string;
};

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
const asset = (path: string) => `${basePath}${path}`;

const projects: Project[] = [
  {
    id: "01",
    title: "SignagePro",
    eyebrow: "BUILD / 001",
    signature: "IDENTIDAD. INTERFACES. EVOLUCIÓN.",
    category: "SAAS · DIGITAL SIGNAGE · FRONT-END",
    description:
      "Plataforma SaaS para administrar contenido en pantallas de forma remota. Durante cinco meses formé parte de un equipo de desarrolladores, colaborando en la evolución del producto y su experiencia de usuario.",
    highlights: [
      "Adaptación responsive de la landing para distintas pantallas",
      "Diseño del nombre, logotipo y paleta de colores del producto",
      "Desarrollo de componentes y mejoras visuales del dashboard",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "CSS Modules", "GSAP"],
    video: "/video/signagepro.mp4",
    poster: "/images/signagepro-cover.png",
    theme: "violet",
    demo: "https://signagepro.vercel.app/",
    github: "https://github.com/saass-Tv/SaaS-Tv-Front",
  },
  {
    id: "02",
    title: "Sistema de Reservas",
    eyebrow: "BUILD / 002",
    signature: "ORGANIZACIÓN. CONTROL. CONFIANZA.",
    category: "WEB APP · GESTIÓN DE RESERVAS",
    description:
      "Aplicación para que los clientes reserven mesas y el restaurante gestione sus turnos desde un panel privado. El sistema aplica reglas de negocio para mantener organizada la disponibilidad.",
    highlights: [
      "Validación de fechas y horarios, con límites de capacidad para evitar sobrecupos",
      "Panel administrativo con acceso protegido mediante Firebase Authentication",
      "Persistencia de reservas y sincronización de datos con Firestore",
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore"],
    video: "/video/reservas.mp4",
    poster: "/images/Restaurante.webp",
    theme: "blue",
    demo: "https://ianpallero03.github.io/sistema-reservas-restaurante/",
    github: "https://github.com/IanPallero03/sistema-reservas-restaurante",
  },
  {
    id: "03",
    title: "TrailerBox",
    eyebrow: "BUILD / 003",
    signature: "DESCUBRIR. EXPLORAR. REPRODUCIR.",
    category: "ENTRETENIMIENTO · EXPERIENCIA WEB",
    description:
      "Catálogo cinematográfico interactivo pensado para explorar películas de forma ágil y visual, con una interfaz inspirada en las plataformas de streaming y adaptada a diferentes dispositivos.",
    highlights: [
      "Consumo de la API de TMDB para mostrar contenido actualizado",
      "Buscador por título y navegación mediante géneros y categorías",
      "Reproducción de tráilers e información ampliada de cada película",
    ],
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "TMDB API"],
    video: "/video/trailerbox.mp4",
    poster: "/images/trailer-box_11zon.webp",
    theme: "dark",
    demo: "https://ianpallero03.github.io/TrailerBox/",
    github: "https://github.com/IanPallero03/TrailerBox",
  },
];

const palettes = {
  violet: {
    base: "#16102C", accent: "#C9ABFF", surface: "#24183F",
    light: "rgba(161,112,255,.26)", edge: "rgba(196,155,255,.23)",
    gradient: "linear-gradient(125deg, #19112F 0%, #24163E 48%, #101931 100%)",
  },
  blue: {
    base: "#0B1B34", accent: "#8FD9FF", surface: "#102945",
    light: "rgba(65,165,255,.27)", edge: "rgba(137,209,255,.24)",
    gradient: "linear-gradient(125deg, #0B1B32 0%, #122E4D 52%, #1A1640 100%)",
  },
  dark: {
    base: "#100E1C", accent: "#E2B5FF", surface: "#1C1632",
    light: "rgba(187,95,255,.22)", edge: "rgba(217,159,255,.23)",
    gradient: "linear-gradient(125deg, #100E1C 0%, #241431 52%, #111528 100%)",
  },
};

function ProjectPreview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [requested, setRequested] = useState(false);
  const [playing, setPlaying] = useState(false);
  const palette = palettes[project.theme];

  useEffect(() => {
    const el = wrapperRef.current;
    const video = videoRef.current;
    if (!el || !video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) video.pause();
    }, { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) { video.pause(); return; }
    if (!requested) {
      video.src = asset(project.video);
      video.load();
      setRequested(true);
    }
    void video.play().catch(() => setPlaying(false));
  };

  return (
    <div ref={wrapperRef} className="relative min-w-0">
      {/* Marco editorial: no simula una ventana del navegador. */}
      <div className="relative overflow-hidden rounded-[18px] border border-white/20 bg-[#070B18] shadow-[0_32px_90px_rgba(0,0,0,.4)] lg:rounded-[26px]">
        <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[.045] px-4 py-2.5 sm:px-5">
          <div className="flex min-w-0 items-center gap-3">
            <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 shrink-0" aria-hidden="true">
              <path d="M16 2 29 9v14L16 30 3 23V9L16 2Z" stroke={palette.accent} strokeWidth="1.4" />
              <path d="M16 8v16M8 16h16M10.3 10.3l11.4 11.4M21.7 10.3 10.3 21.7" stroke={palette.accent} strokeWidth=".8" opacity=".65" />
              <circle cx="16" cy="16" r="3" fill={palette.accent} />
            </svg>
            <div className="min-w-0">
              <p className="font-mono text-[9px] font-bold uppercase tracking-[.22em] text-white/90 sm:text-[10px]">PROJECT / VISUALIZER</p>
              <p className="mt-0.5 truncate font-mono text-[9px] tracking-[.08em] text-white/45">{project.eyebrow} · PREVIEW REAL</p>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em]" style={{ color: palette.accent }}>
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-current opacity-30" />
              <span className="relative m-[2px] h-1 w-1 rounded-full bg-current" />
            </span>
            <span className="hidden sm:inline">DEMO DISPONIBLE</span><span className="sm:hidden">DEMO</span>
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden bg-[#090D1B] lg:aspect-[2.1/1] xl:aspect-[2.15/1]">
          {/* La portada se ve siempre sin descargar el mp4. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset(project.poster)} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <video
            ref={videoRef}
            preload="none"
            playsInline
            muted
            loop
            poster={asset(project.poster)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label={`Vista en video de ${project.title}`}
            className={`absolute inset-0 h-full w-full object-cover ${requested ? "opacity-100" : "opacity-0"}`}
          />
          {!playing && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080C18]/65 via-transparent to-[#080C18]/10" />
          )}
          {/* Control técnico discreto; sin etiquetas encima del video. */}
          <button
            type="button"
            onClick={toggle}
            aria-label={`${playing ? "Pausar" : "Reproducir"} video de ${project.title}`}
            title={playing ? "Pausar video" : "Reproducir video"}
            className="group absolute bottom-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-[9px] border bg-[#090D1B]/85 text-white shadow-[0_6px_18px_rgba(0,0,0,.25)] transition-[transform,background-color,border-color] duration-200 hover:scale-100 hover:bg-[#151B30] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:bottom-1 sm:right-1 sm:h-8 sm:w-8"
            style={{ borderColor: palette.edge }}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" aria-hidden="true" fill="currentColor" style={{ color: palette.accent }}>
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] cursor-pointer" aria-hidden="true" fill="currentColor" style={{ color: palette.accent }}>
                <path d="M8 5.5a1 1 0 0 1 1.54-.84l10 6.5a1 1 0 0 1 0 1.68l-10 6.5A1 1 0 0 1 8 18.5z" />
              </svg>
            )}
          </button>
        </div>
        <div className="relative z-10 flex min-h-[38px] items-center justify-between gap-4 border-t border-white/10 bg-[#080D1B] px-4 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-white/50 sm:px-5">
          <span className="truncate">{project.signature}</span>
          <span className="shrink-0" style={{ color: palette.accent }}>IP / 2026 ↗</span>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-[6px] -z-10 rounded-[28px] border opacity-50" style={{ borderColor: palette.edge }} aria-hidden="true" />
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const p = palettes[project.theme];
  return (
    <article className="relative isolate flex h-full min-h-0 w-full flex-col justify-between overflow-hidden rounded-[27px] border border-white/[.15] px-5 py-6 text-white shadow-[0_45px_120px_rgba(0,0,0,.4)] sm:px-8 lg:px-9 lg:py-5" style={{ background: p.gradient }}>
      {/* Capa para oscurecer las tarjetas secundarias sin transparentar sus textos. */}
      <div aria-hidden="true" className="orbit-card-dimmer pointer-events-none absolute inset-0 z-20 rounded-[27px] bg-[#050817] opacity-0" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] -top-[45%] aspect-square w-[70%] rounded-full" style={{ background: `radial-gradient(circle,${p.light} 0%,transparent 65%)` }} />
        <div className="absolute left-[43%] top-[-38%] text-[clamp(10rem,26vw,32rem)] font-black leading-none tracking-tighter text-white/[.035]">{project.id}</div>
        <svg viewBox="0 0 1100 700" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-30" fill="none" aria-hidden="true">
          <ellipse cx="690" cy="370" rx="570" ry="235" stroke={p.accent} strokeWidth="1" transform="rotate(-23 690 370)" strokeDasharray="4 13" />
          <ellipse cx="690" cy="370" rx="480" ry="170" stroke={p.accent} strokeWidth=".7" transform="rotate(-23 690 370)" />
        </svg>
      </div>
      <div className="relative z-10 mb-3 flex items-center justify-between gap-3 border-b border-white/15 pb-2.5 font-mono text-[9px] uppercase tracking-[.22em] sm:text-[10px]">
        <div className="flex min-w-0 items-center gap-2" style={{ color: p.accent }}><span className="text-white/80">IP—</span><span>SELECTED WORKS</span><span className="text-white/35">/ {project.id}</span></div>
        <span className="hidden text-white/55 sm:block">CREATIVE ENGINEERING</span>
      </div>
      <div className="relative z-10 grid min-h-0 items-center gap-6 lg:grid-cols-[.90fr_1.10fr] lg:gap-7 xl:gap-9">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[.15em] sm:text-[10px]" style={{ color: p.accent }}>
            <span className="h-px w-6 bg-current" /><span>{project.category}</span>
          </div>
          <h3 className="font-heading text-[clamp(2.3rem,9vw,4.5rem)] font-bold leading-[.96] tracking-[-.075em] lg:text-[clamp(2.25rem,3.65vw,4.5rem)] lg:leading-[.93]" style={{ overflowWrap: "anywhere" }}>
            {project.title}<span style={{ color: p.accent }}>.</span>
          </h3>
          <p className="mt-4 max-w-xl text-[13px] leading-[1.65] text-white/75 lg:mt-3 lg:text-[12px] lg:leading-[1.55] xl:text-[14px]">{project.description}</p>
          <div className="mt-4 space-y-2 lg:mt-3 lg:hidden xl:block xl:space-y-1">
            {project.highlights.slice(0, 2).map((highlight) => (
              <p key={highlight} className="flex gap-2 text-[12px] leading-relaxed text-white/65 lg:text-[11px]"><span style={{ color: p.accent }}>✦</span>{highlight}</p>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 lg:mt-3 lg:gap-1.5">
            {project.technologies.map((tech) => <span key={tech} className="rounded-full border border-white/20 bg-white/[.07] px-3 py-1.5 font-mono text-[10px] text-white/85 lg:px-2.5 lg:py-1 lg:text-[9px]">{tech}</span>)}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2.5 lg:mt-4">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 py-3 text-[11px] font-bold sm:px-5 sm:py-2.5 text-[#161427] transition hover:-translate-y-0.5 hover:bg-violet-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Ver proyecto <span aria-hidden="true">↗</span></a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-3 py-3 text-[11px] font-bold sm:px-5 sm:py-2.5 text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Ver código <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="min-w-0 lg:w-full lg:max-w-[530px] lg:justify-self-end"><ProjectPreview project={project} /></div>
      </div>
      <div className="relative z-10 mt-7 flex w-full shrink-0 flex-wrap items-center justify-between gap-x-5 gap-y-2 border-t border-white/15 pt-4 font-mono text-[9px] uppercase tracking-[.12em] text-white/45 lg:mt-5 lg:gap-6 lg:tracking-[.15em]">
        <span className="min-w-0">DESIGN / DEVELOPMENT</span><span className="shrink-0 whitespace-nowrap text-right">PROJECT {project.id} OF 03</span>
      </div>
    </article>
  );
}

export default function ProjectsShowcaseV2() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(track.querySelectorAll(".orbit-premium-card"));
      if (cards.length !== 3) return;

      // Nunca transparentamos las tarjetas: sus fondos ocultan de verdad
      // los textos de las tarjetas que están detrás.
      const positions = {
        center: { xPercent: 0, yPercent: 0, scale: 1, rotationY: 0, rotationZ: 0 },
        right: { xPercent: 69, yPercent: -8, scale: .58, rotationY: -35, rotationZ: 5 },
        left: { xPercent: -69, yPercent: 9, scale: .5, rotationY: 35, rotationZ: -5 },
      };
      const dimmers = cards.map(card => card.querySelector<HTMLElement>(".orbit-card-dimmer"));
      gsap.set(cards, { transformPerspective: 1600, transformOrigin: "50% 50%", backfaceVisibility: "hidden", force3D: true });
      gsap.set(cards[0], { ...positions.center, zIndex: 3 });
      gsap.set(cards[1], { ...positions.right, zIndex: 2 });
      gsap.set(cards[2], { ...positions.left, zIndex: 1 });
      gsap.set(dimmers[0], { opacity: 0 });
      gsap.set(dimmers[1], { opacity: .56 });
      gsap.set(dimmers[2], { opacity: .74 });

      let last = -1;
      const activate = (index: number) => {
        if (index === last) return;
        last = index;
        cards.forEach((card, i) => {
          card.style.pointerEvents = i === index ? "auto" : "none";
          card.inert = i !== index;
          if (i !== index) card.querySelectorAll("video").forEach(v => v.pause());
        });
      };
      activate(0);

      // La carta entrante ocupa la capa superior, pero permanece opaca.
      // El oscurecimiento crea profundidad SIN mezclar textos de dos proyectos.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          // Dejamos espacio bajo el navbar fijo de escritorio.
          start: "top top+=88",
          end: "+=2200",
          scrub: 0.95,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            activate(self.progress < .28 ? 0 : self.progress < .69 ? 1 : 2);
          },
        },
      });
      tl.to({}, { duration: .18 })
        .set(cards[1], { zIndex: 4 })
        .to(cards[0], { ...positions.left, duration: 1.35, ease: "none" })
        .to(cards[1], { ...positions.center, duration: 1.35, ease: "none" }, "<")
        .to(cards[2], { ...positions.right, duration: 1.35, ease: "none" }, "<")
        .to(dimmers[0], { opacity: .74, duration: 1.35, ease: "none" }, "<")
        .to(dimmers[1], { opacity: 0, duration: 1.35, ease: "none" }, "<")
        .to(dimmers[2], { opacity: .56, duration: 1.35, ease: "none" }, "<")
        .to({}, { duration: .52 })
        .set(cards[2], { zIndex: 5 })
        .to(cards[1], { ...positions.left, duration: 1.35, ease: "none" })
        .to(cards[2], { ...positions.center, duration: 1.35, ease: "none" }, "<")
        .to(cards[0], { ...positions.right, duration: 1.35, ease: "none" }, "<")
        .to(dimmers[0], { opacity: .56, duration: 1.35, ease: "none" }, "<")
        .to(dimmers[1], { opacity: .74, duration: 1.35, ease: "none" }, "<")
        .to(dimmers[2], { opacity: 0, duration: 1.35, ease: "none" }, "<")
        .to({}, { duration: .24 });

      return () => {
        tl.kill();
        cards.forEach(card => { card.inert = false; card.style.pointerEvents = ""; });
        gsap.set(cards, { clearProps: "all" });
        gsap.set(dimmers, { clearProps: "all" });
      };
    });
    // En celulares y tablets: recorrido vertical, sin pin ni scrub continuo.
    // La animación es de una sola entrada y respeta prefers-reduced-motion.
    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(
        track.querySelectorAll(".orbit-premium-card")
      );

      cards.forEach((card, index) => {
        // Un desplazamiento corto y una inclinación leve recuerdan la órbita
        // sin sobrecargar el scroll del celular.
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 36, x: index % 2 === 0 ? -12 : 12, rotation: index % 2 === 0 ? -1.2 : 1.2 },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            rotation: 0,
            duration: 0.9,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section id="proyectos" ref={sectionRef} className="relative bg-[#080B18] pb-20 pt-14 text-white lg:pt-20">
      <header className="relative z-10 mx-auto max-w-[1380px] px-5 pb-8 sm:px-10 lg:pb-0">
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[.24em] text-violet-300">
          <span>IP® — CREATIVE PORTFOLIO</span><span className="text-white/45">SELECTED WORK / 2026</span>
        </div>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4 lg:gap-10">
          <div>
            <h2 className="font-heading text-[clamp(3rem,6.2vw,6.5rem)] font-bold leading-[.95] tracking-[-.075em]">
              Proyectos <span className="bg-gradient-to-r from-[#D5B8FF] via-[#B9B4FF] to-[#7EC9FF] bg-clip-text text-transparent">destacados.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Una selección de proyectos donde combino desarrollo Front-End, diseño de interfaces y soluciones funcionales. Deslizá para explorar cada experiencia.
            </p>
          </div>
          <div className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[.18em] text-white/50 lg:flex">
            <span className="h-2 w-2 rounded-full bg-violet-300" /><span>EXPLORE THE SYSTEM ↓</span>
          </div>
        </div>
      </header>

      <div ref={stageRef} className="relative mx-auto w-full px-4 sm:px-6 lg:flex lg:h-[calc(100svh-88px)] lg:min-h-0 lg:items-center lg:justify-center lg:px-9 lg:pb-5 lg:pt-4" style={{ perspective: "1700px" }}>
        {/* Espacio orbital: todo estático salvo la transformación de las tarjetas. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 48%,rgba(122,75,220,.21),transparent 52%),radial-gradient(ellipse at 92% 25%,rgba(58,141,247,.12),transparent 43%)" }} />
          <svg viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" fill="none">
            <ellipse cx="720" cy="400" rx="655" ry="275" stroke="#BFA0FF" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3 10" transform="rotate(-14 720 400)" />
            <ellipse cx="720" cy="400" rx="545" ry="215" stroke="#8AC9FF" strokeOpacity=".13" strokeWidth="1" transform="rotate(-14 720 400)" />
            <circle cx="163" cy="356" r="4" fill="#D6B8FF" opacity=".7" /><circle cx="1290" cy="540" r="3" fill="#8AC9FF" opacity=".65" />
            <path d="M40 400H145 M1295 400H1400" stroke="#C4B5FD" strokeOpacity=".26" strokeDasharray="4 8" />
          </svg>
          <span className="absolute left-[3%] top-[23%] font-mono text-[10px] tracking-[.25em] text-violet-200/35">SYS / ORBIT—01</span>
          <span className="absolute bottom-[25%] right-[3%] font-mono text-[10px] tracking-[.25em] text-blue-200/35">DEPTH / 1600</span>
        </div>

        <div ref={trackRef} className="relative z-10 mx-auto flex w-full max-w-[1210px] flex-col gap-8 sm:gap-10 lg:block lg:h-[clamp(390px,calc(100svh-160px),545px)]">
          {projects.map((project, index) => (
            <div key={project.id} className="orbit-premium-card relative w-full lg:absolute lg:inset-0">
              <div className="mb-3 flex items-center gap-3 px-1 font-mono text-[10px] uppercase tracking-[.18em] text-white/50 lg:hidden">
                <span style={{ color: palettes[project.theme].accent }}>{project.id} / 03</span>
                <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent" />
                <span>{index === 0 ? "INICIO" : index === 1 ? "SIGUIENTE" : "ÚLTIMO PROYECTO"}</span>
              </div>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>


      </div>
      <div className="mx-auto mt-8 max-w-[1380px] border-t border-white/10 px-5 pt-5 text-center font-mono text-[10px] uppercase tracking-[.2em] text-white/40 sm:px-10 lg:mt-0">
        DISEÑO · DESARROLLO · EXPERIENCIAS INTERACTIVAS
      </div>
    </section>
  );
}