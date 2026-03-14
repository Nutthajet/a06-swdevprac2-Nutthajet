"use client";

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function Card({
  venueName,
  imgSrc,
  onRate,
}: {
  venueName: string;
  imgSrc: string;
  onRate: Function;
}) {
  return (
    <InteractiveCard>
      <div className="w-full h-[200px] relative">
        <Image
          src={imgSrc}
          alt="Venue Picture"
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      <div className="!px-2 !pt-2 text-xl font-semibold text-cyan-800 mt-2">
        {venueName}
      </div>

      <Rating
        name={`${venueName} Rating`}
        data-testid={`${venueName} Rating`}
        precision={1}
        defaultValue={0}
        onChange={(event, value) => onRate(venueName, value)}
        onClick={(e) => e.stopPropagation()}
        className="!px-2"
      />
    </InteractiveCard>
  );
}