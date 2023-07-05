import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
const Carousel = ({children: slides,autoSlide=false,autoSlideInterval=3000}) => {

    const [curr,setCurr] = useState(0)

    const prev =()=>setCurr((curr)=>(curr===0 ? slides.length-1 : curr-1))
    const next =()=>setCurr((curr)=>(curr===slides.length-1 ? 0 : curr+1))

    useEffect(()=>{
        if (!autoSlide) return

        const slideInterval =setInterval(next,autoSlideInterval)
        return ()=>clearInterval(slideInterval)
    },[])
  return (
    <div className='overflow-hidden relative h-screen'>
        <div className='flex transition-transform ease-out duration-500' style={{transform: `translateX(-${curr*100}%)`}}>{slides}</div>
        <div className='absolute inset-0 flex justify-between items-center'>
            <button onClick={prev} className='ml-2 p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                <BsChevronLeft size={40} />
            </button>
            
            <button onClick={next} className='mr-2 p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white'>
                <BsChevronRight  size={40} />
            </button>
        </div>

        <div className='absolute bottom-4 left-0 right-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_,i)=>(
                    <div className={`
                        transition-all w-3 h-3 rounded-full bg-white
                        ${curr === i? "p-2" : "bg-opacity-50"}
                    `}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Carousel