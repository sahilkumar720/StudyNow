import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
function Logos() {
  return (
    <div className='w-[100vw] min-h-[90px]  flex items-center justify-center flex-wrap gap-5 pt-22 md:mb-[50px] '>
        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-gray-200 cursor-pointer transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-104 '>
            <MdCastForEducation className='w-[35px] h-[35px] fill-[#03394b]' />
            <span className='text-[#03394b]'>20k+ Online Courses</span>
        </div>


        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-gray-200 cursor-pointer transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-104'>
            <SiOpenaccess className='w-[30px] h-[30px] fill-[#03394b]' />
            <span className='text-[#03394b]'>Lifetime Access</span>
        </div>


        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-gray-200 cursor-pointer transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-104'>
            <FaSackDollar className='w-[30px] h-[30px] fill-[#03394b]' />
            <span className='text-[#03394b]'>Value For Money</span>
        </div>
        <div className='flex items-center justify-center gap-2  px-5 py-3  rounded-3xl bg-gray-200 cursor-pointer transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-104 '>
            <BiSupport className='w-[35px] h-[35px] fill-[#03394b]' />
            <span className='text-[#03394b]'>Lifetime Support</span>
        </div>
        <div className='flex items-center justify-center gap-2  px-5 py-3   rounded-3xl bg-gray-200 cursor-pointer transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-104'>
            <FaUsers className='w-[35px] h-[35px] fill-[#03394b]' />
            <span className='text-[#03394b]'>Community Support</span>
        </div>
      
    </div>
  )
}

export default Logos
