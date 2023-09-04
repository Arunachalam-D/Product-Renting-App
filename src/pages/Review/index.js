import React from 'react'
import Index from './Comments'
import Modal from './Modal'
export default function Comments() {
  return (
    <div className='mb-10'>
   <div className='grid grid-cols-1 md:grid-cols-3 w-[85vw] m-auto gap-4 flex my-20'>
   
      <Index message="Rent it helps people to have products just when they need it instead of making them buy one."  name="Shankar"  position="Developer at Novastrid"/>
      <Index message="Rent it helps people to have products just when they need it instead of making them buy one."  name="MuthuKrishnan"  position="Analyst at Cognizant"/>
      <Index message="Rent it helps people to have products just when they need it instead of making them buy one."  name="Hari Vignesh"  position="Executive at Thangamayil"/>
   
   </div>
   <div className='flex'><Modal/></div>
   </div>
  )

}