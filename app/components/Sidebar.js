import Image from "next/image";
import logo from "../../public/unnamed 1.png"

import Home from "../../public/home 1.svg"
import Bookmark from "../../public/54-menu-2.svg"
import memorize from "../../public/memorize 1.svg"
import Menu from "../../public/3-keep-minus.svg"
import ruqyah from "../../public/ruqyah 1.svg"
import duainfo from "../../public/dua-info 1.svg"
import books1 from '../../public/books 1.svg'

import heart from '../../public/bxs_donate-heart.svg'


function Sidebar() {
    return (
      <aside className="flex flex-col   justify-between items-center bg-white w-[100px] h-[927px] rounded-[24px] p-7 text-white font-medium">
     <div className="w-[73px] h-[73px]">
      <Image  src={logo} alt="Logo"  width={73} height={73}/>
     </div>

      <div className="my-36 space-y-9 ">
      <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={Home} alt="Logo"  width={20} height={20}/>
     </div>
     <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={Bookmark} alt="Logo"  width={20} height={20}/>
     </div>
     <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={memorize} alt="Logo"  width={20} height={20}/>
     </div>
     <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={Menu} alt="Logo"  width={20} height={20}/>
     </div>
     <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={ruqyah} alt="Logo"  width={20} height={20} />
     </div>
     <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={duainfo} alt="Logo"  width={20} height={20}  />
     </div>
     <div className="p-2 rounded-[38px] bg-[#E8F0F5]">
     <Image src={books1}  alt="Logo"  width={20} height={20}/>
     </div>
     </div>
         <div className="flex justify-center items-center rounded-xl bg-[#1FA45B] shadow-[rgba(31, 164, 91, 0.22)] w-[57px] h-14">
        <Image src={heart}  alt="Logo"  width={24} height={24}/>
        </div>




      </aside>
    );
  }

  export default Sidebar;
