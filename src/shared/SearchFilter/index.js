import React, { useState,useEffect} from 'react'
import { FaSistrix } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
export default function Index({data1}) {

  const list = [
        "Smart Phones",
        "Appliances",
        "Smart Devices",
        "furniture",
        "electronic",
        "fitness",
        "vehicle",
        "lessor",
        "iphone11pro",
        "redmi12c",
        "realmenarzo",
        "oneplus7",
        "zebsmartcam",
        "noisepulse2max",
        "echodot4thgen",
        "echoshow5",
        "Laptops",
        "microsoftsurface",
        "hp255",
        "macbook",
        "asus",
        "boatrockerz",
        "sonyear",
        "earpod",
        "ctypecharger",
        "earphoneandcharger",
        "tablet",
        "honorpad",
        "redmipad",
        "lenovopad",
        "ipadpro"
  ]
  const [Data,setData] = useState(list)
  const [search,setSearch] = useState("")
 
  
 
    const filteredProducts = Data.filter((product) => {
        if (
          product.toLowerCase().includes(search.toLowerCase()) 
        ) {
          return product;
        }
        else return null
      });
      useEffect(()=>{
        if(search !== "" ){
            setData(list)
            
        }
        else if(search === ""){
           
            setData([])
        }
        
      },[search])

  return (
    <div className='flex flex-col search'>
    <div>
     <div className="relative  m-auto">
      <input placeholder="search" className="outline-0 placeholder:font-light w-[90vw] md:w-[50vw] p-1 border border-gray-300 rounded-[10px]"  onChange={(e)=>{setSearch(e.target.value)}}/>
     <span className="absolute icon right-[2vw] text-[#13a6c7d1] top-[1.5vh] md:right-[1vw] md:top-[1.5vh] focus:hidden"><FaSistrix/></span>
    </div>
    </div>
    <div className='text-center flex flex-col z-[100] overflow-y-auto max-h-[10vh]'>
        {filteredProducts.map((data)=>
           <NavLink to={`/${data.toLowerCase().replace(/ /g,"")}`} key={list.indexOf(data)}> <div className='py-2'>
                {data}
            </div></NavLink>
        )}
    </div>
   


    </div>
    
  )
}

