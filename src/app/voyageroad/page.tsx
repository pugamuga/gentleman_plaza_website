"use client";

import Element from "../../components/Element";
import ElementSeparator from "../../components/ElementSeparator";
import compass from "../../../public/assets/compass.png";
import Image from "next/image";

export default function VoyageRoad() {
  return (
    <main className="w-screen px-[10vw] md:flex flex-col justify-center items-center hidden">
      <div className="w-full  flex justify-between items-center">
        <Image alt="compass" src={compass} className="grayscale w-[200px]" />
        <MainTextRoadMap />
        <Image alt="compass" src={compass} className="grayscale w-[200px]" />
      </div>
      <ElementSeparator />
      <section className="w-full space-y-[40px]">
        <Qsection date="Q4 2023" data={data.Q42023} />
        <Qsection date="Q1 2024" data={data.Q12024} active />
        <Qsection date="Q2 2024" data={data.Q22024} />
        <Qsection date="Q3 2024" data={data.Q32024} />
        <Qsection date="Q4 2024" data={data.Q42024} />
      </section>
    </main>
  );
}

function MainTextRoadMap() {
  return (
    <div className="h-[400px] text min-w-[400px] w-[600px] mt-10">
      <div className="flex justify-center items-center font-main -mt-4 ">
        <Element name="textEl" className="w-12 mr-2" />
        <div className=" relative text-center">
          <p className="text-[80px]">Road Map</p>
          <p className="text-[60px] mt-[-40px] ">Of Gentlemen plaza</p>
        </div>
        <Element name="textEl" className="w-12 scale-x-[-100%] ml-2" />
      </div>
      <div className="text-center font-serif">
        {`Our team strives to craft the finest and most captivating experience for
        our users and club members. Though we're at the dawn of our journey,
        we've already achieved remarkable successes. Here are our development
        plans for the year 2024. We're set on conquering a significant share of
        the market and the hearts of our users.`}
      </div>
    </div>
  );
}

function Qsection({ date, active, data }: any) {
  return (
    <section
      className={`w-full flex justify-between items-center mt-[40px] cursor-default border-2 
      border-black/0 hover:border-black p-2 rounded-md opacity-${
        active ? "100" : "50"
      } hover:opacity-100 tr-300`}
    >
      <div className="font-main text-[100px] flex items-center min-w-[300px]">
        <p>{date}</p>
        {active && (
          <Element name="navbarTextEl" className="w-12 ml-4 rotate-[-90deg]" />
        )}
      </div>
      <div className="flex w-full justify-between ">
        <TextSection name="Community" data={data.Community} />
        <TextSection name="Development" data={data.Development} />
        <TextSection name="Grow" data={data.Grow} />
        <TextSection name="Infrastructure" data={data.Infrastructure} />
      </div>
    </section>
  );
}

function TextSection({ name, data }: any) {
  return (
    <>
      <div className="w-40 text-center text-sm h- flex flex-col">
        <h1 className="font-main text-[40px] py-4">{name}</h1>
        <div className="w-full bg-black h-[2px]" />
        <div className="py-2">
          {data.map((item: any, i: number) => (
            <>
              <section className="flex items-center space-x-2">
                <div className="border-2 border-black min-w-2 min-h-2 rounded-full" />
                <div className="text-start font-serif" key={i}>
                  {item}
                </div>
              </section>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

const data = {
  Q42023: {
    Community: ["Gathering feedback from the gambling community"],
    Development: ["Commencement of work on initial games","Website creation"],
    Grow: ["Engagement with influencers", "Marketing strategy development"],
    Infrastructure: ["Concept development", "Market research"],
  },
  Q12024: {
    Community: ["Whitelist launch","Testnet for early users","Freemint for the community","Community building"],
    Development: ["Completion of development and initiation of testing for the first 3 games","Website launch"],
    Grow: ["Participation in the Blast competition"],
    Infrastructure: ["Testnet with prizes"],
  },
  Q22024: {
    Community: ["Airdrop for the community"],
    Development: ["Addition of 2 new games and closed testnet for them","Website and application update, enhancing UI/UX"],
    Grow: ["AMA sessions","Smart contract audit and security checks"],
    Infrastructure: ["Integration and partnerships with new DeFi protocols on Blast"],
  },
  Q32024: {
    Community: ["Competitions for users"],
    Development: ["Mechanic updates and refinement of existing games"],
    Grow: ["Partnerships and investments for the token","Increase liquidity pool","Collaboration with top influencers in the gambling industry"],
    Infrastructure: ["Creation of the first slot machines on web3 and API for developers"],
  },
  Q42024: {
    Community: ["Community sale","Next season tournament for the community","Poker tournament"],
    Development: ["Slot machine presentation","Telegram bot"],
    Grow: ["TGE (Token Generation Event)"],
    Infrastructure: ["Positive rake for token stakers"],
  },
};

function LineWithText({ text }: { text: string }) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="bg-black h-[1px] w-full" />
      <div className="text-lg mx-2 text-nowrap">{text}</div>
      <div className="bg-black h-[1px] w-full" />
    </div>
  );
}
