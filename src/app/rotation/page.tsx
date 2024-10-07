"use client";

import ChampionCard from "@/components/ChampionCard";
import Champion from "@/types/Champion";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const RotationList = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    const fetchRotationChampions = async () => {
      const response = await fetch("/api/rotation");
      const rotationChampionsRes = await response.json();

      setChampions(rotationChampionsRes.data);
    };

    fetchRotationChampions();
  }, []);

  return (
    <div className="grid grid-cols-7 gap-[15px]">
      {champions.map((champion) => (
        <Link href={`/champions/${champion.id}`} key={champion.id}>
          <ChampionCard champion={champion} />
        </Link>
      ))}
    </div>
  );
};

export default RotationList;
