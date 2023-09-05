import React from 'react'
import CamInfo from '../../shared/ProductInfo'
import img1 from '../../assests/SmartDevices/Smart3.png' 
import img2 from '../../assests/SmartDevices/Smart3.2.png' 
import img3 from '../../assests/SmartDevices/Smart3.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <CamInfo Img1={img1} Img2={img2} Img3={img3} Product="Noise Pulse 2 Max" descp='1.85" Display,bluetooth calling,more than 100 faces and sports mode.' cost="49" ownerName="Mike" email="micky@gmail.com" phone="9898656532"/>
        </Layout>
    </div>
  )
}

export default index