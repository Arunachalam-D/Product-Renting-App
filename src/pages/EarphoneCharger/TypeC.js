import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/EarphoneAndCharger/charge1.1.png' 
import img2 from '../../assests/EarphoneAndCharger/charge1.2.png' 
import img3 from '../../assests/EarphoneAndCharger/charge1.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="boAt Type C Charger" descp='20W Super Fast Type C Charger | Compatible with All iPhones/Android Devices/Tablets' cost="49" ownerName="Praveen" email="raj@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index