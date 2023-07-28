import React from "react";
import UnfixedHeader from "../header/UnfixedHeader";
import { Reveal } from "../utils/Reveal";

const Services = () => {
  return (
    <section className="bg-[#121212] min-h-screen text-white">
      <UnfixedHeader invert="invert" color="text-[#e0fd60]" />
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <Reveal y={200} width="100%">
          <h1 className="font-integral-bold text-center text-[2.3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] px-[2rem] md:px-[4rem] xl:px-[5rem] leading-[3rem] md:leading-[4.5rem] lg:leading-[5.5rem] xl:leading-[7rem] mt[5rem] lg:mt[3rem]">
            Driving Results with Expertise
          </h1>
        </Reveal>
        <Reveal y={100}>
          <p className="font-sofia px-[2rem] md:mx-auto text-center md:w-[70%] md:text-[1.15rem] ">
            Discover our wide range of business solutions, including sales and
            distribution, government supplies, construction, consultancy
            services, and property sales.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
