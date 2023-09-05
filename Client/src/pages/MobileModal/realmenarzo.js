import React from 'react'
import MobileInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Mobiles/mobile3.png' 
import img2 from '../../assests/Mobiles/mobile3.2.png' 
import img3 from '../../assests/Mobiles/mobile3.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <MobileInfo Img1={img1} Img2={img2} Img3={img3} Product="Realme Narzo N55" descp="Realme Nrazo N55 with fast charging,super-high-res 64MP camera" cost="419" ownerName="Krishna" email="krish@gmail.com" phone="90623409452"/>
        </Layout>
    </div>
  )
}

export default index