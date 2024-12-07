import React from 'react'
import pizza from "/public/pizza.png";
import Image from 'next/image';
import { icdon_arrow } from '@/utils/icon';
const Exebtion = () => {
  return (
    <section className="flex justify-center px-10 md:px-20 mt-8 flex-wrap-reverse lg:flex-nowrap">
    <div className="flex flex-col gap-4 justify-center items-baseline lg:pl-10 md:max-w-3xl">
      <p className="text-[28px] font-bold font-SansitaOne text-[#FE3D00] -rotate-12">Pizza</p>
      <h2 className="font-bold font-sansita text-[36px]">Flavor that warms your heart, straight from the oven to your table!</h2>
      <p>Craving something delicious? Your perfect pizza is just a click away!</p>
      <div className="w-full md:px-10 flex flex-col items-center flex-1 md:flex-row md:justify-between lg:justify-start  gap-4">
        <button className="px-8 py-2 bg-[#FE3D00] rounded-[14px] text-white flex justify-center items-center gap-2">ORDER NOW {icdon_arrow()}</button>
        <button className="px-8 py-2 bg-[#1E1E1E] rounded-[14px] text-white  flex justify-center items-center gap-2">View menu {icdon_arrow()}</button>
      </div>
    </div>

    <Image className="drop-shadow-lg" src={pizza} width={460} height={460} alt="pizza"></Image>
    
  </section>
  )
}

export default Exebtion