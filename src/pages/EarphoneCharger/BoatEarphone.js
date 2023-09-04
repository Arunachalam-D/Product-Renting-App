import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/EarphoneAndCharger/Ear1.1.png' 
import img2 from '../../assests/EarphoneAndCharger/Ear1.2.png' 
import img3 from '../../assests/EarphoneAndCharger/Ear1.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="
boAt Rockerz 450" descp='Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls' cost="99" ownerName="Kumar" email="kumar@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index