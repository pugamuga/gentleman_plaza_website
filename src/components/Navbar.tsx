"use client";
import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  return (
    <main className="w-screen bg-black py-1 flex justify-between px-[30%] items-center">
      <NavbarParagraph link="/">Main Entrance</NavbarParagraph>
      <div className="bg-white w-1 h-1 rounded-full" />
      <NavbarParagraph link="/newspaper">Newspaper</NavbarParagraph>
      <div className="bg-white w-1 h-1 rounded-full" />
      <NavbarParagraph link="/voyageroad">Voyage Road</NavbarParagraph>
      <div className="bg-white w-1 h-1 rounded-full" />
      <NavbarParagraph link="/nftboutique">NFT Boutique</NavbarParagraph>
      <div className="bg-white w-1 h-1 rounded-full" />
      <NavbarParagraph link="/testnetplaza">Testnet Plaza</NavbarParagraph>
    </main>
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
      style={{
        color: pathname  == link? "rgb(253 224 71)" : "white",
      }}
      className="text-sm cursor-pointer hover:opacity-70 "
    >
      {children}
    </Link>
  );
}
