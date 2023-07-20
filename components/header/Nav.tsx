"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();

  const links = [
    {
      name: "Welcome",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "What We Do",
      url: "/services",
    },
    {
      name: "Get in Touch",
      url: "/contact",
    },
    // {
    //   name: "Privacy Policy",
    //   url: "/privacy-policy",
    // },
  ];
  return (
    <div className="flex flex-col font-sofia text-[3.2rem] md:text-[3.5rem]">
      {links.map((link, index) => (
        <div
          key={index}
          className="relative w-fit group h-[4rem] md:h-[5rem] overflow-hidden"
        >
          <Link onClick={() => setIsOpen(false)} href={link.url} className="">
            <p className="translate-y-[.2rem] md:translate-y-[.8rem] md:group-hover:translate-y-[-5rem] duration-[450ms] cubic">
              {link.name}
            </p>
            <p className="md:group-hover:translate-y-[-4.7rem] duration-[450ms] cubic">
              {link.name}
            </p>
          </Link>
          <div
            className={`${
              pathname === link.url ? "scale-x-100" : "scale-x-0"
            } absolute w-full h-[1px] bg-black bottom-0 group-hover:scale-x-100 duration-300`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Nav;
