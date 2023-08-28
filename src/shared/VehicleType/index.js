import React from 'react'
import VehicleType from '../ProductType'
import Bicycle from '../../assests/Bicycle.png'
import Scooter from '../../assests/Scooter.png'
import Bike from '../../assests/Bike.png'
import Car from '../../assests/Car.png'
import Auto from '../../assests/Auto.png'
import Trending from '../../assests/Trending.png'
import Layout from "../../Layout/Layout";

function index() {
  return (
    <div>
         <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-[85vw] m-auto my-[20vh]">
        <VehicleType Img={Bicycle} type="Bicycle"/>
        <VehicleType Img={Scooter} type="Scooter"/>
        <VehicleType Img={Bike} type="Bike"/>
        <VehicleType Img={Car} type="Car"/>
        <VehicleType Img={Auto} type="Auto"/>
        <VehicleType Img={Trending} type="Trending"/>
    </div>
    </Layout>
    </div>
  )
}
export default index