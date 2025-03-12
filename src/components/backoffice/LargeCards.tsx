import React from 'react'
import LargeCard from './Cards/largeCards'

export default function LargeCards() {

    const orderStatus =[
        {
            period:"Today Orders",
            sales:252461,
            color:"bg-green-600"
        },
        {
            period:"Yesterday Orders",
            sales:1100000,
            color:"bg-blue-600"
        },
        {
            period:"This Month",
            sales:1858170,
            color:"bg-orange-600"
        },
       
        {
            period:"All-Time Sales",
            sales:33656704,
            color:"bg-green-300"
        }

    ]
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      

      {
        orderStatus.map((item, i) =>{
      
            return(
                <LargeCard  data={item} key={i}/>
            )
      

        })   

    }

    </div>
  )
}
