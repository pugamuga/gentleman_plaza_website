import Element from "./Element";

export default function Footer() {
  return (
    <main className="w-screen px-[10vw] font-serif hidden md:inline-block select-none">
      <div className="space-y-[2px]  mt-[100px]">
        <div className="w-full h-[6px] bg-black " />
        <div className="w-full h-[2px] bg-black " />
      </div>
      <div className="my-[20px] flex justify-between relative">
        <h1>&copy; 2024 Gentlemen Plaza</h1>
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="absolute-center flex flex-col justify-center items-center"
        >
          <Element
            name="arrow"
            className="w-[20px] rotate-90 hover:scale-110 tr-300 cursor-pointer"
          />
        </div>
        <div className="flex space-x-4 underline ">
          <p className="cursor-pointer hover:opacity-50 tr-300">Twitter</p>
          <p className="cursor-pointer hover:opacity-50 tr-300">Discord</p>
          <p className="cursor-pointer hover:opacity-50 tr-300">Blast</p>
        </div>
      </div>
    </main>
  );
}
