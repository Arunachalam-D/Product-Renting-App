import React from 'react'
import img1 from '../../assests/SmartDevices/Smart1.png'
import img2 from '../../assests/SmartDevices/Smart2.png'
import img3 from '../../assests/SmartDevices/Smart3.png'
import img4 from '../../assests/SmartDevices/Smart4.png'
import SmartDevices from '../../shared/ProductType'
import Layout from "../../Layout/Layout";
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <Layout>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] '>
        <div>
        <NavLink to='/echodot4thgen'><SmartDevices Img={img1} type="Echo Dot"/></NavLink>
        </div>
        <div>
        <NavLink to='/echoshow5'><SmartDevices Img={img2} type="Echo-show 5"/></NavLink>
        </div>
        <div>
        <NavLink to='/noisepulse2max'><SmartDevices Img={img3} type="Noise Pulse-2 Max"/></NavLink>
        </div>
        <div>
        <NavLink to='/zebsmartcam'><SmartDevices Img={img4} type="Zebronics Smart Cam"/></NavLink>
        </div>
    </div>
        </Layout>
    </div>
  )
}
