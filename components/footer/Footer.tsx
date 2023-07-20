"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import linkedin from "@/assets/linkedin.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";

const Footer = () => {
  return (
    <>
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <footer className="bg-[#121212] min-h-[68vh] md:min-h-screen text-white pb-[4rem]">
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          className="invert mx-auto lg:mx-0 translate-x-[-0.8rem] lg:translate-x-[5rem] lg:scale-[1.3]"
        />
        <div className="translate-y-[-3.5rem] md:translate-y-0 lg:flex lg:flex-row lg:justify-between lg:px-[8rem]">
          <div className="flex flex-col justify-center lg:justify-start lg:items-start items-center gap-[2rem]">
            <div className="relative w-fit group">
              <Link
                href={"mailto:felixsunday@yahoo.com"}
                className="font-sofia-regular text-[1.5rem]"
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
            <div className="text-center lg:text-left lg:opacity-50">
              <p className="font-sofia-extralight mx-auto">
                <span className="font-sofia-regular">Phone:</span> +234 8035
                6168 05
              </p>
              <p className="font-sofia-extralight w-[65%] mx-auto lg:mx-0">
                2 Ahmadu Bello Way, Challenge 240101 Ilorin, Kwara State /
                Gwarinpa Abuja, FCT
              </p>
            </div>
            <p className="w-[60%] font-sofia-regular lg:font-sofia text-center lg:text-left">
              © 2023 Felsunny Technology LTD. All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-[1.5rem] mt-[2rem]">
            <div className="flex justify-between gap-[3rem]">
              <Image
                src={linkedin}
                alt="linkedin"
                width={25}
                height={25}
                className="invert opacity-50 hover:opacity-100 duration-200"
              />
              <Image
                src={twitter}
                alt="twitter"
                width={25}
                height={25}
                className="invert opacity-50 hover:opacity-100 duration-200"
              />
            </div>
            <div className="flex justify-between gap-[3rem]">
              <Image
                src={facebook}
                alt="facebook"
                width={25}
                height={25}
                className="invert opacity-50 hover:opacity-100 duration-200"
              />
              <Image
                src={instagram}
                alt="instagram"
                width={30}
                height={30}
                className="invert opacity-50 hover:opacity-100 duration-200"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
