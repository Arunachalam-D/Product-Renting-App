import React from 'react'
import CamInfo from '../../shared/ProductInfo'
import img1 from '../../assests/SmartDevices/Smart2.png' 
import img2 from '../../assests/SmartDevices/Smart2.2.png' 
import img3 from '../../assests/SmartDevices/Smart2.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <CamInfo Img1={img1} Img2={img2} Img3={img3} Product="Echo show 5" descp="2nd Gen Smart speaker with HD screen, crisp sound and alexa" cost="150" ownerName="Balu" email="balu@gmail.com" phone="3727662716"/>
        </Layout>
    </div>
  )
}

export default index