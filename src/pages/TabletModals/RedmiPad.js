import React from 'react'
import TabInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Tablet/Tab3.1.png' 
import img2 from '../../assests/Tablet/Tab3.2.png' 
import img3 from '../../assests/Tablet/Tab3.3.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <TabInfo Img1={img1} Img2={img2} Img3={img3} Product="Redmi Pad " descp='MediaTek Helio G99 | 26.95cm (10.61 inch) 2K Resolution & 90Hz Refresh Rate Display | 4GB RAM & 128GB Storage, Expandable up to 1TB' cost="199" ownerName="Dinesh Pandiyan" email="dinesh@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index