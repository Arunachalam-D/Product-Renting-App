import React from 'react'
import WhyRentit from './WhyRentit'
import { BsStars } from "react-icons/bs";
import { FaLocationDot,FaScrewdriverWrench,FaHandshakeSimple } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { PiPlantFill } from "react-icons/pi";

function index() {
  return (
    <div className='py-4 bg-[whitesmoke]'>
        <div className='w-[85vw] m-auto'>
             <h1 className='text-red-400 capitalize text-xl text-left mt-8 font-normal'>What's there in <span className='font-bold'>Rent-It...</span></h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 w-[85vw] m-auto pb-12'>
            <div><WhyRentit head="Quality Product" text="Quality matters to you, and us! That's why we do a strict quality-check for every product." icon={<BsStars/>}/></div>
            <div><WhyRentit head="Free Relocation" text="Quality matters to you, and us! That's why we do a strict quality-check for every product." icon={<FaLocationDot/>}/></div>
            <div><WhyRentit head="Proper Maintenance" text="Quality matters to you, and us! That's why we do a strict quality-check for every product." icon={<FaScrewdriverWrench/>}/></div>
            <div><WhyRentit head="Easy Return" text="Quality matters to you, and us! That's why we do a strict quality-check for every product." icon={<TbTruckReturn/>}/></div>
            <div><WhyRentit head="Trustworthy" text="Quality matters to you, and us! That's why we do a strict quality-check for every product." icon={<FaHandshakeSimple/>}/></div>
            <div><WhyRentit head="Time for new" text="Quality matters to you, and us! That's why we do a strict quality-check for every product." icon={<PiPlantFill/>}/></div>
        </div>
    </div>
  )
}

export default index