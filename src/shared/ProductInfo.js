import React, { useEffect } from "react"
import Glide from "@glidejs/glide"

function ProductInfo({Img1,Img2,Img3,Product,descp,cost,ownerName,email,phone}) {

    useEffect(() => {
        const slider = new Glide(".glide-05", {
          type: "carousel",
          focusAt: "center",
          perView: 3,
        
          animationDuration: 700,
          gap: 24,
          classNames: {
            nav: {
              active: "[&>*]:bg-wuiSlate-700",
            },
          },
          breakpoints: {
            1024: {
              perView: 2,
            },
            640: {
              perView: 1,
            },
          },
        }).mount()
        window.scrollTo({
          top:0,
          left:0,
        
        })
        return () => {
          slider.destroy()
        }
      }, [])
    

  return (
    <div className='grid grid-cols-1 gap-4 m-auto my-[18vh]'>
        <div>
        <div className="glide-05 relative w-[85vw] m-auto">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={Img1}
                className="m-auto max-h-full w-full max-w-full"
                alt="loading..."
              />
            </li>
            <li>
              <img
                src={Img2}
                className="m-auto max-h-full w-full max-w-full"
                alt="loading..."
              />
            </li>
            <li>
              <img
                src={Img3}
                className="m-auto max-h-full w-full max-w-full"
                alt="loading..."
              />
            </li>
           
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='my-5'>Product info</h1>
            <div className='w-[80%] mx-auto bg-gray-200 rounded-[10px]'>
            <h1 className='text-center font-normal text-md pt-3 capitalize  my-2'>Name : {Product}</h1>
            <h1 className='text-center font-normal text-md capitalize mb-5 my-2'>{descp}</h1>
            <h1 className='text-center font-normal text-md capitalize  my-2 bg-gray-600 text-white w-[fit-content] m-auto rounded p-1 px-2'>@ just Rupees.{cost} /day</h1>
            </div>
          <h1 className='mt-16 my-5'>Owner info</h1>
            <div className='w-[80%] mx-auto text-center bg-gray-200 rounded-[10px] py-2 flex flex-col'>
            <h1 className=' font-normal text-md capitalize my-2'>Name : {ownerName}</h1>
            <h1 className='font-normal text-md capitalize my-1'>Email : <span className='lowercase'>{email}</span></h1>
            <h1 className='font-normal text-md  capitalize my-2 mb-5'>Phone no :  {phone}</h1>
            <button className='bg-red-400 text-center m-auto p-1 px-2 rounded text-white'>Rent-it</button>
            </div>

            
        </div>
    </div>
  )
}

export default ProductInfo





