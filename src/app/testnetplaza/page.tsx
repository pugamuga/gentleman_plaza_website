"use client";

import Element from "@/components/Element";
import ElementSeparator from "@/components/ElementSeparator";
import React from "react";
import Image from "next/image";
import cubok from "../../../public/assets/cubok.png";
import PepeComingSoon from "@/components/PepeComingSoon";

interface RowData {
  rank: number;
  address: string;
  score: string;
}

const data: RowData[] = [
  { rank: 1, address: "0x00...000", score: "0" },
  { rank: 2, address: "0x00...000", score: "0" },
  { rank: 3, address: "0x00...000", score: "0" },
  { rank: 4, address: "0x00...000", score: "0" },
  { rank: 5, address: "0x00...000", score: "0" },
  { rank: 6, address: "0x00...000", score: "0" },
  { rank: 7, address: "0x00...000", score: "0" },
  { rank: 8, address: "0x00...000", score: "0" },
  { rank: 9, address: "0x00...000", score: "0" },
  { rank: 10, address: "0x00...000", score: "0" },
];

const TestnetPlaza: React.FC = () => {
  // Define the data for the table rows

  return (
    <>
      <main className="w-screen px-[10vw] md:flex flex-col justify-center items-center select-none hidden">
        <div className="w-full  flex justify-between items-center">
          <Image alt="cubok" src={cubok} className="grayscale w-[300px]" />
          <MainTextTestnet />
          <Image alt="cubok" src={cubok} className="grayscale w-[300px]" />
        </div>

        <ElementSeparator />
        <Table />
      </main>
    </>
  );
};

export default TestnetPlaza;

function Table() {
  return (
    <>
      <div className="flex flex-col w-[800px] relative ">
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
        <PepeComingSoon />
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm ">
                <thead className="border-b border-black dark:border-neutral-500">
                  <tr className="font-serif text-[20px]">
                    <th scope="col" className="px-6 py-4 text-center ">
                      Rank
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-4 text-center">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Map over the data array and create table rows */}
                  {data.map((row: RowData, index: number) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        index !== data.length - 1
                          ? "border-black/10"
                          : "border-black/0"
                      } text-center font-serif`}
                    >
                      <td className="whitespace-nowrap px-6 py-4  ">
                        {row.rank}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {row.address}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {row.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="font-serif space-x-4 mt-4">
        <button className="border w-8 h-8 border-black rounded-md cursor-pointer">
          1
        </button>
        <button className="border w-8 h-8 border-black/20 rounded-md cursor-pointer">
          2
        </button>
        <button className="border w-8 h-8 border-black/20 rounded-md cursor-pointer">
          3
        </button>
      </div>
    </>
  );
}

function MainTextTestnet() {
  return (
    <div className="h-[400px] text min-w-[400px] w-[500px] mt-10 ">
      <div className="flex justify-center items-center font-main -mt-4 ">
        <Element name="textEl" className="w-12 mr-2" />
        <div className=" relative text-center">
          <p className="text-[80px]">Testnet</p>
          <p className="text-[60px] mt-[-40px] ">For early gentlemen</p>
        </div>
        <Element name="textEl" className="w-12 scale-x-[-100%] ml-2" />
      </div>
      <div className="text-center font-serif">
        {`The management of our modest establishment is preparing to announce a
        competition! The most daring and charming participants shall receive the
        finest rewards and opportunities! The testnet will commence shortly
        after Blast transitions to the mainnet. Prepare your eager hands, for
        the era of web3 excitement is upon us!`}
      </div>
    </div>
  );
}
