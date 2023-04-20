import React from 'react'

function Card({description, image, activities}) {
  return (
    <div className='p-8 mt-16 m-auto flex gap-5 justify-center' style={{width:"50%"}}>
        <div className='border p-5 shadow-xl rounded-xl w-96 '>
            <img src={image} style={{width:"400px", height:"300px", margin:"auto"}}/>
            <p className='pt-5'>{description}</p>
        </div>
        <div className='mt-10'>
                {
                    activities.map(activity => (
                        <li className='leading-8'>{activity.name}</li>
                    ))
                }  
        </div>
        
    </div>
  )
}

export default Card