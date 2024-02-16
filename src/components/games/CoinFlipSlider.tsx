"use client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float } from "@react-three/drei";

export default function CoinFlipSlider() {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <div className="w-[400px] h-[400px] grayscale">
        <Canvas
          camera={{
            fov: 35,
          }}
          // className="test w-[400px] h-[400px]"
        >
          <Coin3d />
        </Canvas>
      </div>
      <div>
        <h1 className="text-[60px] font-main text-center">Coin Flip</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          aut necessitatibus! Numquam itaque expedita tempora suscipit aliquid
          sunt necessitatibus perferendis.
        </p>
      </div>
    </main>
  );
}

function Coin3d() {
  const coinModel = useGLTF("./assets/3d/coin-small-nm.glb");
  useFrame(() => {
    coinModel.scene.rotation.z += 0.005;
  });
  return (
    <>
      <directionalLight
        position={[0, 9, 10]}
        intensity={3.7}
        color={"lightyellow"}
      />
      <ambientLight intensity={14.5} />
      {/* <pointLight position={[0, 0, 5]} intensity={1} color={"#ffffff"} /> */}
      <Float rotationIntensity={2.7}>
        <mesh>
          <primitive object={coinModel.scene} scale={1} rotation-x={1.2} />
        </mesh>
      </Float>
    </>
  );
}
