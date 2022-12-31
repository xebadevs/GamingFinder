import React from 'react'
import Footer from '../Wrapper/Footer'
import Navbar from '../Navbar/Navbar'
import error from '../../assets/space-error.png'

export default function Error() {
  return (
    <div>
      <div className='error-cont'>
          <Navbar />
          <h1 className='mt-5'><i>Something went wrong</i></h1>
          <div className="lds-hourglass"></div>
          <div className='error-img-cont'>
            <img src={error} alt="" />
          </div>
      </div>
      <Footer />
    </div>
  )
}