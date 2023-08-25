import React from "react"
import Arun from '../assests/DP.png'
import Jaswanth from '../assests/Man2.png'

export default function Creators() {
  return (
    <div className="bg-black">
      <div>
        <h1 className="text-white  text-left ml-10 pt-10">From the Creators</h1>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-[10vh]">      
    {/*<!-- Arun--> */}
      <div className="flex  w-[80vw] md:w-[40vw] py-[5vh] m-auto flex-col overflow-hidden bg-white rounded shadow-xl text-slate-500 sm:flex-row">
    
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src={Arun}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                Arunachalam
              </h3>
              <p className="text-sm text-slate-400"> Frontend Developer - Novastrid</p>
            </div>
          </header>
          
          <p>
          "Can we use the product we love without owning them, making it a profitable option for both the provider and consumer? ". As a answer to this question we designed Rent-it.
          </p>
        </div>
      </div>

      <div className="flex w-[80vw] md:w-[40vw] py-[5vh] m-auto flex-col overflow-hidden bg-white rounded shadow-xl text-slate-500  sm:flex-row">
    
        <div className="flex-1 p-6 sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
            >
              <img
                src={Jaswanth}
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">
                Jaswanth Kumar
              </h3>
              <p className="text-sm text-slate-400"> Frontend Developer - Novastrid</p>
            </div>
          </header>
          <p>
            Renting a product makes the product reusable and allows the person to use number of products at a cost very much lesser compared to owning one.Then why go for  a buy when we can rent.
          </p>
        </div>
      </div>
      </div>

    </div>
  )
}
