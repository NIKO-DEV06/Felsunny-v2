"use client";
import Image from "next/image";
import { useState } from "react";
import Menu from "./Menu";
import dynamic from "next/dynamic";
import curveText from "@/assets/textcurve.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex invert";

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  return (
    <>
      <AnimatedCursor
        innerSize={10}
        outerSize={0}
        color="255, 255, 255"
        outerAlpha={0.5}
        innerScale={6}
        showSystemCursor={true}
        innerStyle={{
          mixBlendMode: "exclusion",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className="fixed right-[1rem] md:right-[3.5rem] top-[2rem] md:top-[2.4rem] z-[40]">
        <button
          className={`${menuClass} scale-[0.65] scale-x-[0.7]`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className="fixed right-[35px] bottom-[35px] md:right-[50px] md:bottom-[50px] rounded-full overflow-hidden w-[70px] md:w-[90px] bg-[#252426] cursor-pointer z-[21]">
        <video
          src="https://cdn.cuberto.com/cb/intouch/1.mp4"
          autoPlay
          loop={true}
          muted={true}
        ></video>
      </div>

      <div className="fixed right-[20px] bottom-[20px] md:right-[45px] md:bottom-[45px] md:scale-[1.3] md:hover:scale-[1.5] duration-300 z-[21]">
        <Image
          src={curveText}
          alt="curve-text"
          width={100}
          height={100}
          className="animate-spin-slow"
        />
      </div>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
