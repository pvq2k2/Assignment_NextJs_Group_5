/* eslint-disable @next/next/no-img-element */
import EmptyLayout from '../components/Layout/empty'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      <div className='text-center'>
      <div className="icon">
      <img src='https://i.postimg.cc/YSXbj3Lp/404-Error-rafiki.png' className="mx-auto w-[500px] relative -top-10" alt='404'/>
      </div>
      <div className="content text-center relative -top-10">
        <h2 className="text-5xl font-bold leading-normal">Page Not Found</h2>
        <p className="py-3">We're sorry, the page you requested could not be found. Please go back to the homepage!</p>
        <button className="bg-blue-500 border text-white mt-5 py-2 px-10 rounded-3xl font-semibold hover:opacity-70">
        <Link href="/" >Go Home</Link>
        </button>
      </div>
    </div>
    </div>
    
  )
}

NotFound.Layout = EmptyLayout
export default NotFound