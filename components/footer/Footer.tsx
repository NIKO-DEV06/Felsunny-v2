"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import linkedin from "@/assets/linkedin.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import { ImageReveal } from "../utils/ImageReveal";
import { Reveal } from "../utils/Reveal";

const Footer = () => {
  return (
    <>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <footer className="bg-[#121212] min-h-[68vh] md:min-h-screen text-white pb-[4rem]">
        <ImageReveal>
          <Image
            src={logo}
            alt="logo"
            width={500}
            height={500}
            className="invert mx-auto lg:mx-0 translate-x-[-0.8rem] lg:translate-x-[5rem] lg:scale-[1.3]"
          />
        </ImageReveal>
        <div className="translate-y-[-3.5rem] md:translate-y-0 lg:flex lg:flex-row lg:justify-between lg:px-[8rem]">
          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-[2rem]">
            <Reveal y={80}>
              <div className="relative w-fit group">
                <Link
                  href={"mailto:felixsunday@yahoo.com"}
                  className=" text-[1.5rem]"
                >
                  felixsunday@yahoo.com
                  <div
                    className={`scale-x-0 absolute w-full h-[1px] bg-white bottom-0 group-hover:scale-x-100 duration-300`}
                  ></div>
                </Link>
                <div
                  className={`absolute w-full h-[1px] bg-white opacity-[0.4] bottom-0 scale-x-100 duration-300`}
                ></div>
              </div>
            </Reveal>
            <div className="text-center lg:text-left lg:opacity-50">
              <Reveal y={80} width="100%">
                <p className="font-extralight mx-auto">
                  <span className="">Phone:</span> +234 8035 6168 05
                </p>
              </Reveal>
              <Reveal y={80}>
                <p className="font-extralight w-[65%] mx-auto lg:mx-0">
                  2 Ahmadu Bello Way, Challenge 240101 Ilorin, Kwara State /
                  Gwarinpa Abuja, FCT
                </p>
              </Reveal>
            </div>
            <Reveal y={80} width="100%">
              <p className="w-[65%] lg:font-[300] text-center lg:text-left mx-auto lg:mx-0">
                © 2023 Felsunny Technology LTD. All Rights Reserved
              </p>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center items-center gap-[1.5rem] mt-[2rem] lg:hidden">
            <div className="flex justify-between gap-[3rem] ">
              <Link
                href={"https://www.linkedin.com/in/ayeniko-felix-0a0a4337/"}
              >
                <ImageReveal>
                  <Image
                    src={linkedin}
                    alt="linkedin"
                    width={25}
                    height={25}
                    className="invert opacity-50 hover:opacity-100 duration-200"
                  />
                </ImageReveal>
              </Link>
              <Link href={"https://mobile.twitter.com/felsunny"}>
                <ImageReveal>
                  <Image
                    src={twitter}
                    alt="twitter"
                    width={25}
                    height={25}
                    className="invert opacity-50 hover:opacity-100 duration-200"
                  />
                </ImageReveal>
              </Link>
            </div>
            <div className="flex justify-between gap-[3rem]">
              <Link href={"https://www.facebook.com/felsunny/"}>
                <ImageReveal>
                  <Image
                    src={facebook}
                    alt="facebook"
                    width={25}
                    height={25}
                    className="invert opacity-50 hover:opacity-100 duration-200"
                  />
                </ImageReveal>
              </Link>
              <Link
                href={"https://www.instagram.com/felsunnytechnology/?hl=en"}
              >
                <ImageReveal>
                  <Image
                    src={instagram}
                    alt="instagram"
                    width={30}
                    height={30}
                    className="invert opacity-50 hover:opacity-100 duration-200"
                  />
                </ImageReveal>
              </Link>
            </div>
          </div>
          {/* //////// */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-[1.5rem] mt-[2rem] text-[1.5rem]">
            <div className="flex justify-between gap-[3rem] translate-x-[-1.6rem]">
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden bgred-700 font-extralight hover:font-[300] duration-300">
                  <Link
                    href={"https://www.linkedin.com/in/ayeniko-felix-0a0a4337/"}
                    className="flex flex-col gap-[rem]"
                  >
                    <p className="md:group-hover:translate-y-[-1.7rem] duration-[450ms] transform ease-in-out">
                      Linkedin
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Linkedin
                    </p>
                  </Link>
                </div>
              </Reveal>
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden font-extralight hover:font-[300] duration-300 translate-x[0.7rem] pl-[0.7rem]">
                  <Link
                    href={"https://mobile.twitter.com/felsunny"}
                    className=" flex flex-col gap-[rem]"
                  >
                    <p className="md:group-hover:translate-y-[-1.7rem] duration-[450ms] transform ease-in-out">
                      Twitter
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Twitter
                    </p>
                  </Link>
                </div>
              </Reveal>
            </div>
            <div className="flex justify-between gap-[3rem]">
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden bgred-700 font-extralight hover:font-[300] duration-300">
                  <Link
                    href={"https://www.facebook.com/felsunny/"}
                    className=" flex flex-col gap-[rem]"
                  >
                    <p className=" md:group-hover:translate-y-[-1.7rem] duration-[450ms] transform ease-in-out">
                      Facebook
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Facebook
                    </p>
                  </Link>
                </div>
              </Reveal>
              <Reveal y={80}>
                <div className="relative w-fit group h-[2rem] overflow-hidden bgred-700 font-extralight hover:font-[300] duration-300">
                  <Link
                    href={"https://www.instagram.com/felsunnytechnology/?hl=en"}
                    className=" flex flex-col gap-[rem]"
                  >
                    <p className=" md:group-hover:translate-y-[-1.7rem] duration-[450ms] transform ease-in-out">
                      Instagram
                    </p>
                    <p className="group-hover:translate-y-[-2.1rem] duration-[450ms] transform ease-in-out">
                      Instagram
                    </p>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
