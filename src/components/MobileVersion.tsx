"use client";
import Element from "./Element";
import Image from "next/image";
import pepeCard from "../../public/assets/valetpepe.png";
import dogeCard from "../../public/assets/valetdoge.png";
import CoinFlipSlider from "./games/CoinFlipSlider";
import ComingSoon from "./games/ComingSoon";
import HeadsUp from "./games/HeadsUp";
import RouletteSlider from "./games/RouletteSlider";
import ElementSeparator from "./ElementSeparator";

export default function MobileVersion() {
  return (
    <>
      <main className=" flex p-2 flex-col items-center md:hidden">
        {/* logo */}
        <div className="mt-10 mb-8 ">
          <div className=" text-2xl flex flex-col items-end relative">
            <Image
              src={pepeCard}
              alt="pepe"
              width={80}
              height={100}
              className="absolute left-[-55px] top-1/2 transform -translate-y-1/2 -z-10 rotate-[-12deg]"
            />
            <Image
              src={dogeCard}
              alt="pepe"
              width={50}
              height={100}
              className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 -z-10 rotate-[12deg]"
            />
            <p className="font-main text-[80px]">Gentlemen</p>
            <div className="flex w-full mt-5">
              <div className="bg-black h-[2px] w-full" />
              <p className="font-main text-[60px]">plaza</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[6px] bg-black " />
        <div className="my-[2px]" />
        <div className="w-full h-[2px] bg-black " />
        {/* logo */}
        <TextBlock />
        <div className="w-96 h-96 font-serif mt-10">
          <CoinFlipSlider />
        </div>
        <ElementSeparator />
        <div className="w-96 h-96 font-serif mt-10">
          <RouletteSlider />
        </div>
        <ElementSeparator />
        <div className="w-96 h-96 font-serif mt-10">
          <HeadsUp />
        </div>
        <ElementSeparator />
        <div className="w-96 h-96 font-serif ">
          <ComingSoon size={150} />
        </div>
        <ElementSeparator />
        <Whitelist />
        <div className="font-serif mt-[100px] -mb-[100px]">
          P.s. for best experience use desktop version
        </div>
      </main>
    </>
  );
}

function TextBlock() {
  return (
    <>
      <div className=" mt-[40px]">
        {/* <LineWithText text="LFG, Gentlemens " /> */}
        <div className="flex justify-center items-center font-main -mt-4">
          <Element name="textEl" className="w-6 " />
          <div className=" relative text-center">
            <p className="text-[60px]">Fair gambling club</p>
            <p className="text-[40px] mt-[-20px] "> Worked on the Blast</p>
          </div>
          <Element name="textEl" className="w-6 scale-x-[-100%] -ml-1" />
        </div>
        <div className="text-center  text-sm font-serif max-w-[340px]">
          {`Risk, thrill, greed, smoky clubs, and the bitter taste of whiskey.
            All this can be yours in our humble establishment. Gentlemen Plaza -
            the leading gambling platform with zero commissions and no rake.
            Here, games for the most esteemed degens. Join the gentlemen's club
            for excitement, respect, and luxurious bonuses. LFG Gentlemen!`}
        </div>
      </div>
    </>
  );
}

// function LineWithText({ text }: { text: string }) {
//   return (
//     <div className="w-full flex justify-between items-center font-serif mt-10">
//       <div className="bg-black h-[1px] w-full" />
//       <div className="text-sm mx-2 text-nowrap">{text}</div>
//       <div className="bg-black h-[1px] w-full" />
//     </div>
//   );
// }

function Whitelist() {
  return (
    <>
      <main className="w-screen px-[10vw] flex flex-col justify-center items-center space-y-[40px]">
        <div className="h-[200px] font-serif min-w-[300px] w-[300px] ">
          <div className="flex justify-center items-center font-main -mt-4 ">
            <div className=" relative text-center">
              <p className="text-[60px] ">For early gentlemen</p>
            </div>
          </div>
          <div className="text-center">
            For the swiftest access to information and seat reservations, we
            recommend securing a place on the whitelist. Details regarding
            closing times will soon be available on our Twitter account.
          </div>
        </div>
        <div className=" w-[300px] h-[160px] flex items-center justify-center relative">
          <Element name="ugol" className="w-8 absolute top-0 right-0 " />
          <Element
            name="ugol"
            className="w-8 absolute bottom-0 right-0 rotate-90 "
          />
          <Element
            name="ugol"
            className="w-8 absolute top-0 left-0 rotate-[270deg] "
          />
          <Element
            name="ugol"
            className="w-8 absolute bottom-0 left-0 rotate-[-180deg] "
          />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSezUKrKEtvqaM5UowgoeZIOGsf7BTkGpAC5-xG0wqOkqHrF3A/viewform"
            target="_blank"
            rel="noreferrer"
            className="bg-black text-white px-6 py-4 text-sm font-bold 
            hover:opacity-80 transition duration-300 rounded-sm font-serif cursor-pointer select-none"
          >
            Whitelist
          </a>
        </div>
      </main>
    </>
  );
}
