import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom' 


export default function Agra() {
  
const location= useLocation()
const navigate=useNavigate()
function show(route){
  if(route==location.pathname){
    return true
  }
}
 




  return (
    <div className=''>
       <div className='w-6xl flex relative '>
      <img src='https://media.discordapp.net/attachments/1075351440761045074/1075351561267593227/tajmahal.jpg?width=989&height=416'
       alt='bye bye' className='w-full h-[850px]'
      />
      <div className='absolute text-gray-400 top-[200px] right-[200px] text-end '>
        <p className='space-x-6 text-[110px] transition duration-150'>Rent<br></br><span className='font-semibold'>Luxury Cars</span><br></br>
        <span className='space-x-6 text-14'>for </span><span className='font-semibold'>Agra</span></p>
      </div>
      
    </div> 
    <div className='w-full h-full bg-black-500 text-center border-6 text-[80px] mt-[100px] mb-[50px]'>
      <p className=''>Planing to Rent</p>
      <p>a luxury Cars for <span className='font-semibold'>Agra ?</span></p>
      <p className='text-[50px] ml-[40%] italic'>We will help</p>
      <div className=' space-x-4'>
        <button className={` text-[25px] p-6 rounded-full border-2 border-black hover:bg-black hover:text-white w-[300px] 
        ${show('/Support') && ' border-b-red-600'}
        `}onClick={ ()=>navigate('/Support')}
        >
          Explore Brands</button>
        <button className='text-[25px] p-6 rounded-full border-2 border-black hover:bg-black hover:text-white w-[250px]'>
          Explore Cars</button>
        <button className={` text-[25px] p-6  rounded-full border-2 border-black hover:bg-black hover:text-white w-[300px]
        ${show('/Services') && ' border-b-red-600'}
        `}onClick={ ()=>navigate('/Services')}
        >
          Explore Services</button>

      </div>  
      <div className='mt-[300px] m-auto'>
      <p>Renting a luxury Cars in <span className='font-semibold'>Agra ?</span></p>
      <p className='italic text-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro 
                         <br></br>maxime voluptatum autem exercitationem repudiandae nostrum sed ali 
                         <br></br>blanditiis at? Hic quam iste eos quia, expedita officia incidunt vero non?
                         <br></br> ipsum dolor sit amet, consectetur adipisicing elit. Inventore sequi 
                          <button className='text-green-500'> Audi </button>,<br></br>
                          <button className='text-green-500'>Mercedese </button>,<button className='text-green-500'>BMW </button>,
                          <button className='text-green-500'>jaguar</button>,<button className='text-green-500'>Range Rover</button>,
                          <button className='text-green-500'>Bentley</button>,<button className='text-green-500'>porsche</button>,
                          <button className='text-green-500'>Rolls Royace </button>,<br></br>
                          <button className='text-green-500'>Ferrari </button>and,
                          <button className='text-green-500'>Vinatge Cars </button>, on rent in agra
        </p>
        
      </div>  
        
       
      
    </div> 
    <div className='w-full h-[800px] border-4 bg-gray-200  relative'>
      <div className='w-full h-full m-auto text-center'>
       <h1 className='text-[80px]'>How to Work it</h1>
       <p className='mt-10 text-[30px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
       <p className=' text-[30px]  text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?</p>
       <p className='text-[30px]  text-gray-500'>Lorem ipsum dolor sit amet <span className='text-green-400'>consectetur </span>adipisicing elit.</p>

       <div className='flex justify-center mt-[50px] w-full space-x-4'>
        <div className='border-4 w-[100px] h-[100px] rounded-[50%] border-black text-[50px] text-center'>
          1
      
        </div>
        <div className=' mt-10 w-[25%] h-1 bg-black'>

        </div>
        <div className='border-4 w-[100px] h-[100px] rounded-[50%] border-black text-[50px] text-center'>
          2
        </div>
        <div className='mt-10 w-[25%] h-1 bg-black'>

        </div>
        <div className='border-4 border-black rounded-[50%] text-[50px] w-[100px] h-[100px] text-[20px] text-center p-[5px]'>3</div>

      </div>
      <div className='flex justify-between  px-[140px] mt-[30px]'>
      <div className=''>
        <h1 className='text-[40px]'>Choose your Ride</h1>
        <p className='text-[20px]'>Lorem ipsum dolor sit amet.</p>
        <p p className='text-[20px]'>Your Requairments</p>
        <p p className='text-[20px]'>Lorem ipsum dolor sit amet.</p>
        <p className=' text-[20px] space-x-4'>Explore <button className='font-semibold'>Cars/</button><button  className='font-semibold'>
          Brands/</button><button  className='font-semibold'>Services</button></p>
      


      </div>
      <div>
        <h1 className='text-[40px]'>initiate Booking Request</h1>
        <p p className='text-[20px]'>Your Booking</p>
        <p className=' text-[20px] space-x-4'> <button className='font-semibold'>Booking Form</button></p>
      

      </div>
      <div>
        <h1 className='text-[40px]'>Get Confirmation</h1>
        <p className='text-[20px]'>Lorem ipsum dolor sit amet.</p>
        <p p className='text-[20px]'>Your Requairments</p>
       
        <button className='font-semibold text-[20px]'>Contact Us</button>
      

      </div>
      

      
        

      </div>
    </div>
     

    </div>
    <div className=' bg-[#b2ccd2] w-full h-[250px] flex justify-center space-x-[50px] items-center '>
      <h2 className='text-[60px] font-[800] mt-[]'>Not Find What You Were<br></br> looking for !</h2>
      <button className={`bg-gray-600 hover:bg-black text-white text-[30px] p-4 w-[300px] rounded-full
      ${show('/Support') && ' border-b-red-600'}
      `}onClick={ ()=>navigate('/Support')}
      >Go to Support</button>

    </div>
    
    </div>
   
  )
}
