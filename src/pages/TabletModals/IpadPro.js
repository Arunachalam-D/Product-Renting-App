import React from 'react'
import TabInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Tablet/Tab1.1.png' 
import img2 from '../../assests/Tablet/Tab1.2.png' 
import img3 from '../../assests/Tablet/Tab1.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <TabInfo Img1={img1} Img2={img2} Img3={img3} Product="Apple iPad Pro" descp='(Wi-Fi, 256GB) - Space Grey (4th Generation)' cost="199" ownerName="Kishore" email="kishore@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index