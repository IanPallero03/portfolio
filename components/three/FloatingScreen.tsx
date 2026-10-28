
"use client";

import { RoundedBox, Text } from "@react-three/drei";

type ScreenVariant = "code" | "website" | "dashboard";

type FloatingScreenProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  variant?: ScreenVariant;
};

function Panel({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number];
  color: string;
}) {
  return (
    <mesh position={position}>
      <planeGeometry args={size} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

function ScreenContent({
  variant,
}: {
  variant: ScreenVariant;
}) {
  if (variant === "code") {
    return (
      <group>
        <Text
          position={[-1.28, 0.35, 0.09]}
          fontSize={0.14}
          color="#a78bfa"
          anchorX="left"
        >
          developer.tsx
        </Text>

        {Array.from({ length: 6 }, (_, index) => (
          <Panel
            key={index}
            position={[-0.48, 0.05 - index * 0.2, 0.09]}
            size={[1.55 - (index % 3) * 0.25, 0.055]}
            color={
              index % 2 === 0 ? "#8b5cf6" : "#3b82f6"
            }
          />
        ))}
      </group>
    );
  }

  if (variant === "dashboard") {
    return (
      <group>
        <Text
          position={[-1.28, 0.35, 0.09]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="left"
        >
          Analytics
        </Text>

        <Panel
          position={[-0.78, -0.05, 0.09]}
          size={[0.95, 0.65]}
          color="#343b65"
        />

        <Panel
          position={[0.48, -0.05, 0.09]}
          size={[1.25, 0.65]}
          color="#292f55"
        />

        {[0.3, 0.55, 0.4, 0.75, 0.6].map(
          (height, index) => (
            <Panel
              key={index}
              position={[
                -0.05 + index * 0.23,
                -0.68 + height / 2,
                0.1,
              ]}
              size={[0.12, height]}
              color={
                index % 2 === 0
                  ? "#8b5cf6"
                  : "#3b82f6"
              }
            />
          )
        )}
      </group>
    );
  }

  return (
    <group>
      <Text
        position={[0, 0.32, 0.09]}
        fontSize={0.26}
        color="#ffffff"
        anchorX="center"
      >
        Creative Developer
      </Text>

      <Text
        position={[0, 0.02, 0.09]}
        fontSize={0.13}
        color="#a78bfa"
        anchorX="center"
      >
        Building digital experiences
      </Text>

      <Panel
        position={[0, -0.43, 0.09]}
        size={[1.35, 0.3]}
        color="#8b5cf6"
      />

      <Text
        position={[0, -0.43, 0.1]}
        fontSize={0.12}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Explore Projects
      </Text>
    </group>
  );
}

export default function FloatingScreen({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  variant = "website",
}: FloatingScreenProps) {
  return (
    <group position={position} rotation={rotation}>
      {/* Marco */}
      <RoundedBox
        args={[3.2, 2.1, 0.12]}
        radius={0.12}
        smoothness={4}
      >
        <meshStandardMaterial
          color="#1b2035"
          metalness={0.4}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Pantalla */}
      <Panel
        position={[0, 0, 0.07]}
        size={[2.95, 1.85]}
        color="#101426"
      />

      {/* Barra superior */}
      <Panel
        position={[0, 0.72, 0.08]}
        size={[2.95, 0.28]}
        color="#242a43"
      />

      {/* Botones del navegador */}
      {[-1.25, -1.08, -0.91].map((x, index) => (
        <mesh key={index} position={[x, 0.72, 0.09]}>
          <circleGeometry args={[0.045, 24]} />
          <meshBasicMaterial
            color={
              ["#ff5f57", "#febc2e", "#28c840"][index]
            }
          />
        </mesh>
      ))}

      <ScreenContent variant={variant} />
    </group>
  );
}

