import React from 'react'
import img1 from '../../assests/Mobiles/mobile1.png'
import img2 from '../../assests/Mobiles/mobile2.png'
import img3 from '../../assests/Mobiles/mobile3.png'
import img4 from '../../assests/Mobiles/mobile4.png'
import MobileModals from '../../shared/ProductType'
import Layout from "../../Layout/Layout";
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <Layout>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] '>
        <div>
        <NavLink to='/iphone11pro'><MobileModals Img={img1} type="Iphone 11 pro"/></NavLink>
        </div>
        <div>
        <NavLink to='/redmi12c'><MobileModals Img={img2} type="Redmi 12C"/></NavLink>
        </div>
        <div>
        <NavLink to='/realmenarzo'> <MobileModals Img={img3} type="Realme Narzo N55"/></NavLink>
        </div>
        <div>
        <NavLink to='/oneplus7'><MobileModals Img={img4} type="One Plus7"/></NavLink>
        </div>
    </div>
        </Layout>
    </div>
  )
}
