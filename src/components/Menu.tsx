import React from "react";
import { pizzas } from "@/utils/mockdatas";
import CardsPizza from "./CardsPizza";
const Menu = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">
      <h2 className="font-SansitaOne text-[32px] font-bold text-[#FE3D00]">
        Menu
      </h2>
      <p className="font-sansita font-light">
        Explore our mouth-watering options and find your favorite slice!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 lg:px-40">
            {pizzas.map((pizza, index) => (
                <CardsPizza key={index} img={pizza.img} name={pizza.name} price={pizza.price} description={pizza.description} />    
            ))}
        </div>
    </section>
  );
};

export default Menu;
