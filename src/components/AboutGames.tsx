"use client";
import SliderGames from "./SliderGames";
import Element from "./Element";

export default function AboutGames() {
  return (
    <main className="w-screen px-[10vw] flex justify-center">
      <div className="flex justify-center items-center">
        <TextElementGames />
      </div>
      <div className="px-[100px]" />
      <div>
        <SliderGames />
      </div>
    </main>
  );
}

function TextElementGames() {
  return (
    <>
      <div className="h-[400px] w-[400px]  flex flex-col items-center justify-center">
        <LineWithText text="Our games" />
        <div className="flex justify-center items-center font-main -mt-4">
          {/* <Element name="textEl" className="w-12 " /> */}
          <div className=" relative text-center">
            {/* <p className="text-[80px]">Fair gambling club</p> */}
            <p className="text-[60px]"> Blockchain Games</p>
          </div>
          {/* <Element name="textEl" className="w-12 scale-x-[-100%] -ml-2" /> */}
        </div>
        <div className="text-center">
          {`The gentlemen's club deserves the finest, hence our games are
          impeccably fair and boast a luxurious design that will captivate your
          greedy soul. We value community feedback, so in the near future, we'll
          add games that resonate with you specifically!`}
        </div>
        <Element name="photoframe" className="w-[50px] rotate-[45deg] mt-10" />
      </div>
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
