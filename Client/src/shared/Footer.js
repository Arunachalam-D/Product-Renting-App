import React from 'react'
import { Icon } from '@iconify/react';
function Footer() {
  return (
    <div >
      <div className='mt-[2%] pb-[3%] w-[85%] m-auto '>
        <h2 className='text-gray-700 text-md pb-2 font-bold'>Why Rent-It ?</h2>
        <p className='text-gray-600 text-sm'>Renting a product can save money in the long run as rental rates are lower than prices if you want to purchase an item. Also it gives us the cushion to test out different types of products before deciding on a purchase. By renting we can avoid making a large purchase when we only need something for a short period of time, making it a good option for both the provider an consumer.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 cursor-pointer pb-[2%]'>
        <div className='m-auto text-center pt-3 ' >
            <h3 className='text-lg font-[500] text-gray-800 pb-[2%]'>Rent-It</h3>
            <div >
            {/* <p className='text-sm text-gray-600 '>About us</p> */}
            <p className='text-sm text-gray-600 '>Culture</p>
            {/* <p className='text-sm text-gray-600 pt-[1%]'>Investors</p>
            <p className='text-sm text-gray-600 pt-[1%]'>careers</p> */}
            <p className='text-sm text-gray-600 pt-[1%]'>Contact</p>
            {/* <p className='text-sm text-gray-600 pt-[1%]'> our benifits</p> */}
            </div>
        </div>
        <div className='m-auto text-center pt-3'>
            <h3 className='text-lg font-[500]  text-gray-800 pb-[2%]'> Information</h3>
            <div>
            <p className='text-sm text-gray-600'>Blogs</p>
            <p className='text-sm text-gray-600 pt-[1%]'>FAQ's</p>
            {/* <p className='text-sm text-gray-600 pt-[1%]'>Documents Required</p> */}
            
            </div>
        </div>
        <div className='m-auto text-center pt-3'>
        <h2 className='text-lg font-[500] text-gray-800 pb-[2%]'>Policies</h2>
         <div >
            {/* <p className='text-sm text-gray-600' >Shipping Policies</p> */}
            <p className='text-sm text-gray-600 '>Cancellation & Return</p>
            {/* <p className='text-sm text-gray-600 pt-[1%]'>Privacy Policy</p> */}
            <p className='text-sm text-gray-600 pt-[1%]'>Terms & Conditions</p>
            {/* <p className='text-sm text-gray-600 pt-[1%]'>Referral Terms & Conditions</p> */}
           
         </div>
        </div>
    </div>
   
       
           
        
        <div className='grid grid-cols-1 md:grid-cols-2 pb-[3%]  pt-[3%] border-t border-gray-100 '>
            <div className=' m-auto mb-[4%] md:mb-0 '>
             <p> © Designed by Arun & Jaswanth </p>
           </div>
        <div className='gap-4 flex m-auto pb-[4%] md:pb-0 cursor-pointer'>
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600' icon="gg:facebook" />
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600'  icon="entypo-social:linkedin-with-circle" />
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600'  icon="basil:instagram-solid"/>
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600' icon="akar-icons:twitter-fill" />
        </div>
        
    </div>
    </div>
  )
}

export default Footer