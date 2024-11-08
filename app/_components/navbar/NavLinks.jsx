"use client";

import navLinks from "@/app/_util/constants/navLinks";
import { useRouter } from "next/navigation";

function NavLinks({ type = "horizontal" }) {
  const router = useRouter();
  const currentPath = router.pathname || "/";

  return (
    <div
      className={`flex gap-6 font-medium ${
        type === "vertical"
          ? "flex-col gap-3 w-[250px] bg-white shadow-md  px-6 py-6"
          : ""
      }`}
    >
      {navLinks.map((link, i) => (
        <a
          className={`hover:text-secondary  transition-colors duration-300 ${
            currentPath === link.path ? "text-secondary " : ""
          }`}
          key={i}
          href={link.path}
        >
          {link.text}
        </a>
      ))}
    </div>
  );
}

export default NavLinks;
