"use client"

import { sidebarLinks } from "@constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="bottom-0 z-20 flex items-center justify-between w-full px-6 py-3 bg-dark-1 md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex gap-2 items-center rounded-lg py-2 px-4 ${
              isActive && "bg-purple-1"
            }`}
          >
            {link.icon} <p className="text-light-1 text-small-medium max-sm:hidden">{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
