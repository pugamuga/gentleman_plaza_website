"use client";
import Image from "next/image";
import shesterni from "../../../public/assets/roadmap.gif";
import Element from "@/components/Element";
import { Suspense } from "react";

export default function Newspaper() {
  return (
    <>
      <main className="w-screen px-[10vw] md:flex  justify-between items-center  relative mt-10 hidden">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <p className="text-[100px] font-main">Whitepaper</p>
            <p className="text-[60px] font-main -mt-12">How it working?</p>
          </div>
          <Element name="navbarTextEl" className="w-12 ml-4 rotate-[-90deg]" />
        </div>
        <Suspense fallback={<div className="absolute-center">Loading...</div>}>
          <div className="relative">
            <Image src={shesterni} alt={"roadmapgif"} className="w-[600px]" />
            <button
              className="bg-black text-white px-6 py-4 
            font-bold hover:text-white/80 tr-300 rounded-sm text-sm font-serif absolute-center"
            >
              Read Whitepaper
            </button>
          </div>
        </Suspense>

      </main>
    </>
  );
}

function MainTextNewsPaper() {
  return (
    <div className="h-[400px] text min-w-[400px] w-[600px] mt-10">
      <div className="flex justify-center items-center font-main -mt-4 ">
        <Element name="textEl" className="w-12 mr-2" />
        <div className=" relative text-center">
          <p className="text-[80px]">Newspaper</p>
          <p className="text-[60px] mt-[-40px] ">For early gentlemen</p>
        </div>
        <Element name="textEl" className="w-12 scale-x-[-100%] ml-2" />
      </div>
      <div className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        expedita dicta provident, beatae quo dolores minima eius in esse eveniet
        quidem voluptate alias, labore odit. Accusamus reprehenderit quisquam
        amet. Distinctio dolores adipisci cum quod consequatur placeat facilis
        voluptatum ea molestias possimus! Magni ipsa in neque accusamus, sequi
        odit consequuntur molestiae necessitatibus, aut at, quos animi a nihil
        quis omnis enim illo. Enim deserunt, sunt odit corporis magni esse,
        facilis illum ut ex hic veritatis ratione dolorem iusto repellat
        doloribus nemo assumenda? Voluptatem tempore repudiandae sint, deleniti
        ipsum, assumenda repellat facere sequi dicta quod cupiditate perferendis
        voluptatibus maxime expedita tempora nisi!
      </div>
    </div>
  );
}
