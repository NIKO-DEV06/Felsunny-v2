"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Socials = () => {
  const pathname = usePathname();

  const socials = [
    { name: "LinkedIn", url: "" },
    { name: "Twitter", url: "" },
    { name: "Facebook", url: "" },
    { name: "Instagram", url: "" },
  ];
  return (
    <div className="flex flex-col gap-[1.5rem]">
      {socials.map((social) => (
        <div className="relative w-fit group h-[1.2rem] overflow-hidden bgred-700 font-sofia-extralight hover:font-sofia duration-300">
          <Link
            href={social.url}
            className=" flex flex-col gap-[rem] bg-red400"
          >
            <p className=" md:group-hover:translate-y-[-1.5rem] duration-[450ms] transform ease-in-out">
              {social.name}
            </p>
            <p className="group-hover:translate-y-[-1.5rem] duration-[450ms] transform ease-in-out">
              {social.name}
            </p>
          </Link>
          {/* <div
            className={`${
              pathname === social.url ? "scale-x-100" : "scale-x-0"
            } absolute w-full h-[1px] bg-black bottom-0 group-hover:scale-x-100 duration-300`}
          ></div> */}
        </div>
      ))}
    </div>
  );
};

export default Socials;
