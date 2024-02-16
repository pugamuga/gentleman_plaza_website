'use client'

import ElementSeparator from "@/components/ElementSeparator";
// import HeroNew from "@/components/HeroNew";
// import AboutGames from "@/components/AboutGames";
// import NftSection from "@/components/NftSection";
// import Whitelist from "@/components/Whitelist";
import MobileVersion from "@/components/MobileVersion";

export default function Home() {
  return (
    <>
      <main className="font-serif hidden md:inline-block">
        {/* <HeroNew /> */}
        <ElementSeparator />
        {/* <AboutGames /> */}
        <ElementSeparator />
        {/* <NftSection /> */}
        <ElementSeparator />
        {/* <Whitelist /> */}

      </main>
      <MobileVersion />
    </>
  );
}


