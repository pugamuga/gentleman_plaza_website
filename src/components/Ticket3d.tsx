import { Float, Html, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import NFT from "../../public/assets/NFT.png";
import glitter from "../../public/assets/glitter.gif";

export default function Ticket3d() {
  return (
    <>
      <ambientLight />
      {/* <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} enableDamping={true} makeDefault/> */}
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
