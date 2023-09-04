import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/EarphoneAndCharger/Ear3.1.png' 
import img2 from '../../assests/EarphoneAndCharger/Ear3.2.png' 
import img3 from '../../assests/EarphoneAndCharger/Ear3.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="Anker Soundcore R50i" descp='Wireless In-Ear Earbuds (TWS), IPX5-Water Resistant, Clear Calls with Stereo Sound & High Bass, Super Low Latency, Soundcore' cost="149" ownerName="Saravanan" email="saro@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index