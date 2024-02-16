"use client";

import React from "react";
import Lottie from "react-lottie";
import capheadData from "../../public/assets/json/caphead.json";
import clownData from "../../public/assets/json/clown.json";
import hatData from "../../public/assets/json/hat.json";
import richData from "../../public/assets/json/rich.json";
import shockData from "../../public/assets/json/shock.json";
import wineData from "../../public/assets/json/wine.json";

type PepeProps = {
  type: "Caphead" | "Clown" | "Hat" | "Rich" | "Shock" | "Wine" ;
  size: number;
};

const Pepe: React.FC<PepeProps> = ({ type, size }) => {
  const getAnimationData = () => {
    switch (type) {
      case "Caphead":
        return capheadData;
      case "Clown":
        return clownData;
      case "Hat":
        return hatData;
      case "Rich":
        return richData;
      case "Shock":
        return shockData;
      case "Wine":
        return wineData;
      default:
        // Provide a default case to handle unknown types
        return null;
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: getAnimationData(),
  };

  return (
    <div className="pointer-events-none">
      <Lottie
        options={defaultOptions}
        height={size}
        width={size}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default Pepe;
