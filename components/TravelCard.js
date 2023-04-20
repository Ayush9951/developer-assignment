import React from 'react'

import Image from 'next/image'

function TravelCard() {
  return (
    <div className='bg-white rounded-xl p-5' style={{width:"560px", height:"176px"}}>
        <h1 style={{fontSize:"24px", fontWeight:"bold"}}>Ayush Gupta</h1>
        <p>Guide since 2023</p>
        <button className='border pl-5 pr-5 pb-2 pt-2  text-teal-600 font-bold border-1 rounded-lg border-teal-600 mt-10'>Contact</button>
        <Image
            src="/images/guide.png"
            width={120}
            height={120}
            alt='guide'
            className='float-right relative bottom-12'
        />
    </div>
  )
}

export default TravelCard