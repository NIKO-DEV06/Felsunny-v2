import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { ImageReveal } from "../utils/ImageReveal";

const UnfixedHeader = ({
  invert,
  color,
}: {
  invert: "invert" | "";
  color: string;
}) => {
  return (
    <ImageReveal>
      <div className="flex justify-end items-center px-[1.5rem] md:px-[4rem] bggreen-600 py-[1.5rem]">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo"
            width={220}
            height={220}
            className={`bg-red400 absolute top-[-20px] md:top-[-15px] left-[-10px] md:left-[40px] ${invert} md:scale-[1.3] cursor-pointer`}
          />
        </Link>
        <p
          className={`font-[300] ${color} mr-[3.5rem] md:text-[1.2rem] hidden md:block z-[10] mt-[15px]`}
        >
          menu
        </p>
      </div>
    </ImageReveal>
  );
};

export default UnfixedHeader;
