import React from 'react'
import CamInfo from '../../shared/ProductInfo'
import img1 from '../../assests/SmartDevices/Smart4.png' 
import img2 from '../../assests/SmartDevices/Smart4.2.png' 
import img3 from '../../assests/SmartDevices/Smart4.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <CamInfo Img1={img1} Img2={img2} Img3={img3} Product="Zebronics Smart Cam" descp="Automation wigi camera with remote monitoring,night mode and works with android and ios." cost="99" ownerName="Sam" email="sam@gmail.com" phone="9867412121"/>
        </Layout>
    </div>
  )
}

export default index