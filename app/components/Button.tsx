"use client";

import { useRouter } from "next/navigation";

export default function Button({ children, link }: { children: string; link?: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => (link ? router.push(link) : router.back())}
      className="bg-blue-700 text-white rounded-lg p-2 text-center flex items-center justify-center"
    >
      {children}
    </button>
  );
}
