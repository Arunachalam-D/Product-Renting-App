import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Laptops/Lap3.2.png' 
import img2 from '../../assests/Laptops/Lap3.1.png' 
import img3 from '../../assests/Laptops/Lap3.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="Apple Macbook Air" descp="M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID." cost="799" ownerName="Arun" email="arun@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index