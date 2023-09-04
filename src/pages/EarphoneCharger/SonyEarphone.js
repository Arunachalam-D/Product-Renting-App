import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/EarphoneAndCharger/Ear2.1.png' 
import img2 from '../../assests/EarphoneAndCharger/Ear2.2.png' 
import img3 from '../../assests/EarphoneAndCharger/Ear2.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="Sony WH-CH520" descp='Wireless On-Ear Bluetooth Headphones with Mic, Upto 50 Hours Playtime, DSEE Upscale, Multipoint Connectivity/Dual Pairing,Voice Assistant App' cost="199" ownerName="Rajesh" email="raj@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index