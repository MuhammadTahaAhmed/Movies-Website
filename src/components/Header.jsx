import React, { useState } from 'react'
import logo from "./../assets/Images/images2.png"
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv,

} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from './HeaderItems';
function Header() {
    const [open , setOpen]=useState(false)
    const menu = [
        {
            name: "HOME",
            icon: HiHome
        },
        {
            name: "SEACRH",
            icon: HiMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "ORIGINALS",
            icon: HiStar
        },
        {
            name: "MOVIES",
            icon: HiPlayCircle
        },
        {
            name: "SERIES",
            icon: HiTv
        },
    ]
    return (
        <div className="flex items-center justify-between p-5 ">
            <div className='flex gap-8 items-center'>
                <img style={{ background: "none" }} src={logo} className='w-[80px] md:w-[115px]  object-cover' />
                <div className='hidden  md:flex gap-8'>
                    {
                        menu.map((item,i) => (
                            <HeaderItems key={i} name={item.name} Icon={item.icon} />
                        ))
                    }
                </div>
                <div  className='flex md:hidden gap-5'>
                    {
                        menu.map((item,index) =>index<3&& (
                            <HeaderItems key={index} name={""} Icon={item.icon} />
                        ))
                    }
                </div>
                <div className='md:hidden' onClick={()=>setOpen(!open)}>
                    <HeaderItems name={""} Icon={HiDotsVertical} />
                  {open?  <div className='absolute mt-3 bg-[#121212] 
                    border-[1px] border-gray-700 p-3 px-5 py-4
                    '>
                    {
                        menu.map((item,index) =>index>2&& (
                            <HeaderItems key={index} name={item.name} Icon={item.icon} />
                        ))
                    }
                    </div>:null}
                </div>
            </div>
            <div className='flex gap-2'>
            <img className='w-[40px] rounded-full border-[2px] border-gray-300' src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png" alt="" />
            <h2 className='text-white mt-2 font-bold'>PROFILE</h2>
            </div>  
        </div>
    )
}

export default Header
