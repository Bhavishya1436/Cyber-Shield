"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "HOME", path: "/" },
    { name: "AWARENESS", path: "/awareness" },
    { name: "QUIZ", path: "/quiz" },
    { name: "TOOLBOX", path: "/toolbox" },
    { name: "ABOUT", path: "/about" },
  ];

  return (
    <nav className="bg-gradient-to-r from-orange-100 to-orange-200 shadow-md">
      <ul className="flex justify-center space-x-10 py-4 font-semibold">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`px-4 py-2 rounded-sm transition-all duration-200 ${
                pathname === link.path
                  ? "bg-orange-600 text-white"
                  : "text-black hover:text-orange-600"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
