"use client";
import Element from "@/components/Element";
import eth from "../../../public/assets/eth.png";
import Image from "next/image";
import Ticket3d from "@/components/Ticket3d";
import { Canvas } from "@react-three/fiber";
import ElementSeparator from "@/components/ElementSeparator";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  ThemeProvider,
} from "@material-tailwind/react";

export default function NFTBoutique() {
  return (
    <main className="w-screen px-[10vw] hidden md:flex justify-center flex-col items-center">
      <div className=" flex items-center justify-between  mt-10">
        <div>
          <NftSectionWithCube />
        </div>
        <div>
          <MainTextNFT />
        </div>
      </div>
      <ElementSeparator />
      <div className=" w-1/2 p-10 relative">
        <Element name="ugol" className="w-8 absolute top-0 right-0" />
        <Element
          name="ugol"
          className="w-8 absolute bottom-0 right-0 rotate-90"
        />
        <Element
          name="ugol"
          className="w-8 absolute top-0 left-0 rotate-[270deg]"
        />
        <Element
          name="ugol"
          className="w-8 absolute bottom-0 left-0 rotate-[-180deg]"
        />
        <p className="text-[60px] text-center  font-main">Details</p>
        <div className="">
          <FAQ />
        </div>
      </div>
    </main>
  );
}

function MainTextNFT() {
  return (
    <div className="h-[400px] font-serif min-w-[400px] w-[600px]">
      <div className="flex justify-center items-center font-main -mt-4 ">
        <Element name="textEl" className="w-12 mr-2" />
        <div className=" relative text-center">
          <p className="text-[80px]">NFT collection</p>
          <p className="text-[60px] mt-[-40px] ">For early gentlemen</p>
        </div>
        <Element name="textEl" className="w-12 scale-x-[-100%] ml-2" />
      </div>
      <div className="text-center">
        {`Every member of our club is highly esteemed, hence, to commemorate our
        launch, we have NFT early access tickets ready, which will grant each
        owner a piece of our spirit, as well as a portion of the grant from the
        BigBangCompetition. Furthermore, these NFTs will be utilized for profit
        distribution and future token endeavors.`}
      </div>
    </div>
  );
}

function NftSectionWithCube() {
  return (
    <>
      <div className="h-[400px] min-w-[400px] w-[600px] flex justify-start items-center font-serif overflow-hidden">
        <Element name="photoframe" className="w-12 mr-2 rotate-[135deg]" />
        <div className="h-full  border-black w-[400px] flex flex-col items-center justify-end">
          <div className=" w-full h-full flex justify-center items-center relative">
            <Canvas>
              <Ticket3d />
            </Canvas>
          </div>
          <div
            className=" h-[100px] w-full text-start border-t border-black 
          flex justify-between"
          >
            <div className="flex flex-col ">
              <p className="p-2 font-bold">{`Gentlemen's pass #777`}</p>
              <div className="p-2">
                <p className="font-extrabold">Price:</p>
                <div className="flex space-x-2 items-center">
                  <div className="bg-black rounded-md animate-pulse w-12 h-5" />
                  <Image alt="cubok" src={eth} className="w-4" />
                </div>
              </div>
            </div>
            <div className=" p-2 flex justify-center items-center ">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                  });
                }}
                className="border px-4 py-1 text-2xl border-black rounded-md cursor-pointer hover:opacity-50 "
              >
                Details
              </button>
            </div>
          </div>
        </div>
        <Element name="photoframe" className="w-12 ml-2 rotate-[-45deg]" />
      </div>
    </>
  );
}

function FAQ() {
  const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
  return (
    <>
      <ThemeProvider value={theme}>
        <Accordion
          placeholder={null}
          open={open === 1}
          animate={CUSTOM_ANIMATION}
        >
          <AccordionHeader placeholder={null} onClick={() => handleOpen(1)}>
            What advantages does owning this NFT offer?
          </AccordionHeader>
          <AccordionBody>
            {`Owning the NFT will provide the opportunity to receive a 50% grant
            from the Blast Competition, distribution of 75% of the protocol's
            profits when staking the NFT, and an airdrop of tokens.`}
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          animate={CUSTOM_ANIMATION}
          placeholder={null}
        >
          <AccordionHeader placeholder={null} onClick={() => handleOpen(2)}>
            In which network can I obtain this NFT?
          </AccordionHeader>
          <AccordionBody>
            Blast L2, some ETH is required in this network for commission
            payment on minting.
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 3}
          animate={CUSTOM_ANIMATION}
          placeholder={null}
        >
          <AccordionHeader placeholder={null} onClick={() => handleOpen(3)}>
            How can I reserve a spot?
          </AccordionHeader>
          <AccordionBody>Reserve place in whitelist</AccordionBody>
        </Accordion>
        <Accordion
          open={open === 4}
          animate={CUSTOM_ANIMATION}
          placeholder={null}
        >
          <AccordionHeader placeholder={null} onClick={() => handleOpen(4)}>
            What is the maximum number of NFTs per wallet?
          </AccordionHeader>
          <AccordionBody>A maximum of 10 NFTs per wallet.</AccordionBody>
        </Accordion>
        <Accordion
          open={open === 5}
          animate={CUSTOM_ANIMATION}
          placeholder={null}
        >
          <AccordionHeader placeholder={null} onClick={() => handleOpen(5)}>
            When will be the mint of collection?
          </AccordionHeader>
          <AccordionBody>
            Shortly after Blast transitions to the mainnet, stay tuned for
            updates on our Twitter account!
          </AccordionBody>
        </Accordion>
      </ThemeProvider>
    </>
  );
}

const theme = {
  accordion: {
    defaultProps: {
      icon: undefined,
      className: "",
      animate: {
        unmount: {},
        mount: {},
      },
      disabled: false,
    },
    styles: {
      base: {
        container: {
          display: "block",
          position: "relative",
          width: "w-full",
        },
        header: {
          initial: {
            display: "flex",
            justifyContent: "justify-between",
            alignItems: "items-center",
            width: "w-full",
            py: "py-4",
            borderWidth: "border-b border-b-black",
            color: "text-black",
            fontSmoothing: "antialiased",
            fontFamily: "font-serif",
            fontSize: "text-xl",
            textAlign: "text-center",
            fontWeight: "font-semibold",
            lineHeight: "leading-snug",
            userSelect: "select-none",
            hover: "hover:text-blue-gray-900",
            transition: "transition-colors",
          },
          active: { color: "text-blue-gray-900" },
          icon: {
            ml: "ml-4",
          },
        },
        body: {
          display: "block",
          width: "w-full",
          py: "py-4",
          color: "text-gray-700",
          fontSmoothing: "antialiased",
          fontFamily: "font-serif",
          fontSize: "text-sm",
          fontWeight: "font-light",
          lineHeight: "leading-normal",
        },
        disabled: {
          pointerEvents: "pointer-events-none",
          opacity: "opacity-50",
        },
      },
    },
  },
};
