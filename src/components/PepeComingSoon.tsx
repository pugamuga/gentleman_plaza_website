'use client'

import Pepe from "./Pepe";

export default function PepeComingSoon() {
  return (
    <main className=" bg-black flex flex-col justify-center items-center absolute-center z-50 w-48 h-48 rounded-full">
      <h1 className="text-5xl text-center font-main text-white -mb-[20px]">
        Coming Soon
      </h1>
      <Pepe type="Caphead" size={100} />
    </main>
  );
}
