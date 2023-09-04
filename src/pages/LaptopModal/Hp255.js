import React from 'react'
import LapInfo from '../../shared/ProductInfo'
import img1 from '../../assests/Laptops/Lap2.2.png' 
import img2 from '../../assests/Laptops/Lap2.3.png' 
import img3 from '../../assests/Laptops/Lap2.1.png' 
import Layout from '../../Layout/Layout'
function index() {
  return (
    <div>
        <Layout>
        <LapInfo Img1={img1} Img2={img2} Img3={img3} Product="HP 255 G8 Laptop" descp="Comes with AMD Athlon Silver 3050U APU/ 4GB Ram/ 256GB SSD/Windows 11/AMD Radeon Vega 8 Mobile Graphics/39.6 cm HD (1366 x 768), SVA" cost="199" ownerName="Vinoth" email="vino@gmail.com" phone="23423409091"/>
        </Layout>
    </div>
  )
}

export default index