
"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Destacado", href: "#signagepro" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cerramos el menú con Escape.
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-white/60 bg-white/75 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* LOGO */}
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Volver al inicio"
          className="font-heading text-3xl font-bold tracking-tight text-foreground"
        >
          IP<span className="text-primary">.</span>
        </a>

        {/* NAVEGACIÓN DESKTOP */}
        <div className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative whitespace-nowrap
                text-[13px] font-medium text-slate-600
                transition-colors duration-300
                hover:text-primary
                focus-visible:rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-primary
                xl:text-sm
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CONTACTO DESKTOP */}
        <a
          href="#contacto"
          className="
            hidden items-center justify-center
            whitespace-nowrap rounded-full
            bg-foreground px-5 py-3
            text-sm font-medium text-white
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-primary
            hover:shadow-lg
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-primary
            lg:inline-flex xl:px-6
          "
        >
          Contacto ↗
        </a>

        {/* BOTÓN MENÚ MÓVIL */}
        <button
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            relative z-50 flex h-11 w-11
            flex-col items-center justify-center
            gap-1.5 rounded-xl
            border border-slate-200
            bg-white/80
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-primary
            lg:hidden
          "
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-foreground transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        id="mobile-navigation"
        inert={!menuOpen}
        aria-hidden={!menuOpen}
        className={`absolute left-0 top-20 w-full overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          menuOpen
            ? "visible max-h-[calc(100dvh-5rem)] overflow-y-auto opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 px-6 py-6">

          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="
                group flex items-center gap-4
                rounded-xl px-4 py-3
                text-base font-medium text-foreground
                transition-colors duration-300
                hover:bg-violet-50
                hover:text-primary
                focus-visible:outline-2
                focus-visible:outline-primary
              "
            >
              <span className="font-mono text-[10px] text-violet-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex-1">
                {link.label}
              </span>

              <span
                aria-hidden="true"
                className="
                  text-violet-400
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>
            </a>
          ))}

          {/* CONTACTO MÓVIL */}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="
              mt-3 flex items-center
              justify-between rounded-full
              bg-foreground px-6 py-4
              font-medium text-white
              transition-colors
              hover:bg-primary
            "
          >
            <span>Contactarme</span>
            <span aria-hidden="true">↗</span>
          </a>

        </div>
      </div>
    </header>
  );
}
