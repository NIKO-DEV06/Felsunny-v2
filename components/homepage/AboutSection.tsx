import Image from "next/image";
import spin from "@/assets/spin.svg";

const AboutSection = () => {
  return (
    <section className="bg-[#121212] text-white min-h-screen pb-[8rem]">
      <div className="mt-[3rem] ">
        <h1 className="font-integral-bold text-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[1rem] md:px-[3rem] xl:px-[5rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem]">
          Felsunny <br />
          Technology{" "}
          <span className="font-serif font-bold hidden md:inline-block custom-pulse">
            _
          </span>
        </h1>
      </div>
      <div className="overflow-hidden absolute translate-x-1/2 right-1/2 w-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[27rem] lg:h-[27rem] h-[20rem] rounded-full mx-auto mt-[2rem]">
        <video autoPlay loop muted playsInline>
          <source
            data-src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
            type="video/webm"
            src="https://cdn.cuberto.com/cb/hello/overview/2.webm"
          />
          <source
            data-src="https://cdn.cuberto.com/cb/hello/overview/2.mp4"
            type="video/mp4"
            src="https://cdn.cuberto.com/cb/hello/overview/2.mp4"
          ></source>
        </video>
      </div>
      <hr className="mt-[25rem] md:mt-[31rem] md:mx-[4rem] lg:mt-[35rem]" />
      <div className="mt-[1.5rem] md:mt-[4rem] px-[1rem] md:flex md:flex-row md:mx-[3rem]">
        <div className="pb-[2rem] md:w-1/2">
          <Image
            src={spin}
            alt="spin"
            width={60}
            height={60}
            className="animate-spin-slow"
          />
        </div>
        <div className="flex flex-col gap-[4rem] md:w-[70%]">
          <div className="flex flex-col gap-[1rem] md:flex-row">
            <p className="uppercase font-sofia tracking-widest text-[1.1rem] md:text-[0.7rem] md:w-[30rem]">
              Our Mission
            </p>
            <p className="font-sofia-regular text-[1.1rem] md:font-sofia">
              At Felsunny Technology, our mission is to empower businesses by
              offering innovative and reliable solutions that drive growth and
              success. We believe in fostering long-term partnerships with our
              clients, understanding their unique challenges, and delivering
              tailored strategies to achieve their goals.
            </p>
          </div>
          <div className="flex flex-col gap-[3rem] md:gap-[2rem] md:flex-row">
            <p className="uppercase font-sofia tracking-widest text-[1.1rem] md:text-[0.7rem] md:w-[10rem] md:text-right">
              Areas
            </p>
            <div className="flex flex-wrap gap-[0.5rem]">
              <p className=" border-2 w-fit p-2 rounded-full uppercase font-sofia-regular md:font-sofia">
                Sales
              </p>
              <p className=" border-2 w-fit p-2 rounded-full uppercase font-sofia-regular md:font-sofia">
                Government Supplies
              </p>
              <p className=" border-2 w-fit p-2 rounded-full uppercase font-sofia-regular md:font-sofia">
                Property Sales
              </p>
              <p className=" border-2 w-fit p-2 rounded-full uppercase font-sofia-regular md:font-sofia">
                Construction & Interior
              </p>
              <p className=" border-2 w-fit p-2 rounded-full uppercase font-sofia-regular md:font-sofia">
                Gadgets & Devices
              </p>
              <p className=" border-2 w-fit p-2 rounded-full uppercase font-sofia-regular md:font-sofia">
                Consultancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
