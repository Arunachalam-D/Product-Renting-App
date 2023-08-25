import React from 'react'
import { Icon } from '@iconify/react';
function Footer() {
  return (
    <div >
    <div className='grid grid-cols-3 ml-[12%] mt-[2%] pb-[2%]'>
        <div>
            <h3 className='text-lg font-[500] text-gray-800 pb-[2%]'>Rent-It</h3>
            <div >
            <p className='text-sm text-gray-600 '>About us</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Culture</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Investors</p>
            <p className='text-sm text-gray-600 pt-[1%]'>careers</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Contact</p>
            <p className='text-sm text-gray-600 pt-[1%]'> our benifits</p>
            </div>
        </div>
        <div>
            <h3 className='text-lg font-[500] text-gray-800 pb-[2%]'> Information</h3>
            <div>
            <p className='text-sm text-gray-600'>Blogs</p>
            <p className='text-sm text-gray-600 pt-[1%]'>FAQ's</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Documents Required</p>
            
            </div>
        </div>
        <div>
        <h2 className='text-lg font-[500] text-gray-800 pb-[2%]'>Policies</h2>
         <div >
            <p className='text-sm text-gray-600' >Shipping Policies</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Cancellation & Return</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Privacy Policy</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Rental Terms & Conditions</p>
            <p className='text-sm text-gray-600 pt-[1%]'>Referral Terms & Conditions</p>
           
         </div>
        </div>
    </div>
   
       
           
        
        <div className='flex  justify-around pt-[2%] border-t border-gray-100 '>
            <div className=' '>
             <p> © 2023. Edunetwork Pvt. Ltd.</p>
           </div>
        <div className='gap-4 flex '>
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600' icon="gg:facebook" />
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2.5%] bg-gray-600' icon="akar-icons:linkedin-fill" />
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600'  icon="basil:instagram-solid"/>
        <Icon className='w-[30px] h-[30px] text-white border border-gray-600 rounded-full p-[2%] bg-gray-600' icon="akar-icons:twitter-fill" />
        </div>
        
    </div>
    </div>
  )
}

export default Footer