import React from "react";
import { Button } from "../ui/button";
import { cardData } from "@/utils/data";
import Link from "next/link";

function Cards() {
  return (
    <div className="w-full md:w-3/4 md:h-[400px] flex flex-col md:flex-row items-center justify-between gap-4">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="cardStyle"
        >
          <img src={item.img} alt="" className="rounded-lg h-1/2 w-full" />
          <p className="text-sm text-justify">{item.content}</p>
          <Button className="h-8">
            <Link href={item.link}>Read More</Link>
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
