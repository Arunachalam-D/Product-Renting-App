import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
export default function Comments({message,name,position}) {
  return (
   <div className=' text-md text flex flex-col'>
    <div className='text-6xl text-[#13a6c7d1] m-auto'>
        <ImQuotesLeft/>
    </div>
      <div className=' m-auto text-lg w-[95%]'>{message}</div>
      <div className='m-auto text-md'>{name} | <span className='text-gray-400 text-md'>{position}</span></div>
    
   </div>
  )
}

