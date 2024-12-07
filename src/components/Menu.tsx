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

        <div className="flex justify-center items-center px-40 p-10 flex-wrap gap-8">
            {pizzas.map((pizza, index) => (
                <CardsPizza key={index} img={pizza.img} name={pizza.name} price={pizza.price} description={pizza.description} />    
            ))}
        </div>
    </section>
  );
};

export default Menu;
