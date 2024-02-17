"use client";
import Element from "./Element";
import { Suspense, useEffect } from "react";
import ParalaxDoge from "./ParalaxDoge";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";

export default function HeroNew() {
  const [showSpinnner, setShowSpinner] = useState(true);

  useEffect(() => {
    typeof window !== "undefined" && setShowSpinner(false);
  });

  return (
    <>
      <main className="px-[10vw] flex justify-center my-[20px] w-screen">
        <div className="relative w-[400px] h-[400px] border-2 rounded-full border-black ">
          <Element
            name="photoframe"
            className="w-[50px] absolute top-[0px] left-[0px] rotate-180"
          />
          <Element
            name="photoframe"
            className="w-[50px] absolute top-[0px] right-[0px] rotate-[270deg]"
          />
          <Element
            name="photoframe"
            className="w-[50px] absolute bottom-2 left-[0px] rotate-90"
          />
          <Element
            name="photoframe"
            className="w-[50px] absolute bottom-2 right-[0px] "
          />
          <div className="flex justify-center items-center">
            {showSpinnner && <CustomSpinner />}
            <Suspense
              fallback={<div className="absolute-center">Loading...</div>}
            >
              <ParalaxDoge />
            </Suspense>
          </div>
        </div>
        <div className="mx-[100px]" />
        {/* here start the text block */}
        <div className="max-h-[400px] text min-w-[400px] w-[600px] overflow-hidden">
          <LineWithText text="LFG, Gentlemens " />
          <div className="flex justify-center items-center font-main -mt-4">
            <Element name="textEl" className="w-12 " />
            <div className=" relative text-center">
              <p className="text-[80px]">Fair gambling club</p>
              <p className="text-[60px] mt-[-40px] "> Worked on the Blast</p>
            </div>
            <Element name="textEl" className="w-12 scale-x-[-100%] -ml-2" />
          </div>
          <div className="text-center  ">
            {`Risk, thrill, greed, smoky clubs, and the bitter taste of whiskey.
            All this can be yours in our humble establishment. Gentlemen Plaza -
            the leading gambling platform with zero commissions and no rake.
            Here, games for the most esteemed degens. Join the gentlemen's club
            for excitement, respect, and luxurious bonuses. LFG Gentlemen!`}
          </div>
        </div>
      </main>
    </>
  );
}

function LineWithText({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="bg-black h-[1px] w-full" />
      <div className="text-lg mx-2 text-nowrap">{text}</div>
      <div className="bg-black h-[1px] w-full" />
    </div>
  );
}

function CustomSpinner() {
  return <Spinner className="h-16 w-16 text-white/20 absolute z-[999]" />;
}
