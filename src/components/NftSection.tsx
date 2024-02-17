"use client";

import { Canvas } from "@react-three/fiber";
import hand1 from "../../public/assets/hand-nft1.png";
import Image from "next/image";
import Element from "./Element";
import { Suspense } from "react";
import Ticket3d from "./Ticket3d";

export default function NftSection() {
  return (
    <div className="w-full px-[10vw] flex flex-col items-center justify-between tes ">
      <div className="flex items-center space-x-2 justify-center text-center">
        <Element name="textEl" className="w-6 " />
        <h1 className="font-main text-[60px]">Our gorgeous NFT collection</h1>
        <Element name="textEl" className="w-6 scale-x-[-100%]" />
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <Image src={hand1} alt="hand" height={100} width={200} />
        </div>
        <div className="w-[450px] h-[300px]">
          <Suspense
            fallback={<div className="absolute-center">Loading...</div>}
          >
            <Canvas className="w-full h-full select-none">
              <Ticket3d />
            </Canvas>
          </Suspense>
        </div>
        <div>
          <Image
            src={hand1}
            alt="hand"
            height={100}
            width={200}
            className="scale-x-[-100%]"
          />
        </div>
      </div>
      <TextAreaNft />
    </div>
  );
}

function TextAreaNft() {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-between text-center mt-10">
        <p>
          {`You don your black tuxedo and exquisite hat, groom your luxurious
          mustache, pick up your lovely lady, and head to indulge in life's
          pleasures at the finest spot in this little web3 space. Gentlemen with
          early access to the plaza may also enjoy some additional perks. For
          more details on bonuses, please refer to the NFT Boutique section.`}
        </p>
      </div>
    </>
  );
}
