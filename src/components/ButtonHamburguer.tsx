"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type ButtonHamburguerProps = {
  items: {
    name: string;
    link: string;
  }[];
};
const ButtonHamburguer = ({ items: NavItems }: ButtonHamburguerProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const hanldeChangeButton = () => {
    setIsOpen(!isOpen);
  };

  const resizeClose = () => {
    addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    });
  };

  useEffect(() => {
    resizeClose();

    return () => resizeClose();
  }, []);

  return (
    <>
      <div
        className="fixed right-5 flex md:hidden z-20 flex-col gap-1 cursor-pointer"
        onClick={hanldeChangeButton}
      >
        <span
          className={`w-[60px] h-2 bg-[#FE3D00] transition-all ${
            isOpen && `rotate-45 translate-y-5`
          }`}
        ></span>
        <span
          className={`w-[60px] h-2 bg-[#FE3D00] transition-all ${
            isOpen && "hidden"
          }`}
        ></span>
        <span
          className={`w-[60px] h-2 bg-[#FE3D00] transition-all ${
            isOpen && `-rotate-45 translate-y-2`
          }`}
        ></span>
      </div>

      {isOpen && (
        <>
          <span className="w-full h-full top-0 left-0 fixed bg-black bg-opacity-10 backdrop-blur-sm"></span>
          <div className="fixed top-0 right-0 border-l-2 border-orange-600 0 bg-white text-white z-10 w-4/6 h-full">
            <ul className="gap-6 flex flex-col text-[#FE3D00] py-16">
              {NavItems.map((items, index) => (
                <Link
                  className="relative"
                  href={items.link}
                  key={index}
                  onClick={hanldeChangeButton}
                >
                  <li className="relative group px-8 py-4  transition-colors duration-300 text-orange-500 hover:text-white">
                    {items.name}
                    <span className="w-full h-10 left-0 text-orange-400 absolute bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default ButtonHamburguer;
