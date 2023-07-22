"use client";
import { useRouter } from "next/navigation";

const GetInTouch = () => {
  const router = useRouter();
  return (
    <aside className="bg-white rounded-[2rem] md:rounded-[2.5rem] md:mx-[3rem] xl:mx-[6rem] py-[4rem] md:py-[7rem] px-[1.5rem] md:px-[7rem] mb-[7rem]">
      <h1 className="font-integral text-[1.3rem] md:text-[2rem] mb-[1.5rem]">
        Tell us about your project
      </h1>
      <button
        onClick={() => {
          router.push("/contact");
        }}
        className="bg-[#e0fd60] hover:bg-[#dff385] px-[1.5rem] py-[.5rem] md:py-[.7rem] md:hover:tracking-wider duration-300 z-[10] cursor-pointer rounded-full font-sofia-medium font-bold border-black border-2 mb-[2rem]"
      >
        Get in touch
      </button>
      <hr className="mb-[1.5rem] md:mb-[2.5rem]" />
      <div className="flex flex-col gap-[2rem]">
        <h1 className="font-integral">Our Offices</h1>
        <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[10rem]">
          <div className="flex flex-col gap-[0.1rem]">
            <p className="font-integral">Nigeria</p>
            <p className="font-sofia">Gwarinpa</p>
            <p className="font-sofia"> Abuja, FCT</p>
          </div>
          <div className="flex flex-col gap-[0.1rem]">
            <p className="font-integral">Nigeria</p>
            <p className="font-sofia">2 Ahmadu Bello Way, Challenge 240101</p>
            <p className="font-sofia">Ilorin, Kwara State</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default GetInTouch;
