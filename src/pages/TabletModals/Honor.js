import React from 'react'
import TabInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Tablet/Tab2.1.png' 
import img2 from '../../assests/Tablet/Tab2.2.png' 
import img3 from '../../assests/Tablet/Tab2.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <TabInfo Img1={img1} Img2={img2} Img3={img3} Product="HONOR Pad X9" descp='Free Flip-Cover 11.5-inch (29.21 cm) 2K Display, Snapdragon 685, 7GB (4GB+3GB RAM Turbo), 128GB Storage, 6 Speakers' cost="149" ownerName="Baskar" email="bass@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index