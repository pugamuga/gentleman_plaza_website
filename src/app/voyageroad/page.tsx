'use client'

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
      <div className="w-40 text-center text-sm h-40 flex flex-col">
        <h1 className="font-main text-[40px] py-4">{name}</h1>
        <div className="w-full bg-black h-[2px]" />
        <div className="py-2">
          {data.map((item: any, i: number) => (
            <>
              <section className="flex items-center space-x-2">
                <div className="border-2 border-black min-w-2 min-h-2 rounded-full" />
                <div className="text-start" key={i}>
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
    Community: ["Dardfsdf sdfsd dsfs df ssdfsdf sdf s sdf sdfsdffa", "Newgdk"],
    Development: [],
    Grow: [],
    Infrastructure: [],
  },
  Q12024: {
    Community: [],
    Development: [],
    Grow: [],
    Infrastructure: [],
  },
  Q22024: {
    Community: [],
    Development: [],
    Grow: [],
    Infrastructure: ["dfgjlsdfgl"],
  },
  Q32024: {
    Community: [],
    Development: [],
    Grow: [],
    Infrastructure: [],
  },
  Q42024: {
    Community: [],
    Development: [],
    Grow: [],
    Infrastructure: [],
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
