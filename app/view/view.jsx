import Link from 'next/link'
import React from 'react'

export default function View() {
  return (
    <div>
        <ul className='flex justify-center text-lg w-4xl m-auto'>
          <li className='flex-1 cursor-pointer bg-green-100 p-3 text-center'><Link href="/" className='w-full '>Today</Link></li>
          <li className='flex-1 cursor-pointer bg-green-100 p-3 text-center border-r-1 border-l-1 border-gray-400'><Link href="/" className='w-full '>Pending</Link></li>
          <li className='flex-1 cursor-pointer bg-green-100 p-3 text-center'><Link href="/" className='w-full '>Done</Link></li>
        </ul>
    </div>
  )
}
