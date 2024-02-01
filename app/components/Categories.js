import React from 'react'
import search from "../../public/Frame.svg"
import Image from 'next/image'
export const Categories = () => {
  return (
    <>
    <aside className='w-[429px] h-[890px] flex flex-col bg-black'>
        {/* category head */}
        <h1 className='flex justify-center items-center  px-[124px] py-5 text-center rounded-t-xl text-white text-[17px] font-semibold bg-[#1FA45B;]'>Categories
        </h1>

        {/* search bar */}
        <div className='flex items-center relative mx-auto mt-4'>
  <div className="relative w-[400px]">
    <Image
      className='absolute left-3 top-1/2 transform -translate-y-1/2'
      src={search}
      alt='Search Icon'
      width={20}
      height={20}
    />
    <input
      className='w-full pl-10 pr-4 py-3 rounded-lg border-[#e2e2e2] placeholder-[#e2e2e2] border'
      placeholder='Search by Categories'
    />
  </div>
</div>

        </aside>
    </>
  )
}
