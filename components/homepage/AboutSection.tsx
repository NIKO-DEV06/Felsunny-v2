import Image from "next/image";
import spin from "@/assets/spin.svg";

const AboutSection = () => {
  return (
    <section className="bg-[#121212] text-white min-h-screen">
      <div className="mt-[3rem] ">
        <h1 className=" font-integral-bold text-[3rem] px-[1rem] leading-[3rem]">
          Felsunny <br />
          Technology{" "}
          <span className="font-serif font-bold hidden md:inline-block custom-pulse">
            _
          </span>
        </h1>
      </div>
      <div className="overflow-hidden absolute translate-x-1/2 right-1/2 w-[20rem] h-[20rem] rounded-full mx-auto mt-[2rem]">
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
      <hr className="mt-[25rem]" />
      <div className="mt-[1.5rem] px-[1rem]">
        <div>
          <Image
            src={spin}
            alt="spin"
            width={60}
            height={60}
            className="animate-spin-slow"
          />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default AboutSection;
