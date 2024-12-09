"use client";

import React, { useEffect, useState } from "react";
import pizza from "/public/pizza.png";
import Image from "next/image";
import { icdon_arrow, icon_arrow_up } from "@/utils/icon";
import { motion } from "framer-motion";

const Exebtion = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const toptoScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex justify-center px-10 md:px-20 mt-10 flex-wrap-reverse lg:flex-nowrap">
      <div className="flex flex-col gap-4 justify-center items-baseline lg:pl-10 md:max-w-3xl">
        <p className="text-[28px] font-bold font-SansitaOne text-[#FE3D00] -rotate-12">
          Pizza
        </p>
        <h2 className="font-bold font-sansita text-[36px]">
          Flavor that warms your heart, straight from the oven to your table!
        </h2>
        <p>
          Craving something delicious? Your perfect pizza is just a click away!
        </p>
        <div className="w-full md:px-10 flex flex-col items-center flex-1 md:flex-row md:justify-between lg:justify-start  gap-4">
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="px-8 py-2 bg-[#FE3D00] rounded-[14px] text-white flex justify-center items-center gap-2">
              ORDER NOW {icdon_arrow()}
            </button>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <button className="px-8 py-2 bg-[#1E1E1E] rounded-[14px] text-white  flex justify-center items-center gap-2">
              View menu {icdon_arrow()}
            </button>
          </motion.div>
        </div>
      </div>
      <motion.span
        initial={{ transform: "translateX(100px)", rotateX: "180", opacity: 0 }}
        animate={{ transform: "translateX(0px)", opacity: 1 }}
        exit={{ transform: "translateY(100px)", opacity: 0 }}
        transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
      >
        <Image
          className="drop-shadow-lg"
          src={pizza}
          width={460}
          height={460}
          alt="pizza"
        />
      </motion.span>
      {scrollY > 220 && (
        <div className="fixed text-5xl text-[#FE3D00] bottom-20 right-8 cursor-pointer">
            <motion.div
              initial={{ transform: "translateY(100px)", opacity: 0 }}
              animate={{ transform: "translateY(0px)", opacity: 1 }}
              exit={{ transform: "translateY(100px)", opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
            <p onClick={toptoScroll}>{icon_arrow_up()}</p>
        </motion.div>
          </div>
      )}
    </section>
  );
};
export default Exebtion;
