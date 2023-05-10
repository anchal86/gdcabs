import React from 'react'
import { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import { async } from '@firebase/util';
import { useNavigation } from 'react-router-dom';
import { serverTimestamp } from 'firebase/firestore';
import { db } from '../Firebase';
import { getDoc,setDoc,doc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export default function Signin() {
  const [showPassword,setshowPassword]=useState(false)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()


  async function Auth(){
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result=await signInWithPopup(auth, provider)
      const user=result.user
      toast.success('valid email ')
      navigate('/')
      const docSpan= await getDoc(doc(db,"users",user.uid));

      if(!docSpan.exists()){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          name:user.displayName,
          timestamp:serverTimestamp()
        })
      }
      
    } catch (error) {
      toast.error('somthing is wrong')
      
    }

  }

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth();
      console.log(email)
      console.log(password)
      const result=await signInWithEmailAndPassword(auth, email, password)
      const user= result.user
      toast.success('valid Id')
      
      
    } catch (error) {
      toast.error('invalid creadential')
      
    }
  }

  return (
    <>
    <div className='w-full my-10 '>
        <form onSubmit={onSubmit} className='w-[700px] shadow-2xl border-[1px] border-gray m-auto text-center mt-[10px] bg-gray-300 rounded-lg pb-10'>
            <h1 className='mt-[30px] text-[30px] font-semibold'>Sign In</h1>
            
            <input type='text' placeholder='Email Address' className='border-2 w-[500px] py-2 px-2 text-[16px] mt-8 rounded-xl'
                           onChange={(e)=>setEmail(e.target.value)}></input>

            <input type='password' placeholder='Password' className='mt-8 border-2 w-[500px] p-2 text-[16px] rounded-xl'
             onChange={(e)=>setPassword(e.target.value)}></input>
            <div className='flex justify-center ml-[10px] mt-2'>
                <p className='text-[20px]'>Dont Have a Account/</p><Link to='/Signup' className='text-[20px] font-semibold'>Register</Link>
                <Link to='/Forgotpassword' className='list-none  ml-[80px] text-[20px] space-x-4'>Forgot Password</Link>
            </div>
            
            
            <button className='hover:bg-blue-600 bg-blue-400 w-[500px] py-2 mt-14 text-[20px] rounded-3xl cursor-pointer 
                              justify-center flex items-center ml-[110px]'
                              
                              >
                Sign In</button>
            <button className='hover:bg-red-600 bg-red-400 w-[500px] py-2 mt-8 text-[20px] cursor-pointer  rounded-3xl
                              justify-center flex items-center ml-[110px]'
                              onClick={Auth}
                              >
                <FcGoogle className='mr-2'></FcGoogle>Continue With Google</button>

            
            
           
        </form>
    </div>
    </>
  )
}
