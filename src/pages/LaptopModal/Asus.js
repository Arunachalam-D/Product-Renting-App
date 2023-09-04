import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Laptops/Lap4.1.png' 
import img2 from '../../assests/Laptops/Lap4.2.png' 
import img3 from '../../assests/Laptops/Lap4.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="ASUS VivoBook 14" descp='Intel Core i3-1115G4 11th Gen, 14" (35.56 cm) FHD, Thin and Light Laptop (8GB/512GB SSD/MSO21/Win11 Home/Integrated' cost="299" ownerName="Venkateshwar" email="venky@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index