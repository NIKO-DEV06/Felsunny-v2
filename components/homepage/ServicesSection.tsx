import Image from "next/image";
import arrow from "@/assets/arrow.svg";
import Marquee from "react-fast-marquee";
import Link from "next/link";

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
    <section className="min-h-screen bg-[#121212] text-white">
      <h1 className="font-integral-bold text-[3rem] mt-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[1.5rem] md:px-[3rem] xl:px-[5rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem]">
        What we do{" "}
        <span className="font-serif font-bold hidden md:inline-block custom-pulse">
          _
        </span>
      </h1>
      <p className="font-sofia px-[1.5rem] md:px-[3rem] xl:px-[5rem] mt-[1.5rem]">
        We provide a wide range of business solutions
      </p>
      <div className="mt-[2rem]">
        {services.map((service) => (
          <Link
            href={service.url}
            className="flex justify-between items-center border-y-[1px] border-[#ffffff46] bgblue-500 px-[1.5rem] md:px-[3rem] xl:px-[5rem] py-[2rem] md:text-[1.6rem] relative group"
          >
            <p className="uppercase font-sofia">{service.name}</p>
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
                    <p className="font-sofia">{service.name}</p>
                    <Image src={arrow} alt="arrow" width={40} height={40} />
                  </div>
                ))}
              </Marquee>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
