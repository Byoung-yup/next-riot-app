import ItemCard from "@/components/ItemCard";
import Item from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import React from "react";

const ItemList = async () => {
  const itemData: Item[] = await fetchItemList();
  return (
    <div className="flex flex-col w-1/3 h-auto gap-[20px]">
      {itemData.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
