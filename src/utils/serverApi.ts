"use server";

import Champion from "@/types/Champion";
import ChampionDetail from "@/types/ChampionDetail";
import Item from "@/types/Item";

const getRecentVersion = async (): Promise<string> => {
  const versionRes = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versionData = await versionRes.json();
  const recentVersion = versionData[0];

  return recentVersion;
};

export const fetchChampions = async (): Promise<Champion[]> => {
  const recentVersion = await getRecentVersion();

  const championsRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${recentVersion}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const championJsonData = await championsRes.json();

  return Object.values(championJsonData.data);
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  if (Math.random() < 0.5) throw new Error("테스트 에러"); // 확률적 에러 발생코드

  const recentVersion = await getRecentVersion();

  const championRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${recentVersion}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );

  const championJsonData = await championRes.json();
  const champion = championJsonData.data[id];

  const _champion: ChampionDetail = {
    id: champion.id,
    key: champion.key,
    name: champion.name,
    title: champion.title,
    image: champion.image,
    lore: champion.lore,
    spells: champion.spells,
    passive: champion.passive,
  };

  return _champion;
};

export const fetchItemList = async (): Promise<Item[]> => {
  const recentVersion = await getRecentVersion();

  const itemRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${recentVersion}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    }
  );
  const itemJSONData = await itemRes.json();

  return Object.values(itemJSONData.data);
};
