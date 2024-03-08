import Image from "next/image";
import arrow from "@/assets/arrow.svg";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { Reveal } from "../utils/Reveal";
import { ImageReveal } from "../utils/ImageReveal";

const ServicesSection = () => {
  const services = [
    {
      name: "Sales & Distribution",
      url: "",
    },
    {
      name: "Government Supplies",
      url: "",
    },
    {
      name: "Property Sales",
      url: "",
    },
    {
      name: "Construction & Interior",
      url: "",
    },
    {
      name: "Gadgets & Devices",
      url: "",
    },
    {
      name: "Consultancy",
      url: "",
    },
  ];
  return (
    <section className="min-h-screen bg-[#121212] text-white pb-[7rem]">
      <Reveal y={200}>
        <h1 className="font-integral-bold text-[3rem] mt-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[1.5rem] md:px-[3rem] xl:px-[6rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem]">
          What we do{" "}
          <span className="font-serif font-bold hidden md:inline-block custom-pulse">
            _
          </span>
        </h1>
      </Reveal>
      <Reveal y={80}>
        <p className="font-[300] px-[1.5rem] md:px-[3rem] xl:px-[6rem] mt-[1.5rem]">
          We provide a wide range of business solutions
        </p>
      </Reveal>
      <div className="mt-[2rem]">
        {services.map((service) => (
          <ImageReveal>
            <Link
              href={service.url}
              className={`flex justify-between items-center ${
                service.name.toLowerCase() === "sales & distribution"
                  ? " border-y-[1px]"
                  : "border-b-[1px]"
              } border-[#ffffff46] bgblue-500 px-[1.5rem] md:px-[4rem] xl:px-[6rem] py-[1.8rem] md:text-[1.4rem] relative group`}
            >
              <p className="uppercase font-[300]">{service.name}</p>
              <Image
                src={arrow}
                alt="arrow"
                width={40}
                height={40}
                className="invert"
              />
              <div className="hidden md:flex md:items-center md:absolute inset-0 bg-[#e0fd60] z-[5] text-black scale-y-0 group-hover:scale-y-100 duration-300 transform cursor-pointer">
                <Marquee gradient={false} direction="left" speed={70}>
                  {Array.from({ length: 10 }, (_, index) => (
                    <div
                      key={index}
                      className="mr-[3rem] flex gap-[3rem] opacity-0 group-hover:opacity-100 duration-300"
                    >
                      <p className="font-[400]">{service.name}</p>
                      <Image src={arrow} alt="arrow" width={40} height={40} />
                    </div>
                  ))}
                </Marquee>
              </div>
            </Link>
          </ImageReveal>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
