import React from 'react'
import CamInfo from '../../shared/ProductInfo'
import img1 from '../../assests/SmartDevices/Smart1.png' 
import img2 from '../../assests/SmartDevices/Smart1.2.png' 
import img3 from '../../assests/SmartDevices/Smart1.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <CamInfo Img1={img1} Img2={img2} Img3={img3} Product="Echo DOt 4th Gen" descp='Smart speaker with alexa, can be controlled by voice command and can speak English and Hindi' cost="99" ownerName="Ravi Kumar" email="ravik@gmail.com" phone="7698754321"/>
        </Layout>
    </div>
  )
}

export default index