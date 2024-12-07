import React from 'react'
import pizza from "/public/pizza.png";
import Image from 'next/image';
const Exebtion = () => {
  return (
    <section className="flex justify-center px-20 mt-8">
    <div className="flex flex-col gap-4 justify-center items-baseline pl-40 pr-4">
      <p className="text-[28px] font-bold font-SansitaOne text-[#FE3D00] -rotate-12">Pizza</p>
      <h2 className="font-bold font-sansita text-[36px]">Flavor that warms your heart, straight from the oven to your table!</h2>
      <p>Craving something delicious? Your perfect pizza is just a click away!</p>
      <div className="flex gap-4">
        <button className="px-8 py-2 bg-[#FE3D00] rounded-[14px] text-white">ORDER NOW</button>
        <button className="px-8 py-2 bg-[#1E1E1E] rounded-[14px] text-white">View menu</button>
      </div>
    </div>

    <Image className="drop-shadow-lg" src={pizza} width={460} height={460} alt="pizza"></Image>
  </section>
  )
}

export default Exebtion