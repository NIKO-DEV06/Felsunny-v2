import { Dispatch, SetStateAction } from "react";
import Nav from "./Nav";
import Socials from "./Socials";
import Link from "next/link";
import { BgReveal, MenuReveal } from "@/utils/MenuReveal";

const Menu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <MenuReveal isOpen={isOpen}>
        <div className="fixed bg-white z-[30] w-screen md:w-[689px] md:right-0 h-screen px-[2rem] overflow-scroll">
          <p className="font-sofia-bold text-[1.5rem] mt-[1.5rem] md:hidden">
            Felsunny
          </p>
          <div className="flex mt-[8rem] md:mt-[9rem] md:justify-center md:gap-[8rem]">
            <div className="hidden md:flex md:flex-col gap-[3rem]">
              <p className="font-sofia-extralight opacity-50 uppercase tracking-widest">
                Social
              </p>
              <Socials />
            </div>
            <div className="flex flex-col gap-[1rem] pl-[1rem] md:pl-0">
              <p className="font-sofia-extralight opacity-50 text-[1.2rem] md:text-base uppercase tracking-widest">
                Menu
              </p>
              <Nav setIsOpen={setIsOpen} />
            </div>
          </div>
          <div className="pt-[3rem] md:pt-[2rem] pl-[1.5rem] md:pl-[3rem]">
            <p className="font-sofia-extralight opacity-50 uppercase tracking-wider md:text-[0.9rem]">
              Get In Touch
            </p>
            <div className="relative w-fit group">
              <Link
                href={"mailto:felixsunday@yahoo.com"}
                className=" font-sofia-extralight"
              >
                felixsunday@yahoo.com
                <div
                  className={`scale-x-0 absolute w-full h-[1px] bg-black bottom-0 group-hover:scale-x-100 duration-300`}
                ></div>
              </Link>
              <div
                className={`absolute w-full h-[1px] bg-black opacity-[0.2] bottom-0 scale-x-100 duration-300`}
              ></div>
            </div>
          </div>
        </div>
      </MenuReveal>

      <BgReveal isOpen={isOpen}>
        <div
          onClick={() => setIsOpen(false)}
          className="fixed bg-black inset-0 w-screen h-screen z-[25] opacity-[0.4]"
        ></div>
      </BgReveal>
    </>
  );
};

export default Menu;
