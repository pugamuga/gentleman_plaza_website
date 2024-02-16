'use client'
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Float,  } from "@react-three/drei";


export default function RouletteSlider() {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <div className="w-[400px] h-[400px] grayscale">
        <Canvas
          camera={{
            fov: 30,
          }}
          // className="test w-[400px] h-[400px]"
        >
          <Roulette3d />
        </Canvas>
      </div>
      <div>
        <h1 className="text-[60px] font-main text-center">Roulette</h1>
        <p className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti,
          aut necessitatibus! Numquam itaque expedita tempora suscipit aliquid
          sunt necessitatibus perferendis.
        </p>
      </div>
    </main>
  )
}


function Roulette3d() {
    const coinModel = useGLTF("./assets/3d/roulette.glb");
    useFrame(() => {
      coinModel.scene.rotation.y += 0.05;
    });
    return (
      <>
        <directionalLight
          position={[0, 9, 10]}
          intensity={0.7}
          color={"lightyellow"}
        />
        <ambientLight intensity={1.5} />
        {/* <pointLight position={[0, 0, 5]} intensity={1} color={"#ffffff"} /> */}
        <Float rotationIntensity={1.7}>
          <mesh rotation={[-1/3,0,0]} scale={0.2} position={[0,-0.3,0]}>
            <primitive object={coinModel.scene} scale={1} rotation-x={1.2} />
          </mesh>
        </Float>
      </>
    );
  }