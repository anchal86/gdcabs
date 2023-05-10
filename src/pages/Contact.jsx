import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
   <>
   <div>
    <div className='text-center list-none'>
        <h1 className='text-[70px] mt-[150px] font-semibold'>Contact Us</h1>
        <h2 className='text-[50px] mt-10'>Need Suggestions, or Assistance Help </h2>
        <li className='text-[30px] mt-12 text-[#c1c1c1]'>Lorem ipsum<br></br>
           dolor sit amet consectetur adipisicing elit. Vero, ratione.</li>
        <div className=''>
        <div className='text-center space-x-8  pb-10 mt-16'>
            <button className='bg-[#333]  hover:bg-black w-[400px] h-16 rounded-full text-white text-[20px]'>Schedule an Appointment</button>
            <Link to='#ss'>
            <button  className='bg-[]  hover:bg-black w-[400px] h-16 rounded-full hover:text-white text-black border-4 border-black text-[20px]'>Fill out Contact Form</button>
            </Link>
            <button  className='bg-[]  hover:bg-black w-[400px] h-16 rounded-full hover:text-white text-black border-4 border-black text-[20px]'>Fill out Contact Form</button>
            <button className='bg-[#333]  hover:bg-black w-[400px] h-16 rounded-full text-white text-[20px]'>Contact info</button>
        </div>
        </div>

    </div>
    <div className=''>
    <div id='ss' className='text-center mt-[100px]'>
        <h1 className='text-[60px]'>Contact Form</h1>
        <div className='flex justify-center space-x-14 text-start list-none mt-10'>
            <div>
                <li className='text-[25px]' >Name</li>
                <input placeholder=''  className='border-2 text-[30px]'></input>
            </div>
            <div>
                <li  className='text-[25px]'>E-Mail</li>
                <input placeholder='' className='border-2 text-[30px]' ></input>
            </div>
            <div>
                <li  className='text-[25px]'>Phone</li>
                <input placeholder='' type='number' className='border-2 text-[30px]'></input>
            </div>



        </div>
        <div className='list-none ml-[px] mt-10'>
                <li   className='text-[25px] mr-[700px]'>Messages</li>
                <textarea  cols="100" rows="10" className='border-2 '></textarea>
               
              </div>
              <button className='bg-green-400 mt-10 mb-10 text-[22px] p-6 rounded-[20px]'>SEND FORM</button>
            </div>
                
            
        


    </div>
    <div className='text-center mt-14'>
        <h1 className='text-[80px]'>Reach Us</h1>
        <div className='flex justify-center mt-16 space-x-[300px]'>
            <div className='list-none text-start'>
                <h1 className='text-[30px] font-semibold '>Address:</h1>
                <h2 className='text-[24px] font-semibold mt-10 text-[#c1c1c1]'>CORPORATE OFFICE</h2>
                <li className='mt-8 text-[22px] text-[#767676]'>Lorem ipsum, dolor sit india pvt.ltv<br></br>
                    consectetur adipisicing address is right<br></br>
                    elit. Facere corrupti near agra sector-2 <br></br>
                    possimus!</li>
                    <h2 className='text-[22px] text-green-600 font-semibold mt-6'>Schedule an Appointment</h2>
            </div>
            <div className='list-none text-start'>
                <h1 className='text-[30px] font-semibold'>Phone Numbers:</h1>
                <h2 className='text-[22px] font-semibold mt-8 font-semibold text-[#c1c1c1]'>Personalised Booking</h2>
                <h3 className='text-[22px]  text-[#767676] mt-4'>9759049048 , 8791749048</h3>
                <li className='text-[20px] font-semibold mt-4 text-[#c1c1c1]'>Operations</li>
                <li className='text-[22px] mt-2  text-[#767676]'>756734677</li>
                <li className='text-[20px] font-semibold mt-4 text-[#c1c1c1]'>Technical</li>
                <li className='text-[22px]   text-[#767676] mt-4'>756734677</li>
            </div>
        </div>
        <div className='flex justify-center mt-[150px] space-x-[300px] mb-[150px]'>
            <div className='list-none text-start'>
               
                <h2 className='text-[24px] font-semibold mt-10 text-[#c1c1c1]'>CORPORATE OFFICE</h2>
                <li className='mt-8 text-[22px] text-[#767676]'>Lorem ipsum, dolor sit india pvt.ltv<br></br>
                    consectetur adipisicing address is right<br></br>
                    elit. Facere corrupti near agra sector-2 <br></br>
                    possimus!</li>
                    <h2 className='text-[22px] text-green-600 font-semibold mt-6'>Schedule an Appointment</h2>
            </div>
            <div className='list-none text-start'>
                <h1 className='text-[30px] font-semibold'>E-MAILS:</h1>
                <h2 className='text-[22px] font-semibold mt-8 font-semibold text-[#c1c1c1]'>Queries</h2>
                <h3 className='text-[22px]  text-[#767676] mt-'>coadingscollar@gmail.com</h3>
                <li className='text-[20px] font-semibold mt-4 text-[#c1c1c1]'>Booking</li>
                <li className='text-[22px]   text-[#767676]'>anchalsir@gmail.com</li>
                <li className='text-[20px] font-semibold mt-4 text-[#c1c1c1]'>HOD</li>
                <li className='text-[22px]   text-[#767676] '>MeenalGupt@gmail.com</li>
            </div>
        </div>
    </div>
    
   </div>
   </>
  )
}
