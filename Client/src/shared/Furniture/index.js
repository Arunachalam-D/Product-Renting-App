import React from 'react'
import FurnitureType from '../ProductType'
import Baby from '../../assests/Baby1.png'
import Bedroom from '../../assests/Bed1.png'
import LivingRoom from '../../assests/Live2.png'
import DiningRoom from '../../assests/Dining1.png'
import Work from '../../assests/Work3.png'
import General from '../../assests/General2.png'
import Layout from "../../Layout/Layout";

function index() {
  return (
    <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] ">
        <FurnitureType Img={Baby} type="Baby"/>
        <FurnitureType Img={LivingRoom} type=" Living Area"/>
        <FurnitureType Img={DiningRoom} type="Dining Room"/>
        <FurnitureType Img={Bedroom} type="Bedroom"/>
        <FurnitureType Img={Work} type="Work Essentials"/>
        <FurnitureType Img={General} type="General"/>
    </div>
    </Layout>
  )
}

export default index