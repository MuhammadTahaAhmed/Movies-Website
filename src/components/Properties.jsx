import React from 'react'
import disney from "./../assets/Images/disney.png"
import marvel from "./../assets/Images/marvel.png"
import nationalG from "./../assets/Images/nationalG.png"
import pixar from "./../assets/Images/pixar.png"
import starwar from "./../assets/Images/starwar.png"

import disneyv from "./../assets/videos/disney.mp4"
import marvelv from "./../assets/videos/marvel.mp4"
import nationalGeographicv from "./../assets/videos/national-geographic.mp4"
import pixarv from "./../assets/videos/pixar.mp4"
import starwarv from "./../assets/videos/star-wars.mp4"




function Properties() {
    const productionHouseList =[
        {
            id:1,
            image:disney,
            video:disneyv
        },
        {
            id:2,
            image:marvel,
            video:marvelv

        },
        {
            id:3,
            image:nationalG,
            video:nationalGeographicv
        },
        {
            id:4,
            image:pixar,
            video:pixarv
        },
        {
            id:5,
            image:starwar,
            video:starwarv

        },
    ]
  return (
    <div className='flex gap-2  md:gap-5 p-2 px-5 md:px-16'>
      {
        productionHouseList.map((item,i)=>(
          <div className='border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out
           cursor-pointer relative shadow-xl shadow-gray-800'>
            <video src={item.video} autoPlay loop playsInline className='
            absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50 '/>
            <img src={item.image} className='w-full'/>
          </div>
        ))
      }
    </div>
  )
}

export default Properties
