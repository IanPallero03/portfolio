
export default function TimelineBackground() {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* CUADRÍCULA SUTIL */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(139, 92, 246, 0.09) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(139, 92, 246, 0.09) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "70px 70px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />
  
        {/* LUZ VIOLETA SUPERIOR */}
        <div className="absolute -left-48 top-[5%] h-[550px] w-[550px] rounded-full bg-violet-300/30 blur-[110px]" />
  
        {/* LUZ AZUL DERECHA */}
        <div className="absolute -right-48 top-[35%] h-[600px] w-[600px] rounded-full bg-blue-300/25 blur-[120px]" />
  
        {/* LUZ VIOLETA INFERIOR */}
        <div className="absolute -left-40 bottom-[5%] h-[500px] w-[500px] rounded-full bg-purple-200/35 blur-[110px]" />
  
        {/* CÍRCULOS DECORATIVOS */}
        <div className="absolute right-[10%] top-[18%] h-20 w-20 rounded-full border border-violet-300/40" />
  
        <div className="absolute left-[8%] top-[48%] h-12 w-12 rounded-full border border-blue-300/40" />
  
        <div className="absolute right-[14%] bottom-[12%] h-28 w-28 rounded-full border border-violet-200/50" />
  
        {/* PEQUEÑOS PUNTOS */}
        <div className="absolute left-[15%] top-[25%] h-2 w-2 rounded-full bg-primary/40" />
  
        <div className="absolute right-[20%] top-[60%] h-2 w-2 rounded-full bg-secondary/40" />
  
        <div className="absolute left-[22%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-primary/40" />
      </div>
    );
  }
  