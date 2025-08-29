import React from 'react'


import { SiViaplay } from "react-icons/si";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { LiaUikit } from "react-icons/lia";
import { MdAppShortcut } from "react-icons/md";
import { FaHackerrank } from "react-icons/fa";
import { TbBrandOpenai } from "react-icons/tb";
import { SiGoogledataproc } from "react-icons/si";
import { BsClipboardDataFill } from "react-icons/bs";
import { SiOpenaigym } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
function ExploreCourses() {
  const navigate = useNavigate()
  return (
    <div className='w-[100vw] min-h-[50vh] lg:h-[50vh] pt-30 flex flex-col lg:flex-row items-center justify-center gap-5 px-[30px]'>
        <div className='w-[100%] lg:w-[350px] lg:h-[100%] h-[400px]  flex flex-col items-start justify-center gap-1 md:px-[40px]  px-[20px]'>
          <span className='text-[35px] font-semibold'>Explore</span>
          <span className='text-[35px] relative font-semibold after:content-[""] after:w-[40%] after:absolute after:bottom-0 after:left-[0px] after:bg-[#f8961d] after:h-[5px] after:rounded-full'>Our Courses</span>
          <p className='text-[17px] text-start text-wrap pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vel iure explicabo laboriosam accusantium expedita laudantium facere magnam.</p>
          <button className='px-[20px] py-[10px] border-2 bg-[black] border-white text-white rounded-[10px] text-[18px] font-light flex gap-2 mt-[40px]' onClick={()=>navigate("/allcourses")}>Explore Courses <SiViaplay className='w-[30px] h-[30px] fill-white' /></button>

        </div>
        <div className='w-[720px] max-w-[90%] lg:h-[300px] md:min-h-[300px] flex items-center justify-center lg:gap-[60px] gap-[50px] flex-wrap mb-[50px] lg:mb-[0px]'>
          <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center '>


            <div className='w-[100px] h-[90px] bg-[#fbd9fb]  rounded-(--my-radius) relative flex items-center justify-center  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]'>
              <TbDeviceDesktopAnalytics className='w-[60px] h-[60px] text-[#6d6c6c] ' /></div>
            Web Devlopmenqwe
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center '>

            <div className='w-[100px] h-[90px] bg-[#d9fbe0] rounded-(--my-radius) relative flex items-center justify-center  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]  '> <LiaUikit className='w-[60px] h-[60px] text-[#6d6c6c]' /></div>
            UI UX Designing
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center '>
            <div className='w-[100px] h-[90px] bg-[#fcb9c8] flex items-center justify-center rounded-(--my-radius) relative  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] '><MdAppShortcut className='w-[50px] h-[50px] text-[#6d6c6c]' /></div>
            App Devlopment
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center '>
            <div className='w-[100px] h-[90px] bg-[#fbd9fb] flex items-center justify-center rounded-(--my-radius) relative  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] '><FaHackerrank className='w-[55px] h-[55px] text-[#6d6c6c]' /></div>
            Ethical Hacking
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#d9fbe0] flex items-center justify-center rounded-(--my-radius) relative  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] '><TbBrandOpenai className='w-[55px] h-[55px] text-[#6d6c6c]' /></div>
            AI/ML
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#fcb9c8] flex items-center justify-center rounded-(--my-radius) relative  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%]  '><SiGoogledataproc className='w-[45px] h-[45px] text-[#6d6c6c]' /></div>
            Data Science
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center '>
            <div className='w-[100px] h-[90px] bg-[#fbd9fb] flex items-center justify-center rounded-(--my-radius) relative  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] '><BsClipboardDataFill className='w-[50px] h-[50px] text-[#6d6c6c]' /></div>
            Data Analytics
            </div>
            <div className='w-[100px] h-[130px] font-normal text-[14px] flex flex-col gap-3 text-center'>
            <div className='w-[100px] h-[90px] bg-[#d9fbe0] flex items-center justify-center rounded-(--my-radius) relative  animate-waterwave after:content-[""] after:border-1 after:w-[90%] after:h-[90%] after:absolute after:rounded-(--my-radius) after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] '><SiOpenaigym className='w-[50px] h-[50px] text-[#6d6c6c]' /></div>
            AI Tools
            </div>
        </div>

      
    </div>
  )
}

export default ExploreCourses








