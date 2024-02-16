"use client";
import { Carousel } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import Element from "./Element";
import CoinFlipSlider from "./games/CoinFlipSlider";
import ComingSoon from "./games/ComingSoon";
import HeadsUp from "./games/HeadsUp";
import RouletteSlider from "./games/RouletteSlider";
import { Suspense } from "react";

const SliderGames: React.FC = () => {
  return (
    <main className="select-none">
      <ThemeProvider value={theme}>
        <Carousel className="w-[600px] h-[600px] " placeholder={null}>
          <div className=" w-full h-full flex justify-center items-center ">
            <Suspense
              fallback={<div className="">Loading...</div>}
            >
              <CoinFlipSlider />
            </Suspense>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <Suspense
              fallback={<div className="">Loading...</div>}
            >
              <RouletteSlider />
            </Suspense>
          </div>
          <div className=" w-full h-full flex justify-center items-center ">
            <Suspense
              fallback={<div className="">Loading...</div>}
            >
              <HeadsUp />
            </Suspense>
          </div>
          <div className="w-full h-full  flex justify-center items-center">
            <Suspense
              fallback={<div className="">Loading...</div>}
            >
              <ComingSoon />
            </Suspense>
          </div>
        </Carousel>
      </ThemeProvider>
    </main>
  );
};

export default SliderGames;

const theme: any = {
  carousel: {
    defaultProps: {
      prevArrow: ({ loop, handlePrev, firstIndex }: any) => {
        return (
          <button
            onClick={handlePrev}
            disabled={!loop && firstIndex}
            className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full 
            select-none transition-all disabled:opacity-20 disabled:shadow-none 
            disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px]
             text-white  grid place-items-center"
          >
            <Element
              className="w-6 absolute-center hover:scale-110 tr-300"
              name="arrow"
            />
          </button>
        );
      },
      nextArrow: ({ loop, handleNext, lastIndex }: any) => (
        <button
          onClick={handleNext}
          disabled={!loop && lastIndex}
          className="!absolute top-2/4 right-4 -translate-y-2/4 rounded-full select-none
           transition-all disabled:opacity-20 disabled:shadow-none 
           disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white  
           grid place-items-center"
        >
          <Element
            className="w-6 rotate-180 absolute-center hover:scale-110 tr-300"
            name="arrow"
          />
        </button>
      ),
      navigation: ({ setActiveIndex, activeIndex, length }: any) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer border  rounded-full transition-colors content-[''] ${
                activeIndex === i ? "border-black" : "border-black/10"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      ),
      autoplay: false,
      autoplayDelay: 5000,
      transition: {
        type: "tween",
        duration: 0.5,
      },
      loop: false,
      className: "",
    },
    styles: {
      base: {
        carousel: {
          position: "relative",
          width: "w-full",
          height: "h-full",
          overflowX: "overflow-x-hidden",
          display: "flex",
        },

        slide: {
          width: "w-full",
          height: "h-full",
          display: "inline-block",
          flex: "flex-none",
        },
      },
    },
  },
};
