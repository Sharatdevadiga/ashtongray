"use client";

import navLinks from "@/app/_util/constants/navLinks";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from "./NavLinks";
import useClickOutside from "@/app/_hooks/useClickOutside";

function HambergerNavlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useClickOutside(() => setIsOpen(false));

  return (
    <div className="relative">
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>
      <div
        ref={ref}
        className={`absolute top-12 ${isOpen ? "block" : "hidden"}`}
      >
        <NavLinks type="vertical" />
      </div>
    </div>
  );
}

export default HambergerNavlinks;
