"use client";

import { useEffect } from "react";
import Image from "next/image";
import folder from "../../assets/folder-dynamic-premium.png";
import computer from "../../assets/computer-dynamic-premium.png";
import bookmark from "../../assets/bookmark-fav-dynamic-premium.png";
import logo from "@/assets/logo.png";
import logo2 from "@/assets/logo2.png";
import Link from "next/link";

const Hero = () => {
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (centerX - clientX) / centerX;
      const moveY = (centerY - clientY) / centerY;

      const tiltMax = 25;
      const tiltX = (moveX * tiltMax).toFixed(2);
      const tiltY = (moveY * tiltMax).toFixed(2);

      const parallaxElements = document.querySelectorAll(".parallax-element");

      parallaxElements.forEach((element) => {
        const elementWithStyle = element as HTMLElement;
        elementWithStyle.style.transform = `translate(${tiltX}px, ${tiltY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <section className="text-white h-screen relative">
      <div className="flex justify-end items-center px-[1.5rem] md:px-[4rem] bggreen-600 py-[1.5rem]">
        <Link href={"/"}>
          <Image
            src={logo2}
            alt="logo"
            width={220}
            height={220}
            className=" bg-red400 absolute top-[-20px] md:top-[-15px] left-[-10px] md:left-[40px] invert md:scale-[1.3]"
          />
        </Link>

        {/* <h1
          data-fill-text="felsunny"
          className="font-integral-medium text-transparent text-[1.5rem] md:text-[2rem] tracking-widest stroke-neon cursor-pointer felsunny relative border-[#e0fd60] border-[1px] px-[1.4rem] pb-[0.5rem] rounded-full h-fit z-[10]"
        >
          Felsunny
        </h1> */}

        <p className="font-sofia text-[#e0fd60] mr-[3.5rem] md:text-[1.2rem] hidden md:block z-[10] mt-[15px]">
          menu
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-[1.5rem] md:gap-[2.5rem] mt-[12.5rem] md:mt-[7rem]">
        <h1 className="text-center font-integral-heavy text-[1.7rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] px-[1.5rem] md:px-[2.5rem] leading-[1.8rem] md:leading-[5rem] z-[10]">
          Your Partner in <br /> Business{" "}
          <span className="text-transparent stroke-neon inline-block overflow-hidden h-[1.75rem] md:h-[4.55rem] lg:h-[4.8rem] xl:h-[5rem] group">
            <p className="md:group-hover:translate-y-[-5.5rem] transform duration-300 ease-in-out md:group-hover:scale-[0.6]">
              Excellence
            </p>
            <p className="group-hover:translate-y-[-5rem] transform duration-500 ease-in-out text-[#e0fd60] hidden md:block">
              Excellence
            </p>
          </span>
        </h1>
        <p className="font-sofia px-[2rem] text-center md:w-[60%] md:text-[1.15rem] z-[10]">
          We provide business solutions, including sales and distribution,
          government supplies, construction, consultancy services, and property
          sales.
        </p>
        <button className="bg-[#e0fd60] hover:bg-[#dff385] px-[1.5rem] py-[.5rem] md:py-[.7rem] hover:tracking-widest duration-300 z-[10]">
          <p className=" font-sofia-medium font-bold text-black md:text-[1.05rem]">
            Learn More
          </p>
        </button>
      </div>

      <div className="parallax-element absolute blur-[2px] left-[15%] bottom-[25%]">
        <Image
          src={folder}
          alt="folder"
          width={100}
          height={100}
          className="animate-float"
        />
      </div>

      <div className="parallax-element absolute top-[10%] blur-[2px] left-[40%]">
        <Image
          src={computer}
          alt="computer"
          width={100}
          height={100}
          className="animate-float"
        />
      </div>
      <div className="parallax-element absolute right-[20%] blur-[2px] bottom-[20%]">
        <Image
          src={bookmark}
          alt="bookmark"
          width={100}
          height={100}
          className="animate-float"
        />
      </div>
    </section>
  );
};

export default Hero;
