import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {db} from '../Firebase'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { async } from '@firebase/util';
import { serverTimestamp } from 'firebase/firestore';
import { setDoc,doc,getDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function Signup() {
  const [showPassword,setshowPassword]=useState(false)
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
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

    try{
      const auth=getAuth();
      if(name===''){
        throw {code:'auth/no-name'}
      }
      const userCredentail=await createUserWithEmailAndPassword(auth,email,password)
      console.log(userCredentail)
      const user= userCredentail.user
      updateProfile( user, { displayName:name
      })
      const userDetails={
        'name':name,
        'email':email,
        'timestamp':serverTimestamp()
      }
      await setDoc(doc(db,"users", user.uid), userDetails)
      toast.success("login success")
      navigate('/')
      

    }catch(error){
      console.log("Error"+error)
      const wrong=displayError(error.code)
      toast.error(wrong)
    }
  }
  function displayError(code){
    switch(code){
      case "auth/email-already-in-use":
       return 'email invalid'

      case 'auth/weak-password':
        return "invalid password at least 6 "
      

      case 'auth/no-name':
        return "no name"
      

      default:
        return "something went wrong"

    }
  }
  function demo(e){
    console.log(e.target.value)
  }





  return (
    <>
    <div className='w-full h-[700px] mt-10'>
        <div className='w-[700px] h-[680px] shadow-2xl border-[1px] border-gray m-auto text-center mt-[10px] ' onSubmit={onSubmit}>
            <h1 className='mt-[30px] text-[30px] font-semibold'>SIGIN-UP</h1>
            <form  onSubmit={onSubmit}>

                <input type='botton' placeholder='name' className='border-2 w-[450px] h-14 text-[25px] mt-10'
                               onChange={(e)=>setName(e.target.value)}
                ></input>
                <input type='botton' placeholder='Email' className='border-2 w-[450px] h-14 text-[25px] mt-10'
                onChange={(e)=>setEmail(e.target.value)}
                ></input>
               <input type='password' placeholder='Password'
                    onChange={(e)=>setPassword(e.target.value)}             
                      className='mt-10 border-2 w-[450px] h-14 text-[25px] ml-[px]'></input></form>
            <div className='flex justify-center ml-[10px]'>
                <p className='text-[20px]'>Dont Have a Account ?</p>
                <Link to='/Forgotpassword' className='list-none  ml-[80px] text-[20px] space-x-4'>Forgot Password</Link>
            </div>
            
            <button className='hover:bg-green-600 bg-blue-400 w-[500px] h-10 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[110px]'
                              onClick={onSubmit}>
                Signup</button>
            <button className='hover:bg-blue-600 bg-blue-400 w-[500px] h-14 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[110px]'
                              onClick={Auth}
                              >
                <FcGoogle className='mr-2'></FcGoogle>Continue With Google</button>

            
            
           
        </div>
    </div>
    </>
  )
}
