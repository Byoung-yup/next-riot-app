"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        className="border-[1px] border-black text-black bg-blue-300"
        onClick={() => {
          router.replace("/");
        }}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
