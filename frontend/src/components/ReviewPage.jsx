import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard'
import { useSelector } from 'react-redux';


function ReviewPage() {
  const [latestReview,setLatestReview] =useState([]);
  const {allReview} = useSelector(state=>state.review)
  
  useEffect(()=>{
    setLatestReview(allReview.slice(0,6));
    },[allReview])
  return (
     <div className='flex items-center justify-center flex-col mt-15'>
      <h1 className='md:text-[45px] text-[30px] relative font-semibold text-center mt-[30px] px-[20px] after:content-[""] after:w-[30%] after:absolute after:bottom-0 after:left-[20px] after:bg-[#f8961d] after:h-[5px] after:rounded-full '>Real Reviews from Real Learners</h1>
      <span className='lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[30px] mb-[30px] px-[20px]'>Discover how our Virtual Courses is transforming learning experiences through real feedback from students and professionals worldwide.</span>
    <div className='w-[100%] min-[100vh] flex items-center justify-center flex-wrap gap-[50px] lg:p-[50px] md:p-[30px] p-[10px] mb-[40px]

    '>
      
     
            {
                latestReview.map((item,index)=>(
                    <ReviewCard key={index} rating={item.rating} image={item.user.photoUrl} text={item.comment} name={item.user.name} role={item.user.role} />
                ))
            }
             
    
    
    </div>
    </div>
  )
}
 

export default ReviewPage
