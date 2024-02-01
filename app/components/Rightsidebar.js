import React from 'react'
import lang from "../../public/language.png"
import generalsetting from "../../public/General Settings.png";
import fontsetting from "../../public/Font Settings.png"
import appearence from "../../public/Appearance.png"

import Image from 'next/image';
export const Rightsidebar = () => {
  return (
    <aside className='flex flex-col items-center bg-white w-[330px] h-[890px] gap-5 rounded-[24px] p-7  font-medium ml-10'>
    <h1 className='font-bold'>Settings</h1>
    <div className='flex flex-col gap-5'>
    <Image src={lang} width={290} height={55}/>
    <Image src={generalsetting} width={290} height={55}/>
    <Image src={fontsetting} width={290} height={55}/>
    <Image src={appearence} width={290} height={134}/>
    </div>
    </aside>
  )
}
