import ChampionDetail from "@/types/ChampionDetail";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ChampionItem = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const champion: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <div className="flex flex-col justify-center items-center w-1/3 h-auto gap-[20px]">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`}
        alt={`${champion.name}`}
        width={200}
        height={200}
      />
      <div>{champion.name}</div>
      {champion.spells.map((spell) => (
        <div
          className="flex flex-row justify-center items-center gap-[20px] w-full h-auto"
          key={spell.name}
        >
          <span className="block whitespace-nowrap">{spell.name}</span>
          <span>{spell.id.split(params.id)}</span>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
            alt={`${spell.name}`}
            width={100}
            height={100}
          />
          <span className="overflow-scroll">{spell.description}</span>
        </div>
      ))}
    </div>
  );
};

export default ChampionItem;
