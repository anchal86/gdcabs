import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom' 

export default function About() {
  const navigate=useNavigate()
  return (
   <>
   <div>
      <div className='flex justify-center  items-center bg-black space-x-12 '>
        <div className='list-none'>
          <h1 className='text-[50px] font-semibold text-white mt-8'>Car Dealing Experience<br></br>
            Redefined!
          </h1>
          <li className='text-[30px] text-white mt-12'>Lorem ipsum dolor sit amet consectetur, <br></br>
            adipisicing elit. Inventore, unde?</li>
            <button className='text-[22px] bg-blue-400 p-4 mt-10 ml-16'>Explore Cars</button>
        </div>
        <div>
          <img src='./bugatti-2.jpg ' className='bg-black w-[700px] h-[700px] mt-16  '/>
        </div>

      </div>
      <div>
        <div>
          <h2 className='text-[60px] font-semibold text-center mt-16'>Your Car Rentals<br></br>
            <span className='text-[60px] font-thin '>solution</span>
          </h2>
          <li className='mt-6 text-center text-[25px] list-none'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> 
            Corporis consequuntur consequatur voluptas rem, accusantium quisquam <br></br>
            eveniet quod pariatur provident, excepturi cum? Officia dolor omnis magnam <br></br>
            sed possimus excepturi id, placeat repellat eum cumque. recusandae reiciendis aliqui<br></br>
             atque dolor quaerat quis facere quas fugiat velit?</li>
             <li className='mt-10 text-center text-[25px] list-none'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br></br> 
            Corporis consequuntur consequatur voluptas rem, accusantium quisquam <br></br>
           

             atque dolor quaerat quis facere quas fugiat velit?</li>
        </div>
        <div className=' list-none '>
          <h1 className='text-center text-[60px] mt-[150px]'>OUR Strength</h1>
          <div className='flex justify-center space-x-14 mt-14'>
            <div className=''>
              <div className='flex space-x-6'>
                <div>
                  <h1 className='text-[50px] font-thin border-4 p-2  rounded-full'>98%</h1>
                </div>
                <div className=''>
                  <h1 className='text-[25px] font-semibold'>Satisfied Customers</h1>
                  <li className='text-[23px] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, <br></br>
                    consectetur adipisicing elit. Consequatur, nemo!</li>
                </div>


                
              </div>
              <div className='flex space-x-6 mt-12'>
                <div>
                  <h1 className='text-[50px] font-thin border-4 p-2 rounded-full '>512</h1>
                </div>
                <div className=''>
                  <h1 className='text-[25px] font-semibold'>Vehicles Onboards</h1>
                  <li className='text-[23px] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, <br></br>
                    consectetur adipisicing elit. Consequatur, nemo!</li>
                </div>


                
              </div>
              <div className='flex space-x-6 mt-12'>
                <div>
                  <h1 className='text-[50px] font-thin border-4 p-2 rounded-full'>03</h1>
                </div>
                <div className=''>
                  <h1 className='text-[25px] font-semibold'>Business Partners</h1>
                  <li className='text-[23px] text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, <br></br>
                    consectetur adipisicing elit. Consequatur, nemo!</li>
                </div>


                
              </div>
            </div>
            <div>
              <img src='./bugatti.jpg' className='bg-black w-[500px] h-[500px] '/>
            </div>
          </div>

        </div>
      </div>
      <div className='text-center list-none'>
        <h1 className='text-[80px] mt-[150px] font-thin'>YOUR SAFETY OUR  PRIORITY</h1>
        <li className='text-[26px] mt-[50px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
           Officia aut fuga sapiente vel inventore facilis<br></br>
           , voluptates illum quaerat amet illo?</li>
      </div>
      <div className='text-center list-none'>
        <h1 className='text-[80px] mt-[100px] font-thin'>24*7 CUSTOMER SUPPORT</h1>
        <li className='text-[30px] mt-[50px]'>We offer 24*7 Customer Support<br></br>
        Go to <button className='text-green-500 cursor-pointer'
           onClick={ ()=>navigate('/Support')}
          >
          Support</button>
           </li>
      </div>
      <div className=' bg-[#b2ccd2] w-full h-[300px] flex justify-center space-x-[300px] items-center '>
        <h2 className='text-[60px] font-[600] mt-[]'>Lets Start Over!</h2>
        <button className='bg-gray-600 hover:bg-black text-white text-[30px] p-4 w-[300px] rounded-full'
        onClick={ ()=>navigate('/Support')}
        >Go to Support</button>

    </div>
   </div>
   </>
  )
}
