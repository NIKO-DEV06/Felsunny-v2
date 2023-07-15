"use client";

import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = isOpen
    ? "hamburger--vortex is-active"
    : "hamburger--vortex";

  return (
    <div className="fixed right-[1rem] md:right-[3.5rem] top-[2rem] md:top-[2.4rem] z-[20]">
      <button
        className={`${menuClass} scale-[0.65] invert scale-x-[0.7]`}
        type="button"
        onClick={toggleMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

export default Header;
