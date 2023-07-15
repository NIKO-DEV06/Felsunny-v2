import Image from "next/image";
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <section className="text-white">
      <div className="flex justify-between items-center px-[1.5rem] md:px-[4rem] bggreen-600 py-[1.5rem] ">
        <h1
          data-fill-text="felsunny"
          className="font-integral-medium text-transparent text-[1.5rem] md:text-[2rem] tracking-widest stroke-neon cursor-pointer felsunny relative border-[#e0fd60] border-[1px] px-[1.4rem] pb-[0.5rem] rounded-full h-fit"
        >
          Felsunny
        </h1>

        <button className="font-sofia text-[#e0fd60] mr-[3.5rem] md:text-[1.2rem]">
          menu
        </button>
      </div>

      <div className="flex flex-col justify-center items-center h-[90vh] gap-[1.5rem] md:gap-[2.5rem] translate-y-[-6rem] md:translate-y-[-3rem]">
        <h1 className="text-center font-integral-heavy text-[1.7rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] px-[2.5rem] md:leading-[5rem]">
          Your Partner in <br /> Business{" "}
          <span className="text-transparent stroke-neon ">Excellence</span>
        </h1>
        <p className="font-sofia px-[2rem] text-center md:w-[60%] md:text-[1.15rem]">
          We provide business solutions, including sales and distribution,
          government supplies, construction, consultancy services, and property
          sales.
        </p>
        <button className="bg-[#e0fd60] px-[1.5rem] py-[.5rem] md:py-[.7rem] hover:tracking-widest duration-300">
          <p className=" font-sofia-medium font-bold text-black md:text-[1.05rem]">
            Learn More
          </p>
        </button>
      </div>
    </section>
  );
};

export default Hero;
