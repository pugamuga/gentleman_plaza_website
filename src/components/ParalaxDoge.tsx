"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import doge from "../../public/assets/paralax/doge.png";
import bg from "../../public/assets/paralax/bg.jpg";

export default function ParallaxDoge() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate the position of the background image with a small parallax effect
  const movementScale = 40; // Adjust this value to control the intensity of the parallax effect
  const bgPositionX =
    typeof window !== "undefined" &&
    (mousePosition.x / window?.innerWidth - 0.5) * movementScale;
  const bgPositionY =
    typeof window !== "undefined" &&
    (mousePosition.y / window?.innerHeight - 0.5) * movementScale;

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          overflow: "hidden",
          borderRadius: "50%", // Apply circular mask to the entire composition
          border: "1px solid #000", // Border for visualization
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `calc(50% + ${
              typeof window !== "undefined" ? bgPositionX : 0
            }px)`,
            top: `calc(50% + ${
              typeof window !== "undefined" ? bgPositionY : 0
            }px)`,
            transform: "translate(-50%, -50%)",
          }}
          className="w-[500px] h-[500px]"
        >
          <Image
            src={bg}
            alt="main banner"
            width={500}
            height={500}
            //   className="scale-[220%]"
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: `calc(50% + ${
              typeof window !== "undefined" ? Number(bgPositionX) / 2 : 0
            }px)`,
            top: `calc(50% + ${
              typeof window !== "undefined" ? Number(bgPositionY) / 2 : 0
            }px)`,
            transform: "translate(-50%, -50%)",
          }}
          className="w-[420px] h-[420px]"
        >
          <Image
            src={doge}
            priority={true}
            alt="Doge"
            width={420}
            height={420}

            //   className="scale-[200%]"
          />
        </div>
      </div>
    </>
  );
}
