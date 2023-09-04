import React from 'react'
import img1 from '../../assests/Tablet/Tab1.2.png'
import img2 from '../../assests/Tablet/Tab2.1.png'
import img3 from '../../assests/Tablet/Tab3.1.png'
import img4 from '../../assests/Tablet/Tab4.1.png'
import LapModals from '../../shared/ProductType'
import Layout from "../../Layout/Layout";
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <Layout>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] '>
        <div>
        <NavLink to='/ipadpro'><LapModals Img={img1} type="Apple Ipad Pro"/></NavLink>
        </div>
        <div>
        <NavLink to='/honorpad'><LapModals Img={img2} type="Honor Pad"/></NavLink>
        </div>
        <div>
        <NavLink to='/redmipad'><LapModals Img={img3} type="Anker Earpod"/></NavLink>
        </div>
        <div>
        <NavLink to='/lenovopad'><LapModals Img={img4} type="Boat Type C Charger"/></NavLink>
        </div>
    </div>
        </Layout>
    </div>
  )
}
