'use client'

import { icon_facebook, icon_instagram, icon_whatsapp } from '@/utils/icon'
import Image from 'next/image'
import React from 'react'
const Footer = () => {
  return (
    <footer className=' bg-black text-white flex justify-between items-center px-10 py-4 flex-col gap-8 md:flex-row'>
        <div className='flex justify-around items-center md:items-baseline  flex-1 flex-col gap-2 lg:flex-row'>
            <h4 className='font-SansitaOne font-bold text-[27px]'>Pizza</h4>
            <p> Visit us at: 123 Pizza Street, Flavor Town</p>
            <p>Email us: pizza@yourpizzeria.com</p>
        </div>
        <ul className='flex gap-4'>   
            <li><Image src={icon_whatsapp()} alt='whatsapp' width={24} height={24} /></li>
            <li><Image src={icon_facebook()} alt='facedbook' width={14} height={14} /></li>
            <li><Image src={icon_instagram()} alt='instagram' width={24} height={24} /></li>
        </ul>
    </footer>
  )
}

export default Footer