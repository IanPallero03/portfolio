"usar cliente";

import { useEffect, useRef, useState } from "react";
importar gsap desde "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

tipo Proyecto = {
  id: cadena;
  título: cadena;
  categoría: cadena;
  descripción: cadena;
  destacados: cadena[];
  tecnologías: cadena[];
  video: cadena;
  ¿póster?: cadena;
  tema: "violeta" | "azul" | "oscuro";
  ¿demo?: cadena;
  github?: cadena;
};

// Prefijo necesario para los archivos de public/ en GitHub Pages.
// En desarrollo local las rutas se mantienen sin prefijo.
const assetBasePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";
const assetUrl = (path: string) => `${assetBasePath}${path}`;

const proyectos: Proyecto[] = [
  {
    id: "01",
    Título: "SignagePro",
    categoría: "SAAS · SEÑALIZACIÓN DIGITAL · TRABAJO EN EQUIPO",
    descripción: "Plataforma SaaS para gestionar y distribuir contenido de forma remota en Múltiples pantallas. Participé en el desarrollo Front-End, la identidad visual y la mejora de la experiencia de usuario.",
    destacados: ["Nombre, paleta de colores y diseño del logo", "Componentes reutilizables y mejoras del tablero", "Landing responsive, animaciones y optimización de rendimiento"],
    tecnologías: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Módulos CSS", "GSAP"],
    video: "/video/signagepro.mp4",
    póster: "/images/signagepro-cover.png",
    tema: "violeta",
    demo: "https://signagepro.vercel.app/",
    github: "https://github.com/saass-Tv/SaaS-Tv-Front"
  },
  {
    id: "02",
    título: "Sistema de Reservas",
    categoría: "APLICACIÓN WEB · RESERVAS · FIREBASE",
    descripción: "Sistema de reservas para un restaurante, con validación de fechas y horarios, control de capacidad y bloqueo automático de sobrecupos. Incluye un panel de administración privado con sincronización de datos.",
    destacados: ["Reservas limitadas a la semana actual y control de disponibilidad", "Panel privado para consultar y gestionar reservas", "Firebase Authentication y sincronización mediante Firestore"],
    tecnologías: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Firestore"],
    video: "/video/reservas.mp4",
    tema: "azul",
    demo: "https://ianpallero03.github.io/sistema-reservas-restaurante/",
    github: "https://github.com/IanPallero03/sistema-reservas-restaurante"
  },
  {
    id: "03",
    Título: "TrailerBox",
    categoría: "DESCUBRIMIENTO DE PELÍCULAS · API de TMDB",
    descripción: "Aplicación responsive para descubrir películas, buscar por título, filtrar por géneros y categorías y visualizar tráilers mediante la API de TMDB.",
    destacados: ["Búsqueda dinámica de películas", "Filtros por categorías y géneros", "Componentes reutilizables e integración con API externa"],
    tecnologías: ["React", "Vite", "JavaScript", "Tailwind CSS", "TMDB API"],
    video: "/video/trailerbox.mp4",
    tema: "oscuro",
    demo: "https://ianpallero03.github.io/TrailerBox/",
    github: "https://github.com/IanPallero03/TrailerBox"
  },
];

función ProjectVideo({ proyecto }: { proyecto: Proyecto }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [inView, setInView] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [motionReduced, setMotionReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileRequested, setMobileRequested] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const elemento = wrapperRef.current;
    si (!elemento) regresar;

    const observador = nuevo IntersectionObserver(
      ([entrada]) => {
        const visible = entrada.isIntersecting;
        establecerEnVista(visible);
        si (visible) setHasBeenVisible(true);
      },
      { umbral: 0,35 }
    );
    observador.observar(elemento);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const actualización = () => {
      setMotionReduced(motionQuery.matches);
      setIsMobile(mobileQuery.matches);
    };
    actualizar();
    motionQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);

    return () => {
      observador.desconectar();
      motionQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  // En móviles, no asignamos src hasta que el visitante solicita reproducir.
  // En el escritorio mantenemos la carga diferida y la reproducción automática originales.
  const shouldLoadVideo = isMobile ? mobileRequested : hasBeenVisible;

  useEffect(() => {
    const video = videoRef.current;
    si (!video) regresar;

    const permitido = esMóvil
      ? mobileRequested && inView && !manualPause
      : hasBeenVisible && inView && !manualPause && !motionReduced;

    si (!permitido) {
      video.pausa();
      devolver;
    }

    const playVideo = () => {
      void video.play().catch(() => setPlaying(false));
    };

    Si (video.readyState >= 2) {
      reproducirVideo();
    } demás {
      video.addEventListener("loadeddata", playVideo, { once: true });
      return () => video.removeEventListener("loadeddata", playVideo);
    }
  }, [hasBeenVisible, inView, manualPause, motionReduced, isMobile, mobileRequested]);

  const oscuro = proyecto.tema === "oscuro";
  devolver (
    <div ref={wrapperRef} className={`v2-visual relative min-w-0 overflow-hidden rounded-[24px] p-3 shadow-[0_30px_80px_rgba(30,30,80,0.12)] sm:rounded-[32px] sm:p-6 lg:p-9 ${project.theme === "violet" ? "bg-gradient-to-br from-[#D8CBFF] to-[#C7DFFF]" : project.theme === "blue" ? "bg-gradient-to-br from-[#C7E2FF] to-[#AFCBFF]" : "bg-gradient-to-br from-[#292147] to-[#10111F]"}`}>
      <div className={`v2-video-depth relative overflow-hidden rounded-[14px] border-[5px] shadow-[0_20px_55px_rgba(0,0,0,0.2)] sm:rounded-[20px] sm:border-[8px] ${dark ? "border-[#080913] bg-[#080913]" : "border-[#17192D] bg-[#17192D]"}`}>
        <div className="flex h-8 items-center gap-1.5 px-3 sm:h-10 sm:px-4">
          <span className="h-2 w-2 rounded-full bg-red-400"/><span className="h-2 w-2 rounded-full bg-yellow-400"/><span className="h-2 w-2 rounded-full bg-green-400"/>
          <span className="mx-auto max-w-[70%] truncate font-mono text-[9px] text-white/50 sm:text-[11px]">{project.title} · Vista real</span>
        </div>
        <div className="relative aspect-video bg-[#F7F7FF]">
          {isMobile && !mobileRequested && (
            <div
              className="absoluto inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#17192D] via-[#302754] to-[#242E57] px-4 text-center text-white"
              estilo={proyecto.póster ? {
                backgroundImage: `linear-gradient(rgba(16,20,38,.3),rgba(16,20,38,.65)), url('${assetUrl(project.poster)}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } : indefinido}
            >
              <span className="font-heading text-xl font-bold sm:text-2xl">{project.title}</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/75">Tocá para ver la demo</span>
            </div>
          )}
          <video
            ref={videoRef}
            src={shouldLoadVideo ? assetUrl(project.video) : undefined}
            póster={proyecto.póster ? assetUrl(proyecto.póster) : indefinido}
            apagado
            juegaEnLínea
            bucle
            precarga={isMobile ? "ninguno" : "metadatos"}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className={`absolute inset-0 h-full w-full object-cover ${isMobile && !mobileRequested ? "invisible" : ""}`}
            aria-label={`Video de demostración de ${project.title}`}
          />
          <botón
            tipo="botón"
            onClick={() => {
              si (jugando) {
                establecerPausaManual(verdadero);
                videoRef.current?.pause();
              } demás {
                establecerPausaManual(falso);
                si (esMóvil) {
                  setMobileRequested(true);
                  // El efecto de reproducción espera a que se carguen los datos.
                } else if (hasBeenVisible) {
                  void videoRef.current?.play().catch(() => setPlaying(false));
                } demás {
                  setHasBeenVisible(true);
                }
              }
            }}
            className="absoluto inferior-3 derecha-3 redondeado-completo borde borde-blanco/20 bg-[#17192D]/85 px-4 py-2 texto-xs fuente-seminegrita texto-blanco fondo-desenfoque-md transición pasar el ratón:bg-violeta-600 sm:inferior-4 sm:derecha-4"
            aria-label={¿jugando? `Pausar video de ${project.title}` : `Reproducir video de ${project.title}`}
          >
            {jugando ? "Ⅱ Pausar" : "▶ Reproducir"}
          </button>
        </div>
      </div>
      <span className={`mt-4 block text-right font-mono text-[10px] uppercase tracking-[0.18em] ${dark ? "text-white/55" : "text-[#33325A]/55"}`}>Vista real del proyecto · {project.id} / 03</span>
    </div>
  );
}

función ProjectRow({ proyecto, índice }: { proyecto: Proyecto; índice: número }) {
  devolver (
    <article className="v2-project relative grid items-center gap-9 border-t border-[#17192D]/10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">
      <div className={`v2-copy min-w-0 ${index % 2 ? "lg:order-2" : ""}`}>
        <div className="mb-7 flex items-center gap-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-600">
          <span>{project.id} / 03</span><span className="h-px w-10 bg-violet-400"/><span className="text-slate-500">{project.category}</span>
        </div>
        <h3
          aria-label={proyecto.título}
          className="v2-title break-words font-heading text-[clamp(3.3rem,6.2vw,7rem)] font-bold leading-[0.94] tracking-[-0.075em] text-[#17192D]"
        >
          {proyecto.título.split(" ").map((palabra, índice de palabra) => (
            <span key={`${project.id}-${wordIndex}`} aria-hidden="true" className="inline-block overflow-hidden align-bottom pb-[0.08em]">
              <span className="v2-word inline-block">{word}</span>
              {wordIndex < project.title.split(" ").length - 1 && <span className="inline-block whitespace-pre"> </span>}
            </span>
          ))}
          <span aria-hidden="true" className="v2-word inline-block text-[#8B5CF6]">.</span>
        </h3>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">{project.description}</p>
        <ul className="mt-6 max-w-xl space-y-2.5 text-sm leading-relaxed text-slate-600">
          {project.highlights.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"/>{item}</li>)}
        </ul>
        <div className="mt-7 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-violet-700">{tech}</span>)}</div>
        <div className="mt-9 flex flex-wrap gap-3">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#17192D] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-600">Ver proyecto <span aria-hidden="true">↗</span></a>}
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#17192D]/20 px-6 py-3 text-sm font-semibold text-[#17192D] transition hover:border-violet-500 hover:text-violet-600">Ver código <span aria-hidden="true">↗</span></a>}
        </div>
      </div>
      <div className={`min-w-0 ${index % 2 ? "lg:order-1" : ""}`}><ProjectVideo project={project}/></div>
    </artículo>
  );
}

export default function ProjectsShowcaseV2() {
  const sectionRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    // Las animaciones de entrada funcionan en escritorio y móvil.
    // Respetamos la preferencia del usuario por movimiento reducido.
    Si (window.matchMedia("(prefers-reduced-motion: reduce)").coincide) regresa;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    // Animaciones decorativas: se ejecutan solo cerca de esta sección.
    // Los ScrollTrigger de aparición y paralaje permanecen independientes.
    const DecorativeTweens: gsap.core.Tween[] = isMobile ? [] : [
      gsap.to(".projects-liquid-left", {
        x: 25, y: -22, rotación: 8, duración: 10,
        ease: "sine.inOut", repeat: -1, yoyo: true,
        escalonamiento: 1,6,
      }),
      gsap.to(".projects-liquid-right", {
        x: -22, y: 28, rotación: -7, duración: 12,
        ease: "sine.inOut", repeat: -1, yoyo: true,
        escalonamiento: 1,6,
      }),
      gsap.to(".proyectos-ola-uno", {
        x: 35, y: -15, duración: 12,
        ease: "sine.inOut", repeat: -1, yoyo: true,
      }),
      gsap.to(".proyectos-ola-dos", {
        x: -40, y: 20, duración: 15,
        ease: "sine.inOut", repeat: -1, yoyo: true,
      }),
      gsap.to(".projects-orb", {
        x: 10, y: -18, duración: 5, desfase: 0,8,
        ease: "sine.inOut", repeat: -1, yoyo: true,
      }),
    ];

    // Evita animar el fondo de proyectos mientras estamos en el Hero.
    DecorativeTweens.forEach((tween) => tween.pause());

    const sección = sectionRef.current;
    const observer = section && DecorativeTweens.length > 0
      ? nuevo IntersectionObserver(
          ([entrada]) => {
            DecorativeTweens.forEach((tween) => {
              Si (entrada.isIntersecting) tween.resume();
              de lo contrario, tween.pause();
            });
          },
          {umbral: 0, rootMargin: "100px 0px"}
        )
      : nulo;

    si (sección) observador?.observe(sección);

    // Encabezado editorial: etiqueta, títulos en máscara y descripción.
    const heading = sectionRef.current?.querySelector<HTMLElement>(".v2-heading");
    si (encabezado) {
      const headingTl = gsap.timeline({
        Disparador de desplazamiento: {
          desencadenante: encabezado,
          inicio: "85% superior",
          una vez: verdadero,
        },
      });

      encabezadoTl
        .fromTo(".v2-heading-label", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" })
        .fromTo(".v2-heading-line", { scaleX: 0 }, { scaleX: 1, duration: 0.9, ease: "power3.out" }, "-=0.35")
        .fromTo(".v2-heading-word", { yPercent: 110, rotate: 2 }, { yPercent: 0, rotate: 0, duration: 1.1, stagger: 0.16, ease: "power4.out" }, "-=0.5")
        .fromTo(".v2-heading-description", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.85, ease: "power3.out" }, "-=0.55")
        .fromTo(".v2-heading-footer", { autoAlpha: 0, y: 15 }, { autoAlpha: 1, y: 0, duration: 0.65, ease: "power2.out" }, "-=0.4");
    }

    const filas = gsap.utils.toArray<HTMLElement>(".v2-project");

    filas.forEach((fila, índice) => {
      const copy = row.querySelector<HTMLElement>(".v2-copy");
      const visual = row.querySelector<HTMLElement>(".v2-visual");
      const depth = row.querySelector<HTMLElement>(".v2-video-depth");
      const words = gsap.utils.toArray<HTMLElement>(row.querySelectorAll(".v2-word"));
      si (!copia || !visual) regresar;

      // La información entra desde el lateral correspondiente.
      gsap.fromTo(copiar,
        { autoAlpha: 0, x: índice % 2 === 0 ? (isMobile ? -28 : -55) : (isMobile ? 28 : 55) },
        {
          autoAlpha: 1, x: 0, duración: 1, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 82%", once: true },
        }
      );

      // El título se revela palabra por palabra, después del inicio del texto.
      si (palabras.longitud) {
        gsap.fromTo(palabras,
          { autoAlpha: 0, yPercent: 105, rotate: 2 },
          {
            autoAlpha: 1, yPercent: 0, rotate: 0,
            duración: 0,9, escalonamiento: 0,13, facilidad: "power3.out",
            scrollTrigger: { trigger: row, start: "top 80%", once: true },
          }
        );
      }

      // Aparición del marco de vídeo.
      gsap.fromTo(visual,
        { autoAlpha: 0, y: isMobile ? 35 : 85, scale: isMobile ? 0.98 : 0.94 },
        {
          autoAlpha: 1, y: 0, escala: 1, duración: 1.15, ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 83%", once: true },
        }
      );

      // El parallax se mantiene solo en escritorio para evitar trabajo
      // continuo de ScrollTrigger durante el desplazamiento en celulares.
      Si (profundidad && window.matchMedia("(min-width: 768px)").coincide) {
        gsap.fromTo(profundidad,
          { y: -14 },
          {
            y: 14, facilidad: "ninguna",
            Disparador de desplazamiento: {
              disparador: fila,
              inicio: "arriba abajo",
              fin: "parte inferior superior",
              fregar: 1.2,
              invalidateOnRefresh: verdadero,
            },
          }
        );
      }
    });

    return () => observer?.disconnect();
  }, { ámbito: sectionRef });
  devolver (
    <sección
  id="proyectos"
  ref={sectionRef}
  className="relative isolate overflow-hidden bg-[#F8FAFF] px-4 pb-24 pt-4 sm:px-8 sm:pt-10 lg:pt-16"
>
      {/* Fondo inspirado en HeroBackground: iridiscencias, ondas y esferas.
          Es decorativo y no intercepta clics ni interacción con los videos. */}
      <div
        aria-oculta="verdadera"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        estilo={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 94%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#F7F5FF_0%,#F1F5FF_30%,#F9F8FF_55%,#EEF5FF_78%,#F8F5FF_100%)]" />

        {/* Luces ambientales similares a las del Hero */}
        <div className="hidden md:block absolute -left-40 top-[15%] h-[450px] w-[450px] rounded-full bg-blue-200/35 blur-[45px] md:blur-[110px]" />
        <div className="hidden md:block absolute -right-40 top-[42%] h-[500px] w-[500px] rounded-full bg-violet-200/40 blur-[50px] md:blur-[120px]" />
        <div className="hidden md:block absolute -left-40 bottom-[5%] h-[450px] w-[450px] rounded-full bg-violet-200/30 blur-[45px] md:blur-[115px]" />

        {/* Ondas SVG a lo largo de la sección; ID único para evitar conflictos con Hero */}
        <svg
          className="hidden md:block absolute inset-0 h-full w-full opacity-80"
          viewBox="0 0 1600 2400"
          preserveAspectRatio="ninguno"
          rellenar="ninguno"
        >
          <defs>
            <linearGradient id="projectsWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
              <stop offset="40%" stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="projects-wave-one" d="M-100 340 C250 130 390 590 770 365 S1320 160 1750 390 M-100 1450 C280 1220 470 1640 850 1440 S1320 1230 1750 1470" stroke="url(#projectsWaveGradient)" strokeWidth="2" />
          <path className="projects-wave-two" d="M-100 920 C300 700 470 1130 850 925 S1320 730 1750 970 M-100 2050 C250 1850 450 2260 850 2050 S1320 1840 1750 2090" stroke="url(#projectsWaveGradient)" strokeWidth="2" />
        </svg>

        {/* Formas iridiscentes: ubicadas en los bordes para no tapar contenido */}
        <div className="projects-liquid-right hidden md:block absolute -right-[200px] top-[160px] h-[340px] w-[340px] opacity-65 md:-right-[10px] md:top-[180px] md:h-[440px] md:w-[440px]">
          <div className="h-full w-full rounded-[48%_52%_62%_38%/42%_45%_55%_58%]" style={{
            fondo: "gradiente radial(elipse en 28% 24%, #ffffff 0%, #e9d5ff 18%, #b9b5ff 42%, #93c5fd 65%, #c4b5fd 82%, #ffffff 100%)",
            boxShadow: "inset 22px 25px 45px rgba(255,255,255,0.85), inset -35px -35px 65px rgba(99,102,241,0.25), 20px 25px 75px rgba(139,92,246,0.12)",
            filtro: "desenfoque(1px)",
          }} />
        </div>
        <div className="projects-liquid-right hidden md:block absolute -right-[200px] top-[35%] h-[390px] w-[390px] opacity-70 md:-right-[165px] md:h-[510px] md:w-[510px]">
          <div className="h-full w-full rounded-[58%_42%_35%_65%/42%_58%_42%_58%]" style={{
            fondo: "gradiente radial(elipse al 30% 25%, #ffffff 0%, #e9d5ff 15%, #c4b5fd 38%, #93c5fd 63%, #a78bfa 82%, #dbeafe 100%)",
            boxShadow: "inset 30px 30px 55px rgba(255,255,255,0.9), inset -45px -40px 75px rgba(99,102,241,0.25), -20px 30px 90px rgba(59,130,246,0.12)",
            filtro: "desenfoque(1px)",
          }} />
        </div>
        <div className="projects-liquid-left hidden md:block absolute -left-[195px] bottom-[5%] h-[340px] w-[340px] opacity-60 md:-left-[155px] md:h-[440px] md:w-[440px]">
          <div className="h-full w-full rounded-[48%_52%_62%_38%/42%_45%_55%_58%]" style={{
            fondo: "gradiente radial(elipse en 28% 24%, #ffffff 0%, #e9d5ff 18%, #b9b5ff 42%, #93c5fd 65%, #c4b5fd 82%, #ffffff 100%)",
            boxShadow: "inset 22px 25px 45px rgba(255,255,255,0.85), inset -35px -35px 65px rgba(99,102,241,0.25), 20px 25px 75px rgba(139,92,246,0.12)",
            filtro: "desenfoque(1px)",
          }} />
        </div>

        {/*Esferas flotantes, distribuidas a diferentes alturas */}
        <div className="projects-orb hidden md:block absolute left-[8%] top-[7%] h-7 w-7 rounded-full bg-gradient-to-br from-white via-violet-300 to-blue-400 shadow-lg shadow-blue-300/30" />
        <div className="projects-orb hidden md:block absolute right-[10%] top-[29%] h-9 w-9 rounded-full bg-gradient-to-br from-white via-blue-300 to-violet-400 shadow-lg shadow-violet-300/30" />
        <div className="projects-orb hidden md:block absolute left-[6%] top-[65%] h-5 w-5 rounded-full bg-gradient-to-br from-white via-violet-200 to-blue-400" />
        <div className="projects-orb hidden md:block absolute right-[8%] bottom-[9%] h-7 w-7 rounded-full bg-gradient-to-br from-white via-violet-300 to-blue-400 shadow-lg shadow-blue-300/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px]">
        <div className="v2-heading relative mb-16 sm:mb-24">
          <div className="v2-heading-label mb-8 flex items-center gap-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-violet-500" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-violet-600 sm:text-xs">
              01 / Portafolio
            </span>
            <span className="v2-heading-line h-px flex-1 origin-left bg-gradient-to-r from-violet-400/60 to-transparent" />
          </div>

          {/* Luz iridiscente suave a la izquierda; la forma grande ahora flota a la derecha. */}
          <div
            aria-oculta="verdadera"
            className="projects-orb pointer-events-none absolute -left-[12%] top-[36%] hidden h-[250px] w-[250px] opacity-35 lg:block xl:-left-[6%] xl:h-[310px] xl:w-[310px]"
          >
            <div
              className="h-full w-full rounded-[53%_47%_58%_42%/48%_55%_45%_52%]"
              estilo={{
                fondo: "gradiente radial(elipse al 30% 25%, rgba(255,255,255,0.9) 0%, rgba(233,213,255,0.82) 22%, rgba(196,181,253,0.72) 43%, rgba(147,197,253,0.68) 66%, rgba(167,139,250,0.52) 84%, rgba(167,139,250,0) 100%)",
                boxShadow: "inset 20px 24px 55px rgba(255,255,255,0.65), 0 0 95px 35px rgba(167,139,250,0.18)",
                filtro: "desenfoque(16px)",
                WebkitMaskImage: "radial-gradient(ellipse, black 40%, transparent 78%)",
                maskImage: "radial-gradient(ellipse, black 40%, transparent 78%)",
              }}
            />
          </div>

          <h2 className="relative z-10 font-heading text-[clamp(3rem,7.5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.075em]">
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="v2-heading-word block text-[#17192D]">Proyectos</span>
            </span>
            <span className="block overflow-hidden pb-[0.12em]">
              <span className="v2-heading-word block bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                destacados.
              </span>
            </span>
          </h2>

          <p className="v2-heading-description mt-7 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Una selección de proyectos donde combina desarrollo Front-End, diseño de interfaces.
            y soluciones funcionales, con especial atención a la experiencia del usuario.
          </p>

          <div className="v2-heading-footer mt-9 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
            <span>Explorar proyectos</span>
            <span aria-hidden="true" className="text-violet-600">↓</span>
          </div>
        </div>
        {proyectos.map((proyecto, índice) => <FilaProyecto clave={proyecto.id} proyecto={proyecto} índice={índice}/>)}
      </div>
    </section>
  );
}
