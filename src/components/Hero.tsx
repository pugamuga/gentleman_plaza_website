import HeroMain from "./heros/HeroMain";
import HeroBig from "./heros/HeroBig";
import HeroSmall from "./heros/HeroSmall";
import HeroMedium from "./heros/HeroMedium";

export default function Hero() {
  return (
    <>
      <main className="w-[90%] h-[70vh] flex justify-center">
        <div
          className="grid grid-cols-3 grid-rows-2 gap-3 w-full grid-flow-row-dense"
          style={{
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "1fr 2fr",
          }}
        >
          <div className="hover:scale-[101%] tr-500">
            <HeroSmall />
          </div>
          <div className="col-start-1 row-start-2 hover:scale-[101%] tr-500">
            <HeroMedium />
          </div>
          <div className="row-span-2 col-start-2 row-start-1 hover:scale-[101%] tr-500">
            <HeroMain />
          </div>
          <div className="row-span-2 col-start-3 row-start-1 hover:scale-[101%] tr-500">
            <HeroBig />
          </div>
        </div>
      </main>
    </>
  );
}
