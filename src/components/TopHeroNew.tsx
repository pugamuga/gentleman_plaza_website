"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Element from "./Element";

export default function TopHeroNew() {
  return (
    <>
      <main className="w-full px-[10vw] py-[20px] md:flex justify-between items-center hidden">
        {/* buttons with links */}
        <div className="flex w-full justify-between  items-center ">
          <div className=" text-2xl flex flex-col items-end">
            <p className="font-main text-[80px]">Gentlemen</p>
            <div className="flex w-full mt-5">
              <div className="bg-black h-[2px] w-full" />
              <p className="font-main text-[60px]">plaza</p>
            </div>
          </div>
          <NavbarParagraph link="/">Main Entrance</NavbarParagraph>
          <NavbarParagraph link="/voyageroad">Voyage Road</NavbarParagraph>
          <NavbarParagraph link="/nftboutique">NFT Boutique</NavbarParagraph>
          <NavbarParagraph link="/testnetplaza">Testnet Plaza</NavbarParagraph>
          {/* <NavbarParagraph link="/newspaper">Newspaper</NavbarParagraph> */}
        </div>
      </main>
      <div className="w-screen px-[10vw] space-y-[2px] mt-6 hidden md:inline-block ">
        <div className="w-full h-[6px] bg-black " />
        <div className="w-full h-[2px] bg-black " />
      </div>
    </>
  );
}

function NavbarParagraph({
  children,
  link,
}: {
  children: ReactNode;
  link: any;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={link}
      passHref
      className=" cursor-pointer hover:opacity-70 relative font-main text-[40px]"
    >
      {children}

      {pathname === link && (
        <Element name="navbarTextEl" className="w-10 mt-2 absolute-bottom" />
      )}
    </Link>
  );
}
