"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import twitterIcon from "../../public/assets/icons/twitter-icon.png";
import discordIcon from "../../public/assets/icons/discord-black-icon.png";
import blastIcon from "../../public/assets/icons/blast.png";

export default function NavbarNew() {
  const [click, setClick] = useState(false);

  return (
    <>
      <main className="w-screen relative gradient-black h-[60px] px-[10vw] md:flex items-center justify-between font-serif hidden">
        <div className="flex space-x-4 underline items-center ">
          <Image
            src={twitterIcon}
            alt="icon"
            width={16}
            className="cursor-pointer hover:opacity-50 tr-300"
          />
          <Image
            src={discordIcon}
            alt="icon"
            width={16}
            className="cursor-pointer hover:opacity-50 tr-300"
          />
          <Image
            src={blastIcon}
            alt="icon"
            width={16}
            className="cursor-pointer hover:opacity-50 tr-300"
          />
        </div>
        <button
          onClick={() => {
            setClick(true);
            setTimeout(() => {
              setClick(false);
            }, 5000);
          }}
          className="bg-black text-white px-6 py-4 text-sm font-bold hover:opacity-80 transition duration-300 rounded-sm font-serif"
        >
          Launch App
        </button>
        <AnimatePresence>{click && <ErrorTop />}</AnimatePresence>
      </main>
    </>
  );
}

function ErrorTop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-1/2 py-2 text-white font-serif text-center bg-black absolute-center"
    >
      {"Keep an eye out for updates, we're in the final stages!"}
    </motion.div>
  );
}
