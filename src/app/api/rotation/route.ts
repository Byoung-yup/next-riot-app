import Champion from "@/types/Champion";
import { fetchChampions } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey: string = process.env.RIOT_API_KEY ?? "";

  const rotationRes = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey,
      },
    }
  );

  const rotationJSONData = await rotationRes.json();
  const rotationIds: number[] = rotationJSONData["freeChampionIds"];

  const champions: Champion[] = await fetchChampions();
  const filteredChampions: Champion[] = champions.filter((champion) =>
    rotationIds.includes(Number(champion.key))
  );

  return NextResponse.json({ data: filteredChampions });
}
