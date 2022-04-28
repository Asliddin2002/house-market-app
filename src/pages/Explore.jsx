import React from 'react'
import HomeCarousel from './HomeCarousel'
import { Link } from 'react-router-dom'
import { RentHome, RentHome2 } from '../components/assests/GoogleLogo'


function Explore() {


  return (
      <div className='explore container'>
      <header className='mt-4'  >
      <h3 className='fw-bold'> Explore</h3>  
      </header>
      <div >
        <HomeCarousel/>
      </div>
      <div className="main mt-4">
        <p className='fw-bold'>Categories</p>
        <div className="exploreCatigories d-flex">
          <Link className='leftLink link' to={`/category/rent`}>
          <img className='rentHomeimg' src={RentHome} alt="" />
          <p className='fw-bold category-name'>Places for rent</p>
          </Link>
          <Link className='link' to={`/category/sell`}>
          <img className='rentHomeimg2' src={RentHome2} alt="" />
          <p className='fw-bold category-name'>Places for sale</p>
          </Link>
        </div>
      
      </div>
      
    </div>

    )
    
      
  
    
}

export default Explore