// import {Carousel} from './carousel.jsx'
// import React from "react" ;
import {FaHome, FaRestroom, FaMale} from "react-icons/fa";



export function Hero (){
    return(
        <div className="flex relative h-screen bg-[url(https://a0.muscache.com/im/pictures/miso/Hosting-50990335/original/2b0b68f9-b54c-42e4-b260-205a4e166217.jpeg?im_w=720)] bg-no-repeat bg-cover ">
            <div className="absolute inset-0 bg-[#11243a] bg-opacity-40 px-14 py-32 w-full">

              <div className="w-full text-center ">
                <h1 className="text-6xl capitalize font-bold mb-12 text-white ">recherche appartement ou maison</h1>
                <p className="text-white text-lg mb-14 mx-40">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, necessitatibus, dolorum ratione porro corrupti repellat officiis quis, odio veniam dolore odit.
                    Exercitationem, nulla corporis quis odio quibusdam fuga labore veniam.    
                </p>

                <div className='flex  bg-amber-300 mx-40 items-center rounded-md p-2'>
                  <div className="grid grid-cols-3 gap-1 text-lg w-[90%]  capitalize">
                  <div className="flex justify-center items-center bg-white px-6 py-1 rounded-md ">
                    
                    <FaHome className="text-teal-800 text-2xl"/>
                    {/* <p className="ml-3">maison</p> */}
                    <select name="" id="" className="ml-3 outline-none p-4">
                      <option value="">Yaoundé</option>
                      <option value="">Douala</option>
                    </select>
                  </div>

                  <div className="flex justify-center items-center bg-white px-6 py-1 rounded-md ">
                    <FaHome className="text-teal-800 text-2xl"/>
                    {/* <p className="ml-3">maison</p> */}
                    <select name="" id="" className="ml-3 outline-none p-4 ">
                      <option value="">Maison</option>
                      <option value="">appartement</option>
                    </select>
                  </div>

                  <div className="flex justify-center items-center bg-white px-6 py-1 rounded-md ">
                    <FaMale/>
                    <p className="ml-3"> Nombre de pièces</p>
                  </div>
                  </div>

                  <div className="pl-1">
                  <button className="bg-blue-600 text-white px-4 py-4 text-xl rounded-md capitalize shadow-md">rechercher</button>
                  </div>
                </div>
              </div>
{/* 
              <div className="w-[50%]">
              </div> */}

            </div>
        </div>
    )
}