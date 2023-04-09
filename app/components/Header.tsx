import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 flex gap-4 shadow bg-white">
      <Link href="/about" className="underline">
        About
      </Link>
      <Link href="/repos" className="underline">
        Repos
      </Link>
    </header>
  );
}
