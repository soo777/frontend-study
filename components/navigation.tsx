"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home {path == "/" ? "🚃" : ""}</Link>
        </li>
        <li>
          <Link href="/about">About {path == "/about" ? "🚃" : ""}</Link>
        </li>
      </ul>
    </nav>
  );
}
