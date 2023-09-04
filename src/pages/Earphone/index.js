import React from 'react'
import img1 from '../../assests/EarphoneAndCharger/Ear1.1.png'
import img2 from '../../assests/EarphoneAndCharger/Ear2.1.png'
import img3 from '../../assests/EarphoneAndCharger/Ear3.1.png'
import img4 from '../../assests/EarphoneAndCharger/charge1.1.png'
import LapModals from '../../shared/ProductType'
import Layout from "../../Layout/Layout";
import { NavLink } from 'react-router-dom'

export default function index() {
  return (
    <div>
        <Layout>
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] '>
        <div>
        <NavLink to='/boatrockerz'><LapModals Img={img1} type="Boat Rockerz"/></NavLink>
        </div>
        <div>
        <NavLink to='/sonyear'><LapModals Img={img2} type="Sony WH-CH520"/></NavLink>
        </div>
        <div>
        <NavLink to='/earpod'><LapModals Img={img3} type="Anker Earpod"/></NavLink>
        </div>
        <div>
        <NavLink to='/ctypecharger'><LapModals Img={img4} type="Boat Type C Charger"/></NavLink>
        </div>
    </div>
        </Layout>
    </div>
  )
}
