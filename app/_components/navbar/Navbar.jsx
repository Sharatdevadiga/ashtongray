import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import HambergerNavlinks from "./HambergerNavlinks";
import CustomLink from "../ui/CustomLink";

function Navbar() {
  return (
    <div className="bg-white h-20  shadow-md w-full place-content-center">
      <div className="max-w-[1400px] px-4 flex justify-between items-center  mx-auto ">
        <div className="lg:hidden">
          <HambergerNavlinks />
        </div>
        <div>
          <Link href="/">
            <Image
              src="/homeSection/logo.png"
              alt="logo"
              width={100}
              height={32}
              className="w-[75px] md:w-20"
            ></Image>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:block">
            <NavLinks />
          </div>
          <div className="flex items-center gap-4">
            <CustomLink to="/" type="primary" text="signup"></CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
