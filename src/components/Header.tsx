import { icon_Search, icon_shopping } from "@/utils/icon";
import Link from "next/link";
import React from "react";

type NavItems = {
  name: string;
  link: string;
};

const Header = () => {
  const NavItems: NavItems[] = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Visit Us",
      link: "/contact",
    },
  ];

  return (
    <header className="flex justify-around items-center px-4 py-2 text-[18px]">
      <div className="flex items-center gap-28">
        <span className=" font-bold text-[30px] text-[#FE3D00] font-SansitaOne italic">
          PIZZA
        </span>
        <ul className="flex gap-6">
          {NavItems.map((items, index) => (
            <Link className="relative" href={items.link} key={index}>
              <li className="relative group px-2 hover:text-[#D9D9D9] transition-colors duration-300">
                {items.name}
                <span className="w-full h-6 left-0 absolute bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <span className="text-2xl cursor-pointerd">{icon_shopping()}</span>
        <span className="text-2xl cursor-pointerd">{icon_Search()}</span>
        <button className="bg-[#FE3D00] text-white px-10 rounded-2xl">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
