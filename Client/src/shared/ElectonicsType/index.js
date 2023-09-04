import React from 'react'
import ElectronicsType from '../ProductType' 
import Mobile from '../../assests/imobile.png'
import SmartDevice from '../../assests/smartdevice.png'
import Laptop from '../../assests/laptop.png'
import Earphone from '../../assests/earphone.png'
import Tablet from '../../assests/tablet.png'

import Layout from "../../Layout/Layout";

function index() {
  return (
    <div>
        <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] ">
        <ElectronicsType Img={Mobile} type="Smartphones"/>
        <ElectronicsType Img={SmartDevice} type="Smart Devices"/>
        <ElectronicsType Img={Laptop} type="Laptops"/>
        <ElectronicsType Img={Earphone} type="Charger & earphone"/>
        <ElectronicsType Img={Tablet} type="Tablets"/>
    </div>
    </Layout>
    </div>
  )
}

export default index