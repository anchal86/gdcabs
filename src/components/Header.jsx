import React from 'react'
import {SiWhatsapp} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import {IoMdMenu} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io' 
import {useLocation,useNavigate} from 'react-router-dom' 
import { useState } from 'react'


export default function Header() {
  const location= useLocation()
  const navigate=useNavigate()
  function show(route){
    if(route==location.pathname){
      return true
    }

    function show(){
      var x=document.getElementById("btn");
      if (x.style.display=="block") {
        x.style.display="none"
      }
      else{
        x.style.display="block"
      }
    }
  }

  const [scroll,setScroll] = useState(0)
  
  window.addEventListener("scroll",()=>{
    setScroll(window.scrollY)
  })




  return (

    <>
      <div className={`w-full shadow-sm fixed ${scroll<20? 'bg-opacity-100':'bg-opacity-90 bg-clip-padding blur-backdrop-filter'}  bg-[#073b4c] top-0 z-50  `}>
        <header  className='flex items-center max-w-6xl m-auto justify-between'>
            <div className=''>
                <img src='https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp'
                  className='w-[100px] h-[70px] cursor-pointer'
               />
            </div>

            <div className=' xs:hidden lg:flex flex-wrap flex font-semibold '>
                <ul id='btn' className=' flex  flex-wrap space-x-6 '>
                    <li className={`text-[#b1a374!important] cursor-pointer ${show('/')}`}
                     onClick={ ()=>navigate('/')}
                    >
                      Home
                    </li>
                    <div className=' group'>
                     <li className={`relative flex items-center  cursor-pointer text-[#b1a374] hover:text-[#e6c65f]  ${show('/')}`}
                     >
                      Explore<IoMdArrowDropdown />
              
                      <div className='group-hover:block   text-center 
                      bg-[#073b4c] py-10 w-[240px] h-auto absolute top-[20px] text-[#b1a374] hidden'>
                        <li className={` hover:text-[#e6c65f]  ${show('/Categories')}`}
                         onClick={ ()=>navigate('/Categories')}
                        >Explore by Categories</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Services')}`}
                         onClick={ ()=>navigate('/Services')}
                        >
                          Explore by Services</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Brands')}`}
                         onClick={ ()=>navigate('/Brands')}
                        >
                          Explore by Brands</li>
                        <li className={` mt-6 hover:text-[#e6c65f] ${show('/View') }`}
                        onClick={ ()=>navigate('/View')}
                        >
                          Explore in one-view</li>
                        
                      </div>
                    </li>
                   </div>
              
                    <li className='text-[#b1a374] cursor-pointer flex group relative hover:text-[#e6c65f]'>
                      Location<IoMdArrowDropdown className='mt-2' />
                    <div className='group-hover:block hidden  text-center  
                      bg-[#073b4c] w-[150px] h-auto py-10 absolute top-[20px] right-[px] text-[#b1a374!important]'>
                        <li className='hover:text-[#e6c65f]'>NCR</li>
                        <li className={`mt-6 hover:text-[#e6c65f]  ${show('/Jaipur')}`}
                        onClick={ ()=>navigate('/Jaipur')}
                        >jaipur</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Agra')}`}
                        onClick={ ()=>navigate('/Agra')}
                        >
                          Agra</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Delhi')}`}
                        onClick={ ()=>navigate('/Delhi')}>
                          Delhi</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Lucknow')} `}
                         onClick={ ()=>navigate('/Lucknow')}
                        >Lucknow
                        </li>
                      </div>
                    </li>
                    <li className={`text-[#b1a374] hover:text-[#e6c65f] cursor-pointer ${show('/')}`}
                     onClick={ ()=>navigate('/Support')}
                     >
                      Support</li>
                    <li className='cursor-pointer flex group relative text-[#b1a374] hover:text-[#e6c65f]'>
                      More<IoMdArrowDropdown className='mt-2'/>
                    <div className='group-hover:block hidden  text-center 
                      bg-[#073b4c] w-[240px] h-auto absolute py-10 top-[20px] left-[-130px] text-[#b1a374!important]'>
                        <li className={`hover:text-[#e6c65f] {show('/Terms') && 'text-black border-b-red-600'}`}
                          onClick={ ()=>navigate('/Terms')}>
                          Term & Conditions</li>
                        <li className={`hover:text-[#e6c65f] mt-6 ${show('/Contact') }`}
                        onClick={ ()=>navigate('/Contact')}
                        >
                          Contact Us</li>
                        <li className='mt-6 hover:text-[#e6c65f]'>Testimoniols</li>
                        
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/About') }`}
                        onClick={ ()=>navigate('/About')}
                        >About</li>
                      </div>
                    </li>
                </ul>
            </div>


            <div className='xs:hidden lg:flex space-x-8 '>
              <div className='flex justify-center  rounded-full bg-white hover:bg-gray-200 border-2 py-1 px-6 text-[16px] '>
              <li className={`cursor-pointer flex items-center  ${show('/Signin') && 'text-black border-b-red-600'}
                `}
                onClick={ ()=>navigate('/Signin')}>
               SignIn</li>
              </div>
               <div  className=' flex justify-center bg-green-400 hover:bg-green-600 rounded-full border-2 py-1 px-6 '>
               <button className='flex items-center space-x-2 '>
                <SiWhatsapp className='flex mr-2'/>
                Whatsapp</button>
               </div>
               <div  className=' xl:flex flex  justify-center hover:bg-white hover:text-black text-white rounded-full border-4 text-[16px] py-1 px-6 ' >
               <button className='flex items-center'> 
                <FiPhoneCall className='mr-4' />
                call us</button>
               </div>
              
               
            </div>
        </header>

    </div>
    </>
    
  )
}
