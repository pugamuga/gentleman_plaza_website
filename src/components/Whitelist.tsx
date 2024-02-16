"use client";

import Element from "@/components/Element";

export default function Whitelist() {
  return (
    <>
      <main className="w-screen px-[10vw] flex justify-center space-x-[100px] items-center ">
        <div className="h-[200px] font-serif min-w-[400px] w-[400px] ">
          <div className="flex justify-center items-center font-main -mt-4 ">
            <div className=" relative text-center">
              <p className="text-[60px] ">For early gentlemen</p>
            </div>
          </div>
          <div className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            expedita dicta provident, beatae quo dolores minima eius in esse
            eveniet quidem voluptate alias, labore odit. Accusamus reprehenderit
            quisquam amet. Distinctio dolores adipisci cum quod consequatur
          </div>
        </div>
        <div className=" w-[400px] h-[200px] flex items-center justify-center relative">
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
