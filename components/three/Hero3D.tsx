
"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[420px] w-full sm:h-[520px]" />
  ),
});

export default function Hero3D() {
  return <HeroScene />;
}
