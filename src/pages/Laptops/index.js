import React from 'react'
import img1 from '../../assests/Laptops/Lap1.1.png'
import img2 from '../../assests/Laptops/Lap2.2.png'
import img3 from '../../assests/Laptops/Lap3.2.png'
import img4 from '../../assests/Laptops/Lap4.3.png'
import LapModals from '../../shared/ProductType'
import Layout from "../../Layout/Layout";
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <Layout>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] '>
        <div>
        <NavLink to='/microsoftsurface'><LapModals Img={img1} type="MicrosoftSurface"/></NavLink>
        </div>
        <div>
        <NavLink to='/hp255'><LapModals Img={img2} type="HP 255"/></NavLink>
        </div>
        <div>
        <NavLink to='/macbook'><LapModals Img={img3} type="MacBook Air"/></NavLink>
        </div>
        <div>
        <NavLink to='/asus'><LapModals Img={img4} type="Asus Vivobook 14"/></NavLink>
        </div>
    </div>
        </Layout>
    </div>
  )
}
