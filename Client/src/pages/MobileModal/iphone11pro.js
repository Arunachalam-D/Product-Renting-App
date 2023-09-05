import React from 'react'
import MobileInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Mobiles/mobile1.png' 
import img2 from '../../assests/Mobiles/mobile1.2.png' 
import img3 from '../../assests/Mobiles/mobile1.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <MobileInfo Img1={img1} Img2={img2} Img3={img3} Product="Iphone11 Pro" descp="Brand new iphone 11 pro with 5000 mAH battery and stunning camera quality" cost="499" ownerName="Rahul" email="rahul@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index