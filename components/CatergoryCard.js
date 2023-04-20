import React from 'react'

import Image from 'next/image'

function CatergoryCard({name}) {
  return (
    <div className='bg-white rounded-lg mb-2' style={{width:"544px", height:"68px"}}>
        <h1 className='relative left-5 top-5'>{name}</h1>
        <div className='float-right relative right-5 top-1'>
          <Image
            src="/images/arrow.png"
            width={12}
            height={12}
            alt='arrow'
          />
        </div>
    </div>
  )
}

export default CatergoryCard