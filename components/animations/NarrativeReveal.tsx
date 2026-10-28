
"use client";

import InfiniteMarquee from "@/components/about/InfiniteMarquee";

export default function NarrativeReveal() {
  return (
    <div
      className="
        relative flex w-full flex-col
        overflow-hidden bg-[#F8FAFF]
        px-6
        md:h-full
      "
    >
      {/* LUCES AMBIENTALES */}
      <div
        className="
          pointer-events-none absolute
          -left-24 top-1/4
          h-72 w-72 rounded-full
          bg-blue-300/25 blur-[85px]
        "
      />

      <div
        className="
          pointer-events-none absolute
          -right-24 bottom-1/4
          h-80 w-80 rounded-full
          bg-violet-300/25 blur-[90px]
        "
      />

      {/* ONDAS DECORATIVAS */}
      <svg
        className="
          pointer-events-none absolute inset-0
          h-full w-full opacity-50
        "
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-100 550 C 300 200, 550 850, 1000 400 S 1500 250, 1600 500"
          fill="none"
          stroke="#C4B5FD"
          strokeWidth="2"
        />

        <path
          d="M-100 650 C 350 350, 650 950, 1100 500 S 1500 400, 1600 600"
          fill="none"
          stroke="#93C5FD"
          strokeWidth="2"
        />
      </svg>

      {/* COMPOSICIÓN NARRATIVA */}
      <div
        className="
          relative z-10
          flex w-full flex-col
          items-center justify-center
          py-10
          sm:py-12
          md:h-full md:py-16
        "
      >
        {/* TEXTO */}
        <div className="mx-auto w-full max-w-6xl text-center">
          <span
            className="
              narrative-label
              mb-3 block
              font-mono text-xs font-medium
              uppercase tracking-[0.35em]
              text-primary
              sm:mb-6 sm:text-sm
            "
          >
            Mi forma de crear
          </span>

          <h2
            className="
              font-heading
              text-[clamp(3rem,8vw,8rem)]
              font-bold
              leading-[1.05]
              tracking-[-0.07em]
            "
          >
            <span className="narrative-word block text-[#101426]">
              Diseño.
            </span>

            <span
              className="
                narrative-word block
                bg-gradient-to-r
                from-primary to-secondary
                bg-clip-text text-transparent
              "
            >
              Código.
            </span>

            <span className="narrative-word block text-[#101426]">
              Creatividad.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}
          <p
            className="
              narrative-description
              mx-auto mt-4 max-w-xl
              text-base leading-relaxed
              text-slate-600
              sm:mt-8 sm:text-lg
            "
          >
            Tres elementos que combino para transformar ideas en
            experiencias digitales únicas.
          </p>
        </div>

        {/* CARRUSEL */}
        <div
          className="
          narrative-marquee
          -mx-6 mt-3
            w-[calc(100%+3rem)]
            shrink-0
            sm:mt-6
          "
        >
          <InfiniteMarquee />
        </div>
      </div>
    </div>
  );
}
