import React from 'react'
import MobileInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Mobiles/mobile4.png' 
import img2 from '../../assests/Mobiles/mobile4.2.png' 
import img3 from '../../assests/Mobiles/mobile4.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <MobileInfo Img1={img1} Img2={img2} Img3={img3} Product="One Plus Nord CE 3" descp="Stunning One plus Nord in pastel lime with 5000 mAH battery, 8GB RAM and 128 Storage" cost="419" ownerName="Krishna" email="krish@gmail.com" phone="90623409452"/>
        </Layout>
    </div>
  )
}

export default index