
"use client";

import { forwardRef } from "react";

const AboutReveal = forwardRef<HTMLDivElement>(
  function AboutReveal(_, ref) {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center bg-[#F8FAFF] px-6 opacity-0"
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-primary">
            Conoceme
          </span>

          <h2 className="mt-6 font-heading text-5xl font-bold tracking-tight text-foreground sm:text-7xl">
            Sobre{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              mí.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            Me apasiona crear experiencias web donde el diseño,
            la tecnología y la creatividad se encuentran.
          </p>
        </div>
      </div>
    );
  }
);

export default AboutReveal;
