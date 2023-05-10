import React from 'react'
import {SiWhatsapp} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import {IoMdMenu} from 'react-icons/io'
import {IoMdArrowDropdown} from 'react-icons/io' 
import {useLocation,useNavigate} from 'react-router-dom' 


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

  




  return (
    <>
      <div className='w-full shadow-sm sticky top-0 z-50  '>
        <header  className='flex  items-center  bg-[#073b4c] lg:mr-[1px] lg:w-[10]'>
            <div className='xl:ml-[30px] lg:ml-[15px] w-[30%] h-30 ml-8  lg:w-[15%] md:ml-[50p] lg:ml-[0px]  sm:w-[30%]'>
                <img src='https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp'
                  className='w-[160px] h-[100px] cursor-pointer'
               />
            </div>
            <div className=' xm:hidden lg:flex flex-wrap flex  ml-[200px] font-semibold lg:w-[40%] xl:w-[40%] lg:ml-[60px] xl:ml-[60px]'>
                <ul id='btn' className=' flex  flex-wrap   space-x-6 text-[25px] text-[#879a9f] hover:text-[#e6c65f]  lg:text-[20px] xl:text-[20px] 2xl:text-[25px]'>
                  <div>
                    
                  </div>
                    <li className={`text-[#b1a374!important] cursor-pointer ${show('/')}`}
                     onClick={ ()=>navigate('/')}
            
                    >
                      Home</li>
                    <div className=' group'>
                     <li className={`relative flex items-center  cursor-pointer text-[#b1a374] hover:text-[#e6c65f]  ${show('/')}`}
                     >
                      Explore<IoMdArrowDropdown />
              
                      <div className='group-hover:block   text-center 
                      bg-[#073b4c] w-[300px] h-[300px] absolute top-[30px] text-[#b1a374] hidden'>
                        <li className={`mt-16 hover:text-[#e6c65f]  ${show('/Categories')}`}
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
                      bg-[#073b4c] w-[250px] h-[400px] absolute top-[30px] right-[px] text-[#b1a374!important]'>
                        <li className='mt-12 hover:text-[#e6c65f]'>NCR</li>
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
                      bg-[#073b4c] w-[300px] h-[350px] absolute top-[30px] left-[-130px] text-[#b1a374!important]'>
                        <li className={`hover:text-[#e6c65f] mt-12 {show('/Terms') && 'text-black border-b-red-600'}`}
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
            <div className=' flex space-x-8 ml-[20px] lg:text-[12px] xl:text-[20px] xm:hidden lg:flex lg:w-[39%] xl:w-[30%] 2xl:w-[30%] 2xl:ml-[0px] lg:mr-[100px] xl:mr-[200px] w-[500px]'>
              <div className='flex justify-center  rounded-full bg-white hover:bg-gray-200 border-2 w-[20%] h-[54px] font-semibold text-[20px] '>
              <li className={`cursor-pointer flex items-center  ${show('/Signin') && 'text-black border-b-red-600'}
                `}
                onClick={ ()=>navigate('/Signin')}>
               Singin</li>
              </div>
               <div  className='  space-x-2 flex justify-center bg-green-400 hover:bg-green-600 rounded-full border-2 w-[32%] h-[54px] font-semibold lg:text-[18px] 2xl:text-[20px] '>
               <button className='flex items-center space-x-2 '>
                <SiWhatsapp className='flex mr-2'/>
                Whatsapp</button>
               </div>
               <div  className=' xl:flex flex  justify-center hover:bg-white hover:text-black text-white rounded-full border-4 w-[30%] h-[54px] font-semibold text-[20px] ' >
               <button className='flex items-center'> 
                <FiPhoneCall className='mr-4' />
                call us</button>
               </div>
              
               
            </div>
            <div className='mr-1 text-[62px] text-white lg:hidden sm:block  md:ml-[450px] xm:ml-[250px] font-semibold'>
              <IoMdMenu onClick={show()} className='' ></IoMdMenu>
            </div>
        </header>

    </div>
    </>
    
  )
}
