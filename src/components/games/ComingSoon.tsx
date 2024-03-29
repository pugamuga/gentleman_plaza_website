"use client";

import Pepe from "../Pepe";

export default function ComingSoon({ size }: { size: number }) {
  return (
    <main className="flex flex-col w-full h-full justify-center items-center">
      <div className=" w-[400px] h-[400px] flex flex-col justify-center items-center">
        {/* <p className="font-main text-[60px] mt-[-20px]">Work in progress!</p> */}
        <Pepe type="Caphead" size={size} />
      </div>
      <div>
        <h1 className="text-[60px] font-main text-center">Coming Soon</h1>
        <p className="text-center">
          {`We are preparing games with unique and thrilling gameplay and mechanics. Stay tuned!`}
        </p>
      </div>
    </main>
  );
}
