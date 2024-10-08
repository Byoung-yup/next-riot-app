import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row gap-[30px] justify-center items-center">
      <Link
        href={"/champions"}
        className="border-none rounded-lg p-[15px] bg-purple-300"
      >
        <span>챔피언 목록</span>
      </Link>
      <Link
        href={"/items"}
        className="border-none rounded-lg p-[15px] bg-purple-300"
      >
        <span>아이템 목록</span>
      </Link>
      <Link
        href={"/rotation"}
        className="border-none rounded-lg p-[15px] bg-purple-300"
      >
        <span>로테이션 챔피언 목록</span>
      </Link>
    </div>
  );
}
