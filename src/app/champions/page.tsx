import ChampionCard from "@/components/ChampionCard";
import Champion from "@/types/Champion";
import { fetchChampions } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";

const ChampionList = async () => {
  const championData: Champion[] = await fetchChampions();

  return (
    <div className="grid grid-cols-7 gap-[15px]">
      {championData.map((data) => (
        <Link href={`/champions/${data.id}`} key={data.id}>
          <ChampionCard champion={data} />
        </Link>
      ))}
    </div>
  );
};

export default ChampionList;
