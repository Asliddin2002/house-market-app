import React, {useContext} from 'react'
import SwiperCore, {Navigation, Pagination,Scrollbar,A11y}from 'swiper'
import  {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/swiper-bundle.css"
import { MarketContext } from '../hooks/UseContext'
import { useNavigate } from 'react-router-dom'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function HomeCarousel() {
    const{data} = useContext(MarketContext)
    const navigate = useNavigate()


  return (
    <div>
        <Swiper slidesPerView={1} pagination={{clickable:true}}>
        {data.map((item)=>(
               <SwiperSlide onClick={()=> navigate(`/category/${item.type}/${item.id}`)} className='carousel' key = {item.id}>
                <img className='carousel-img' src={item.img1} alt="" />
               </SwiperSlide>
            
        
    ))}
    </Swiper>
        
    </div>
  )
}

export default HomeCarousel