import Item from "@/types/Item";
import Image from "next/image";
import React from "react";

const ItemCard = ({ item }: { item: Item }) => {
  return (
    <div className="flex flex-row justify-start items-center w-full h-[100px] gap-[30px]">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
        alt={item.name}
        width={100}
        height={100}
      />
      <div className="flex flex-col justify-start items-start gap-[15px]">
        <span className="font-bold">{item.name}</span>
        <span>{item.plaintext}</span>
      </div>
    </div>
  );
};

export default ItemCard;
