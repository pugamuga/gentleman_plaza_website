import SliderGames from "./SliderGames";
import Element from "./Element";

export default function AboutGames() {
  return (
    <main className="w-screen px-[10vw] flex justify-between">
      <div className="flex justify-center items-center">
        <TextElementGames />
      </div>
      <div className="px-10" />
      <div>
        <SliderGames />
      </div>
    </main>
  );
}

function TextElementGames() {
  return (
    <>
      <div className="h-[400px] min-w-[400px] w-full flex flex-col items-center justify-center">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          expedita dicta provident, beatae quo dolores minima eius in esse
          eveniet quidem voluptate alias, labore odit. Accusamus reprehenderit
          quisquam amet. Distinctio dolores adipisci cum quod consequatur
          placeat facilis voluptatum ea molestias possimus! Magni ipsa in
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
