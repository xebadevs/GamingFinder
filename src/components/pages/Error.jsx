import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar/Navbar'

export default function Error() {
  return (
    <div className='error-cont'>
        <Navbar />
        <h1 className='mt-5'>Something went wrong</h1>
        <div class="lds-hourglass"></div>
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <Footer />
    </div>
  )
}