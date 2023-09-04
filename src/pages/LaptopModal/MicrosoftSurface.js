import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Laptops/Lap1.3.png' 
import img2 from '../../assests/Laptops/Lap1.2.png' 
import img3 from '../../assests/Laptops/Lap1.1.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="Microsoft Surface Go" descp="Intel Core i5 12.4 inches Business, Gaming Laptop (Touchscreen, 2880x1920, 8GB Memory, Windows 10 S, 256GB SSD, Platinum, 1.11 kg)" cost="799" ownerName="Harish" email="hari@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index