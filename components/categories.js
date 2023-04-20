import React from 'react'
import catergoryData from './catergoryData'
import CatergoryCard from "./CatergoryCard"
import TravelCard from './TravelCard'

function Categories() {
  return (
    <div className='mt-24 flex gap-8' style={{backgroundColor:"#E6F2F2", height:"528px"}}>
        <div className='pl-40 pt-9'>
            <h1 className='mb-2'>Categories</h1>
            {
              catergoryData.map(category => (
                <CatergoryCard name={category.name}/>
              ))
            }
        </div>
        <div className='pt-9'>
          <h1 className='mb-2'>Travel Guide</h1>
          <TravelCard />
        </div>
    </div>
  )
}

export default Categories