import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

function CustomLink({
  text = "Button ",
  type = "primary",
  onClick = null,
  to = "/",
}) {
  // transparent button
  if (type === "transparent")
    return (
      <Link
        href={to}
        className=" border-2 border-transparent flex gap-2 items-center  hover:border-2   hover:border-white justify-center  transition-all duration-200 text-white rounded-md md:px-4 px-1 py-2 group"
      >
        {text}
        <FiArrowUpRight className=" group-hover:rotate-45 transition-transform duration-500" />
      </Link>
    );

  // secondary Link
  if (type === "secondary")
    return (
      <Link
        href={to}
        className=" border-2 border-transparent flex gap-2 items-center bg-secondary hover:border-2   hover:border-secondary justify-center  transition-all duration-200 hover:bg-transparent text-white rounded-md md:px-4 px-2 py-2 group"
      >
        {text}
        <FiArrowUpRight className=" group-hover:rotate-45 transition-transform duration-500" />
      </Link>
    );

  //  default primary Link
  return (
    <Link
      href={to}
      className="bg-primary border-2 border-transparent flex gap-2 items-center hover:bg-white hover:border-2 font-semibold  hover:border-primary justify-center hover:text-primary transition-all duration-200 text-white rounded-md md:px-4 px-2 py-2 group"
    >
      {text}
      <FiArrowUpRight className="font-semibold group-hover:rotate-45 transition-transform duration-500" />
    </Link>
  );
}

export default CustomLink;
