import Link from "next/link";
import React from "react";

const Navibar = () => {
  return (
    <header className="fixed top-0 w-full">
      <ul className="flex justify-around items-center h-[80px] bg-blue-500">
        <Link href={"/"} className="text-white">
          <li>홈</li>
        </Link>
        <Link href={"/champions"} className="text-white">
          <li>챔피언 목록</li>
        </Link>
        <Link href={"/items"} className="text-white">
          <li>아이템 목록</li>
        </Link>
        <Link href={"/rotation"} className="text-white">
          <li>로테이션 목록</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navibar;
