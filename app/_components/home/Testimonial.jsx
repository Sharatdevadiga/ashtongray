import Image from "next/image";
import { FaStar } from "react-icons/fa";

function Testimonial() {
  return (
    <div className="flex gap-4 items-center">
      <div>
        <Image
          src="/homeSection/testimonial.png"
          alt="logo"
          width={100}
          height={44}
          className="w-20 md:w-40"
        ></Image>
      </div>

      <div className="space-y-2">
        <div className="flex space-x-2">
          <FaStar className="text-secondary text-xl" />
          <FaStar className="text-secondary text-xl" />
          <FaStar className="text-secondary text-xl" />
          <FaStar className="text-secondary text-xl" />
          <FaStar className="text-secondary text-xl" />
        </div>
        <p className="text-xl">
          700+ <span className="font-semibold">Global Investors</span>
        </p>
      </div>
    </div>
  );
}

export default Testimonial;
