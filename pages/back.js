import React from 'react'
import Link from 'next/link'

function back() {
  return (
    <div className='ml-10 mt-10 text-2xl tracking-wider'>
        <Link href="/" className='bg-teal-600 pl-5 pr-5 pt-2 pb-2 rounded-lg text-white'>back</Link>
    </div>
  )
}

export default back