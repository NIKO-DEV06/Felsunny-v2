import React from "react";
import UnfixedHeader from "../header/UnfixedHeader";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";
import Image from "next/image";
import setting from "../../assets/setting-dynamic-premium.png";
import sun from "../../assets/sun-dynamic-premium.png";
import hash from "../../assets/hash-dynamic-premium.png";
import chart from "../../assets/chart-dynamic-premium.png";
import flag from "../../assets/flag-dynamic-premium.png";
import computer from "../../assets/computer-dynamic-premium.png";
import tool from "../../assets/tool-dynamic-premium.png";
import key from "../../assets/key-dynamic-premium.png";
import phone from "../../assets/phone-incoming-dynamic-premium.png";
import sales from "../../assets/sales.svg";
import gov from "../../assets/gov.svg";
import property from "../../assets/property.svg";
import devices from "../../assets/devices.svg";
import construction from "../../assets/construction.svg";
import consult from "../../assets/consult.svg";

const Services = () => {
  const services = [
    {
      name: "Sales and Distribution",
      desc: "Discover our wide range of business solutions, including sales and distribution, government supplies, construction, consultancy services, and property sales.",
      img: chart,
      svg: sales,
    },
    {
      name: "Government Supplies",
      desc: "Simplify government procurements with our specialized supply services. We ensure seamless sourcing and delivery of supplies to meet government requirements.",
      img: flag,
      svg: gov,
    },
    {
      name: "Property Sales",
      desc: "Explore lucrative property sales and investment opportunities with us. Our expert guidance helps you make informed decisions in the real estate market.",
      img: key,
      svg: property,
    },
    {
      name: "Gadgets and Devices",
      desc: "From smart home solutions to wearable tech, we offer products designed to enhance your lifestyle and elevate your productivity. Explore our collection for the ultimate blend of functionality and style.",
      img: computer,
      svg: devices,
    },
    {
      name: "Construction",
      desc: "From planning to execution, our construction services ensure top-quality projects with a focus on efficiency and innovation. Partner with us for successful outcomes.",
      img: tool,
      svg: construction,
    },
    {
      name: "Consultancy Services",
      desc: "Gain valuable insights and strategic advice with our consultancy services. Our experienced team provides data-driven solutions tailored to your business goals.",
      img: phone,
      svg: consult,
    },
  ];

  return (
    <section className="bg-[#121212] min-h-screen text-white">
      <UnfixedHeader invert="invert" color="text-[#e0fd60]" />
      <div className="h-[70vh] flex flex-col items-center justify-center">
        <Reveal y={200} width="100%" z="z-10">
          <h1 className="font-integral-bold text-center text-[2.3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] px-[2rem] md:px-[4rem] xl:px-[5rem] leading-[3rem] md:leading-[4.5rem] lg:leading-[5.5rem] xl:leading-[7rem] mt[5rem] lg:mt[3rem]">
            Driving Results with
            <span className="stroke text-transparent"> Expertise</span>
          </h1>
        </Reveal>
        <Reveal y={100} z="z-[10]">
          <p className="font-sofia px-[2rem] md:mx-auto text-center md:w-[70%] md:text-[1.15rem] mt-[2rem] ">
            Discover our wide range of business solutions, including sales and
            distribution, government supplies, construction, consultancy
            services, and property sales.
          </p>
        </Reveal>
      </div>

      <div className="absolute translate-x-1/2 right-1/2 w-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[27rem] lg:h-[27rem] h-[20rem] roundedfull mx-auto mt-[4rem] lg:mt-[10rem] lg:scale-[1.3]">
        <ImageReveal>
          <video
            src="/serv.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-full"
          ></video>
        </ImageReveal>
      </div>

      <Reveal y={200} width="100%">
        <h1 className="font-integral-bold text-center text-[2.5rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[2rem] md:px-[4rem] xl:px-[5rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem] mt-[21rem] md:mt-[25rem] lg:mt-[33rem] mb-[4rem] lg:mb-[5rem]">
          Our Services
        </h1>
      </Reveal>

      <div className="px-[1.5rem] flex flex-col gap-[7rem] mt-[3rem] pb-[5rem]">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } gap-[1rem] md:gap-[2rem] items-center md:justify-center`}
          >
            <div className="relative md:w-[50%]">
              <Reveal y={100}>
                <div className="mb-[1.5rem]">
                  <Image src={service.svg} width={35} height={35} alt="sales" />
                </div>
              </Reveal>
              <Reveal y={100}>
                <h1 className="font-integral-demibold text-[1.3rem] mb-[1rem] underline">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal y={100}>
                <p className="font-sofia text-[1.1rem]">{service.desc}</p>
              </Reveal>
              <div className="absolute font-sofia-bold text-[25rem] opacity-[50%] text-transparent stroke-neon top-[-50%] md:top-[-70%] right-0 blur-[1px]">
                <ImageReveal>
                  <p>{index + 1}</p>
                </ImageReveal>
              </div>
            </div>
            <ImageReveal>
              <div className="animate-pulse">
                <Image
                  src={service.img}
                  width={200}
                  height={200}
                  alt="chart"
                  className="md:h-[300px] md:w-[300px]"
                />
              </div>
            </ImageReveal>
          </div>
        ))}
      </div>

      <div className="parallax-element absolute blur-[2px] left-[15%] bottom-[20%]">
        <ImageReveal>
          <Image
            src={setting}
            alt="setting"
            width={100}
            height={100}
            className="animate-float"
          />
        </ImageReveal>
      </div>
      <div className="parallax-element absolute top-[10%] blur-[2px] left-[40%]">
        <ImageReveal>
          <Image
            src={sun}
            alt="sun"
            width={100}
            height={100}
            className="animate-float"
          />
        </ImageReveal>
      </div>
      <div className="parallax-element absolute right-[20%] blur-[2px] bottom-[20%]">
        <ImageReveal>
          <Image
            src={hash}
            alt="hash"
            width={100}
            height={100}
            className="animate-float z-[-10]"
          />
        </ImageReveal>
      </div>
    </section>
  );
};

export default Services;
