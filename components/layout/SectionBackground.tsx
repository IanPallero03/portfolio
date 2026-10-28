
type SectionBackgroundProps = {
    variant?: "about" | "timeline";
  };
  
  export default function SectionBackground({
    variant = "about",
  }: SectionBackgroundProps) {
    const isAbout = variant === "about";
  
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* LUCES AMBIENTALES */}
        <div
          className={`absolute rounded-full blur-[100px] ${
            isAbout
              ? "-left-40 top-[8%] h-[500px] w-[500px] bg-blue-300/25"
              : "-left-48 top-[10%] h-[550px] w-[550px] bg-violet-300/25"
          }`}
        />
  
        <div
          className={`absolute rounded-full blur-[110px] ${
            isAbout
              ? "-right-40 bottom-[5%] h-[550px] w-[550px] bg-violet-300/25"
              : "-right-48 top-[45%] h-[600px] w-[600px] bg-blue-300/25"
          }`}
        />
  
        {/* LÍNEAS CURVAS ESTILO HERO */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 1000"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={
              isAbout
                ? "M -100 300 C 250 50, 450 600, 800 300 S 1300 100, 1550 250"
                : "M -100 250 C 300 600, 500 50, 900 350 S 1300 650, 1550 250"
            }
            stroke="#8B5CF6"
            strokeOpacity="0.18"
            strokeWidth="2"
          />
  
          <path
            d={
              isAbout
                ? "M -100 700 C 300 450, 600 950, 1000 650 S 1300 450, 1550 750"
                : "M -100 750 C 350 400, 650 950, 1050 650 S 1350 400, 1550 700"
            }
            stroke="#3B82F6"
            strokeOpacity="0.16"
            strokeWidth="2"
          />
        </svg>
  
        {/* ESFERAS DIFUMINADAS */}
        <div
          className={`absolute rounded-full bg-gradient-to-br from-violet-200/70 via-purple-200/50 to-blue-300/60 blur-[2px] ${
            isAbout
              ? "-right-24 top-[12%] h-64 w-64"
              : "-left-28 bottom-[10%] h-72 w-72"
          }`}
        />
  
        <div
          className={`absolute rounded-full bg-gradient-to-br from-blue-200/60 via-violet-200/50 to-purple-200/60 blur-[2px] ${
            isAbout
              ? "-left-20 bottom-[15%] h-44 w-44"
              : "-right-20 top-[20%] h-52 w-52"
          }`}
        />
  
        {/* PEQUEÑAS ESFERAS */}
        <div className="absolute left-[12%] top-[18%] h-5 w-5 rounded-full bg-gradient-to-br from-white via-violet-200 to-blue-400 opacity-70 shadow-lg" />
  
        <div className="absolute right-[16%] bottom-[20%] h-8 w-8 rounded-full bg-gradient-to-br from-white via-blue-200 to-violet-400 opacity-60 shadow-lg" />
  
        {/* PUNTOS DECORATIVOS */}
        <div className="absolute right-[25%] top-[12%] h-1.5 w-1.5 rounded-full bg-primary/40" />
  
        <div className="absolute left-[20%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-secondary/40" />
      </div>
    );
  }
  