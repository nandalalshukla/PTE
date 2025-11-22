"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "../ToggleTheme";

export default function DesktopNavbar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="backdrop-blur-xl border-b border-white/20 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4">
        <div className="text-2xl font-extrabold drop-shadow-lg">
          PassTheExcellence
        </div>

        <ul className="flex gap-10 text-lg font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive
                      ? "text-yellow-600 font-semibold border-b-2 border-blue-300 pb-1"
                      : " hover:text-yellow-600 transition"
                  }
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
              </ul>
              <ModeToggle />
      </div>
    </nav>
  );
}
