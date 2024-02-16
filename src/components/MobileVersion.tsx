import Image from "next/image";
import pepeCard from "../../public/assets/valetpepe.png";
import dogeCard from "../../public/assets/valetdoge.png";

export default function MobileVersion() {
  return (
    <>
      <main className="test flex p-2 flex-col items-center md:hidden ">
        {/* logo */}
        <div className="mt-10 mb-8">
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
      </main>
    </>
  );
}
