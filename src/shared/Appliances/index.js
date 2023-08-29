import React from 'react'
import Appliances from '../ProductType'
import TV from '../../assests/TV.png'
import Fridge from '../../assests/Fridge.png'
import Ac from '../../assests/Ac.png'
import Oven from '../../assests/Oven.png'
import Purifier from '../../assests/Purifier.png'
import Stove from '../../assests/Stove.png'
import Utensils from '../../assests/Utensils.png'
import Layout from "../../Layout/Layout";

function index() {
  return (
    
    <Layout>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-[85vw] m-auto my-[20vh] ">
        <Appliances Img={TV} type="Television"/>
        <Appliances Img={Fridge} type="Refrigerator"/>
        <Appliances Img={Ac} type="Airconditioner"/>
        <Appliances Img={Oven} type="Microwave Oven"/>
        <Appliances Img={Purifier} type="Water Purifier"/>
        <Appliances Img={Stove} type="Induction stove"/>
        <Appliances Img={Utensils} type="Utensils"/>
    </div>
    </Layout>
  
  )
}
export default index