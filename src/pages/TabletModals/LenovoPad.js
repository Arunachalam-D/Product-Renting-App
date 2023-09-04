import React from 'react'
import TabInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Tablet/Tab4.1.png' 
import img2 from '../../assests/Tablet/Tab4.2.png' 
import img3 from '../../assests/Tablet/Tab4.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <TabInfo Img1={img1} Img2={img2} Img3={img3} Product="Lenovo M10" descp='2Nd Gen 10.3 Inches (4Gb, 128 Gb, Wi-Fi + Lte, Volte Calling) Tab With Active Pen, Kids Mode With Parental Control, Dolby Atmos Speakers' cost="199" ownerName="Juliot" email="juliot@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index