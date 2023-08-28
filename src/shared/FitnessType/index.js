import React from 'react'
import FitnessType from '../ProductType'
import GymPackage from '../../assests/GymPackage.png'
import Dumbell from '../../assests/Dumbell.png'
import Barbell from '../../assests/Barbell.png'
import Tredmill from '../../assests/Tredmill.png'

import Layout from "../../Layout/Layout";

function index() {
  return (
 
     <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] ">
        <FitnessType Img={GymPackage} type="Package"/>
        <FitnessType Img={Dumbell} type="Dumbells"/>
        <FitnessType Img={Barbell} type="Barbells"/>
        <FitnessType Img={Tredmill} type="Tred Mill"/>
    </div>
    </Layout>
  
  )
}

export default index