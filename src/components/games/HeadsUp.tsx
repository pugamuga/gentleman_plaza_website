"use client";

import Image from "next/image";
import pepeCard from "../../../public/assets/valetpepe.png";
import dogeCard from "../../../public/assets/valetdoge.png";

export default function HeadsUp() {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <div className=" w-[400px] h-[400px]">
        <HeadsUpImages />
      </div>
      <div>
        <h1 className="text-6xl font-main text-center">Heads Up Poker</h1>
        <p className="text-center">
         {`There's nothing more satisfying than going all in with a deuce and a
          seven offsuit, and crushing your opponent holding two aces, by landing
          a full house on the flop.`}
        </p>
      </div>
    </main>
  );
}

function HeadsUpImages() {
  return (
    <div className="relative flex space-x-[-60px] mb-10 grayscale justify-center items-center h-full">
      <Image
        src={dogeCard}
        alt="main banner"
        width={200}
        height={400}
        className=" z-10 rotate-[-12deg] hover:rotate-[-20deg] tr-700 "
      />
      <Image
        src={pepeCard}
        alt="main banner"
        width={200}
        height={400}
        className=" z-0 rotate-12 hover:rotate-[20deg] tr-700 "
      />
    </div>
  );
}
