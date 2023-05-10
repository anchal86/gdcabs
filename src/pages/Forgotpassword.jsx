import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function Forgotpassword() {
  return (
    <>
    <div className='w-full h-[700px]'>
     
        <div className='w-[700px] h-[680px] shadow-2xl border-[1px] border-gray m-auto text-center mt-[10px]'>
            <h1 className='mt-[30px] text-[30px] font-semibold'>Forgot password</h1>
            <div>
              <li className=' mt-16 list-none text-start ml-[140px] text-[25px]'>Enter Email</li>
              <input type='botton' placeholder='valid-Email' className='border-2 w-[450px] h-14 text-[25px]'></input>
            </div>
            <div className='flex ml-[140px] space-x-[px] mt-2'>
              <p className='text-[20px]'>already have a account/</p>
              <Link to='/Signup' className='text-[20px] font-semibold'>Register</Link>
            </div>
            <button className='hover:bg-red-600 bg-yellow-400 w-[500px] h-10 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[120px]'>
               Reset</button>
            <div className='text-center]'>
            <button className='hover:bg-blue-600 bg-blue-400 w-[500px] h-14 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[120px]'>
                <FcGoogle className='mr-2'></FcGoogle>Continue With Google</button>
            

            </div>
            

            
            
           
        </div>
    </div>
    </>
  )
}
