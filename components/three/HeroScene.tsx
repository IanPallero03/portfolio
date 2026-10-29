
"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

import FloatingScreen from "./FloatingScreen";
import { heroScrollState } from "../animations/scrollProgress";

function AnimatedScene({ isMobile }: { isMobile: boolean }) {
  const leftScreen = useRef<THREE.Group>(null);
  const rightScreen = useRef<THREE.Group>(null);
  const mainScreen = useRef<THREE.Group>(null);

  const { camera } = useThree();

  useFrame((_, delta) => {
    const progress = Math.min(heroScrollState.progress / 0.65, 1);
    const damping = 1 - Math.exp(-4 * delta);

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      8 - progress * 5,
      damping
    );

    if (leftScreen.current) {
      leftScreen.current.position.x = THREE.MathUtils.lerp(
        leftScreen.current.position.x,
        -progress * 4,
        damping
      );

      leftScreen.current.rotation.y = THREE.MathUtils.lerp(
        leftScreen.current.rotation.y,
        -progress * 0.35,
        damping
      );
    }

    if (rightScreen.current) {
      rightScreen.current.position.x = THREE.MathUtils.lerp(
        rightScreen.current.position.x,
        progress * 4,
        damping
      );

      rightScreen.current.rotation.y = THREE.MathUtils.lerp(
        rightScreen.current.rotation.y,
        progress * 0.35,
        damping
      );
    }

    if (mainScreen.current) {
      mainScreen.current.position.z = THREE.MathUtils.lerp(
        mainScreen.current.position.z,
        progress * 0.8,
        damping
      );
    }
  });

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={3} />

      <group ref={leftScreen}>
        <Float
          speed={1.2}
          rotationIntensity={isMobile ? 0 : 0.12}
          floatIntensity={isMobile ? 0 : 0.35}
        >
          <FloatingScreen
            position={[-2.6, 0.55, -2]}
            rotation={[0, 0.35, -0.12]}
            variant="code"
          />
        </Float>
      </group>

      <group ref={rightScreen}>
        <Float
          speed={1.5}
          rotationIntensity={isMobile ? 0 : 0.15}
          floatIntensity={isMobile ? 0 : 0.3}
        >
          <FloatingScreen
            position={[2.6, 0.25, -1.8]}
            rotation={[0, -0.35, 0.12]}
            variant="dashboard"
          />
        </Float>
      </group>

      <group ref={mainScreen}>
        <Float
          speed={1}
          rotationIntensity={isMobile ? 0 : 0.08}
          floatIntensity={isMobile ? 0 : 0.2}
        >
          <group scale={1.35}>
            <FloatingScreen
              position={[0, -0.35, 0.7]}
              rotation={[0, -0.08, 0]}
              variant="website"
            />
          </group>
        </Float>
      </group>
    </>
  );
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "100px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[420px] w-full sm:h-[540px]"
    >
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={isMobile ? 1 : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "low-power",
        }}
      >
        <AnimatedScene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
