import React from "react"

export default function Category({name,icon}) {
  return (
    <>
      {/*<!-- Component: Card with icon --> */}
      <div className="overflow-hidden flex flex-col text-green-400 hover:text-black m-auto text-center border border-gray-200  hover:bg-[#8be2efd1] hover:border-[#8be2efd1] transition hover:duration-500 hover:shadow-2xl rounded shadow-md text-slate-500 shadow-slate-200">
        {/*  <!-- Icon --> */}
        <div className="m-auto p-3 text-2xl">
         {icon}
         </div>
        {/*  <!-- Body--> */}
        <div >
          <h3 className="text-sm mb-2 font-normal text-slate-700">{name}</h3>
         
        </div>
      </div>
      {/*<!-- End Card with icon --> */}
    </>
  )
}