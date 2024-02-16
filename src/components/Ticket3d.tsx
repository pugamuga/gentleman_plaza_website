'use client'


import { Float, Html } from "@react-three/drei";
import Image from "next/image";
import NFT from "../../public/assets/NFT.png";
import glitter from "../../public/assets/glitter.gif";

export default function Ticket3d() {
  return (
    <>
      <ambientLight />
      <Float rotationIntensity={1}>
        <Html position={[0, 0, -1]} center transform>
          <Image
            src={glitter}
            alt="glitter"
            className=" absolute-center scale-[60%] grayscale w-auto"
          />
          <Image
            src={NFT}
            alt="hand"
            height={300}
            width={450}
            className="w-auto"
          />
        </Html>
      </Float>
    </>
  );
}
