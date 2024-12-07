import React from "react";
import Image, { StaticImageData } from "next/image";
import { icon_shopping } from "@/utils/icon";
type CardsPizzaProps = {
  img: StaticImageData;
  name: string;
  price: string;
  description: string;
};

const CardsPizza = ({ img, name, price, description }: CardsPizzaProps) => {
  return (
    <div className="h-[348px] w-[268px] bg-[#D9D9D9] rounded-md shadow-md flex flex-col py-4 px-4 items-center gap-4">
      <Image src={img} alt={name} width={138} height={138} />
      <h3 className="font-SansitaOne font-bold">{name}</h3>
      <p
        className="overflow-hidden text-ellipsis"
        style={{
          WebkitLineClamp: 3,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
        }}
      >
        {description}
      </p>
      <button className="px-20 py-2 bg-[#FE3D00] rounded-[14px] text-white text-xl hover:bg-orange-600">{icon_shopping()}</button>
    </div>
  );
};

export default CardsPizza;
