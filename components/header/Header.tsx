"use client";

import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex invert";

  return (
    <>
      <div className="fixed right-[1rem] md:right-[3.5rem] top-[2rem] md:top-[2.4rem] z-[40]">
        <button
          className={`${menuClass} scale-[0.65] scale-x-[0.7]`}
          type="button"
          onClick={toggleMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>

      <Menu />
    </>
  );
};

export default Header;
