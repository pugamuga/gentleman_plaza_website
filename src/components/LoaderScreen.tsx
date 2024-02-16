"use client";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import Pepe from "./Pepe";

const LoaderScreen = ({ loadingPercentage }: any) => {
  return (
    <m.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="h-screen w-screen flex flex-col justify-center items-center bg-black fixed
     z-[9999] font-serif text-white"
    >
      <Pepe type="Caphead" size={100} />
      <p>{loadingPercentage}% Loaded</p>
    </m.div>
  );
};

export default LoaderScreen;
