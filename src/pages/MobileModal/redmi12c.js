import React from 'react'
import MobileInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Mobiles/mobile2.png' 
import img2 from '../../assests/Mobiles/mobile2.2.png' 
import img3 from '../../assests/Mobiles/mobile2.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <MobileInfo Img1={img1} Img2={img2} Img3={img3} Product="Redmi 12C" descp="Brand new Redmi 12C with 5000 mAH battery ,4GB RAM and 64 GB Storage" cost="359" ownerName="Mahesh" email="mahi@gmail.com" phone="97223409065"/>
        </Layout>
    </div>
  )
}

export default index