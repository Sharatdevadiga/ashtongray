import { FiArrowUpRight } from "react-icons/fi";

function Button({ text = "Button ", type = "primary", onClick = null }) {
  // transparent button
  if (type === "transparent")
    return (
      <button
        onClick={onClick}
        className=" border-2 border-transparent flex gap-2 items-center  hover:border-2 font-semibold  hover:border-white justify-center  transition-all duration-200 text-white rounded-md px-4 py-2 group"
      >
        {text}
        <FiArrowUpRight className="font-semibold group-hover:rotate-45 transition-transform duration-500" />
      </button>
    );

  // secondary button
  if (type === "secondary")
    return (
      <button
        onClick={onClick}
        className=" border-2 border-transparent flex gap-2 items-center bg-secondary hover:border-2 font-semibold  hover:border-secondary justify-center  transition-all duration-200 hover:bg-transparent text-white rounded-md px-4 py-2 group"
      >
        {text}
        <FiArrowUpRight className="font-semibold group-hover:rotate-45 transition-transform duration-500" />
      </button>
    );

  //  default primary button
  return (
    <button
      onClick={onClick}
      className="bg-primary border-2 border-transparent flex gap-2 items-center hover:bg-white hover:border-2 font-semibold  hover:border-primary justify-center hover:text-primary transition-all duration-200 text-white rounded-md px-4 py-2 group"
    >
      {text}
      <FiArrowUpRight className="font-semibold group-hover:rotate-45 transition-transform duration-500" />
    </button>
  );
}

export default Button;
