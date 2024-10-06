import Champion from "@/types/Champion";
import ChampionDetail from "@/types/ChampionDetail";

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
    `https://ddragon.leagueoflegends.com/cdn/${recentVersion}/data/ko_KR/champion.json`
  );
  const championJsonData = await championsRes.json();

  return Object.values(championJsonData.data);
};

export const fetchChampionDetail = async (
  id: string
): Promise<ChampionDetail> => {
  const recentVersion = await getRecentVersion();

  const championRes = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${recentVersion}/data/ko_KR/champion/${id}.json`
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
