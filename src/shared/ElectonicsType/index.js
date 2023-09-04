import React from 'react'
import ElectronicsType from '../ProductType' 
import Mobile from '../../assests/imobile.png'
import SmartDevice from '../../assests/SmartDevices/smartdevice.png'
import Laptop from '../../assests/laptop.png'
import Earphone from '../../assests/earphone.png'
import Tablet from '../../assests/tablet.png'
import { NavLink } from "react-router-dom"
import Layout from "../../Layout/Layout";

function index() {
  return (
    <div>
        <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] ">
       <NavLink to='/smartphones'><ElectronicsType Img={Mobile} type="Smartphones"/> </NavLink>
       <NavLink to='/smartdevices'><ElectronicsType Img={SmartDevice} type="Smart Devices"/></NavLink> 
       <NavLink to='/laptops'><ElectronicsType Img={Laptop} type="Laptops"/></NavLink> 
       <NavLink to='/earphoneandcharger'><ElectronicsType Img={Earphone} type="Charger & earphone"/></NavLink>
       <NavLink to='/tablet'><ElectronicsType Img={Tablet} type="Tablets"/></NavLink>
    </div>
    </Layout>
    </div>
  )
}

export default index