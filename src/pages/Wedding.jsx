import React from 'react'
 import { BsArrowDownCircle} from 'react-icons/bs'

export default function Wedding() {
  return (
    <>
    <div>
    <div className='relative'>
        <img src='https://cdn0.weddingwire.in/article/3379/3_2/960/jpg/89733-small-wedding-decor-the-a-cube-project.jpeg'
         className=' w-full h-[760px]'/>
        <div className='absolute top-[25%] left-[25%] right-0 bottom-0 text-white'>
         <p className='text-[90px] font-[700] text-yellow-600'>Wedding Cars</p>
         <p className='text-[30px] mr-[400px] text-center text-yellow-600 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit
            <br></br>Lorem ipsum dolor sit amet.
         </p>
         <BsArrowDownCircle className='ml-[400px] mt-[200px] animate-bounce text-[80px]'></BsArrowDownCircle>

        </div>
      </div>
    </div>
    </>
  )
}
