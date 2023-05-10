import React from 'react'
import {BsArrowDownCircle} from 'react-icons/bs'

export default function Services() {
  return (
    <>
    <div>
    <div className='relative'>
        <img src='./service.webp' className='w-full h-[760px]'/>
        <div className='absolute top-[26%] left-[0%] right-0 bottom-0 text-white w-full'>
         <p className='text-[90px] font-[700] text-center'>Our Servicese</p>
         <p className='text-[30px] text-center'>Lorem ipsum dolor, sit amet consectetur<br></br>
         adipisicing elit. Temporibus<span className=' font-[600] font-semibold text-[40px] text-black'>Luxury Cars ipsum</span>.
         </p>
         <BsArrowDownCircle className='ml-[800px] mt-[200px] animate-bounce text-[80px] text-center'></BsArrowDownCircle>

        </div>
      </div>
      <div className=' flex justify-center space-x-16 mt-[200px]'>
        <div className='group relative w-[500px] h-[700px] text-center  hover:shadow-xl'>
        <img src='wedding.jpg'  className='hover:blur-sm ml-[0px]'
        />
         <button className='text-[30px] font-semibold hidden group-hover:block absolute top-[26%] left-[26%] w-[200px] h-[60px] rounded-full bg-red-500'>Wedding</button>
         <div className='text-center mt-10'>
            <h1 className=' text-[30px] font-semibold'>Car For Wedding</h1>
            <p className='mt-8 text-[20px]'>Lorem, ipsum dolor sit amet<br></br>
                 consectetur adipisicing elit. Culpa,<br></br>
                 fugit. Lorem ipsum dolor sit<br></br> amet consectetur adipisicing <br></br>
            elit. Adipisci, velit!</p>
        </div>

        </div>
        <div  className=' group w-[450px] h-[700px] relative  hover:shadow-xl'>
         <img src='corpurate.jpg' className='hover:blur-sm'/>
         <button className='text-[30px] font-semibold hidden group-hover:block absolute top-[26%] left-[26%] w-[200px] h-[60px] rounded-full bg-black text-white'>Corpurate</button>
         <div className='text-center mt-10'>
            <h1 className='text-[30px] font-semibold'>Cab For Corpurate</h1>
            <p className='mt-8 text-[20px]'>Lorem, ipsum dolor sit amet<br></br>
                 consectetur adipisicing elit. Culpa,<br></br>
                 fugit. Lorem ipsum dolor sit<br></br> amet consectetur adipisicing <br></br>
            elit. Adipisci, velit!</p>
        </div>

        </div>
        <div  className=' group w-[450px] h-[700px] relative mr-[50px]  hover:shadow-xl'>
         <img src='car9.jpg' className='hover:blur-sm'/>
         <button className=' text-[30px] font-semibold hidden group-hover:block absolute top-[26%] left-[26%] w-[200px] h-[60px] rounded-full bg-[#b1a374]'>Personal</button>
         <div className='text-center mt-10'>
            <h1 className='text-[30px] font-semibold'>Personal Travel</h1>
            <p className='mt-8 text-[20px]'>Lorem, ipsum dolor sit amet<br></br>
                 consectetur adipisicing elit. Culpa,<br></br>
                 fugit. Lorem ipsum dolor sit<br></br> amet consectetur adipisicing <br></br>
            elit. Adipisci, velit!</p>
        </div>
    </div>
    
     
     
      </div>
      <div className=' flex justify-center space-x-16   hover:shadow-xl'>
        <div className='group relative w-[450px] h-[700px] text-center'>
        <img src='car4.jpg'  className='hover:blur-sm ml-[0px]'
        />
         <button className='text-[30px] font-semibold hidden group-hover:block absolute top-[20%] left-[20%] w-[250px]
          h-[60px] rounded-full bg-red-500'>Video Shoot</button>
         <div className='text-center mt-10'>
            <h1 className=' text-[30px] font-semibold'>Car For Video Shoots</h1>
            <p className='mt-8 text-[20px]'>Lorem, ipsum dolor sit amet<br></br>
                 consectetur adipisicing elit. Culpa,<br></br>
                 fugit. Lorem ipsum dolor sit<br></br> amet consectetur adipisicing <br></br>
            elit. Adipisci, velit!</p>
        </div>

        </div>
        <div  className=' group w-[450px] h-[700px] relative   hover:shadow-xl'>
         <img src='emp.jpg' className='hover:blur-sm'/>
         <button className='text-[25px] font-semibold hidden group-hover:block absolute top-[20%] left-[20%] w-[300px]
          h-[60px] rounded-full bg-black text-white'>Employee Transportaion</button>
         <div className='text-center mt-10'>
            <h1 className='text-[30px] font-semibold'>Employee Transportaion Cabs</h1>
            <p className='mt-8 text-[20px]'>Lorem, ipsum dolor sit amet<br></br>
                 consectetur adipisicing elit. Culpa,<br></br>
                 fugit. Lorem ipsum dolor sit<br></br> amet consectetur adipisicing <br></br>
            elit. Adipisci, velit!</p>
        </div>

        </div>
        <div  className=' group w-[450px] h-[700px] relative mr-[50px]  hover:shadow-xl'>
         <img src='car7.webp' className='hover:blur-sm'/>
         <button className=' text-[25px] font-semibold hidden group-hover:block absolute top-[20%] left-[20%] w-[300px]
          h-[60px] rounded-full bg-[#b1a374]'>Airport Transfer</button>
         <div className='text-center mt-10'>
            <h1 className='text-[30px] font-semibold'>Airport Transfer Cabs</h1>
            <p className='mt-8 text-[20px]'>Lorem, ipsum dolor sit amet<br></br>
                 consectetur adipisicing elit. Culpa,<br></br>
                 fugit. Lorem ipsum dolor sit<br></br> amet consectetur adipisicing <br></br>
            elit. Adipisci, velit!</p>
        </div>
    </div>
    
     
     
      </div>
      <div className='text-center'>
        <h1 className='text-[60px] text-black'>Services For Quality</h1>
        <p className='text-[22px] mt-6 mb-[100px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, libero!</p>
      </div>

    </div>
    </>
  )
}