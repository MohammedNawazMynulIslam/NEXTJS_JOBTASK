import React from 'react';
import search from "../../public/Frame.svg"
import styles from '../fonts.css'
import Image from 'next/image';
import profile from '../../public/profile 1.png'
import dropdown from '../../public/Polygon 2.png'
function Header() {
  return (
    <>
<nav className='flex flex-row md-flex-row items-center justify-between max-w-[1280px] mx-auto mt-16'>
        <div className={`text-2xl font-semibold h-9 w-[117px] ${styles.fontPoppins}`}>
          Dua Page
        </div>
        <div className='flex w-full md:w-[371px] py-1 pr-1 pl-4 justify-between items-center rounded-[10px] border-[#E2E2E2] bg-white'>
    <div className='text-[rgba(134, 134, 134, 1)] font-Inter'>Search by Dua Name</div>
    <div className='flex px-[15px] py-[10px] items-center gap-[10px] rounded-md bg-[rgba(243, 244, 246, 1)]'>
        <Image src={search} width={24} height={24} />
    </div>
</div>
<div className='flex  justify-between items-center gap-3 rounded-full cursor-pointer'>
  <Image src={profile} alt='profile' width={50} height={50}/>
  <Image  src={dropdown} alt='dropdown' width={10} height={10}/>

</div>

      </nav>
      </>
  );
}


export default Header;