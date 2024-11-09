import React from "react";
import { HiStar } from "react-icons/hi";

const FlipCard = ({ step, title, Icon = HiStar, backContent, cardColor }) => (
  <div className="perspective group h-[160px] w-[160px] cursor-pointer">
    <div className="transform-style-preserve-3d group-hover:my-rotate-y-180 relative h-full w-full duration-1000">
      {/* Front Side */}
      <div
        className={`backface-hidden ${cardColor} absolute grid h-full w-full grid-rows-3 rounded-md ${cardColor === "bg-white" ? "border-2 border-primary" : ""} p-4`}
      >
        <div className="text-3xl">
          <Icon className="ml-auto self-end" />
        </div>
        <span className="mt-2 text-4xl">{step}</span>
        <span>{title}</span>
      </div>

      {/* Back Side */}
      <div className="my-rotate-y-180 backface-hidden absolute flex h-full w-full items-center justify-center self-baseline rounded-md bg-primary p-4 text-white">
        <p className="font-semibold">{backContent}</p>
      </div>
    </div>
  </div>
);

export default FlipCard;
