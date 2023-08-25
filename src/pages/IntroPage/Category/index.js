import React from 'react'
import Category from './Category'
import {IoIosFitness} from 'react-icons/io'
import {MdOutlineDirectionsBike} from 'react-icons/md'
import {GiSofa} from 'react-icons/gi'
import {PiPackageFill} from 'react-icons/pi'
import {FiMonitor} from 'react-icons/fi'
import {IoHeadsetSharp} from 'react-icons/io5'


function index() {
  return (
    // <div className='w-[85vw] m-auto'>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-[85vw] my-[10vh] m-auto'>
        <div><Category name="Packages"  icon={<PiPackageFill/>}/></div>
        <div><Category name="Electonics"  icon={<IoHeadsetSharp/>}/></div>
        <div><Category name="Appliances"  icon={<FiMonitor/>}/></div>
        <div><Category name="Furniture"  icon={<GiSofa/>}/></div>
        <div><Category name="Two-Wheeler" icon={<MdOutlineDirectionsBike/>}/></div>
        <div><Category name="Fitness" icon={<IoIosFitness/>}/></div>
    </div>
    // </div>
  )
}

export default index