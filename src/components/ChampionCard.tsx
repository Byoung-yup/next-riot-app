import type Champion from "@/types/Champion";
import Image from "next/image";
import React from "react";

const ChampionCard = ({ champion }: { champion: Champion }) => {
  return (
    <div className="aspect-square">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
        alt={`${champion.name}`}
        width={200}
        height={200}
      />
    </div>
  );
};

export default ChampionCard;
