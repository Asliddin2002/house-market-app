import React,{ useContext} from 'react'
import { useParams } from 'react-router-dom'
import {MarketContext} from '../hooks/UseContext'
import { FaInstagram, FaTelegram,FaPhone } from 'react-icons/fa';
import SwiperCore, {Navigation, Pagination,Scrollbar,A11y}from 'swiper'
import  {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/swiper-bundle.css"
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

function ListItem() {
    const {listingId} = useParams();
    const{data} = useContext(MarketContext);
    
  return (
    <>{
        data.filter((card) =>card.id ===listingId).map ((item,id)=> (
            
            <div className='Listings' key={id}>
                <div  className="container-fluid mt-3">
                    <Swiper slidesPerView={1} pagination={{clickable:true}}>
                        <SwiperSlide key = {id}>
                    <img className='listing-img' src={item.img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide key = {id}>
                    <img className='listing-img' src={item.img2} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="container mt-3 mb-2">
                    <h5 className="card-name">{item.name} - ${item.regularPrice} ✔</h5>
                    <p className="card-ocation">{item.location} ✔</p>
                    <div className="card-badge  d-flex ">
                    <span class="badge rounded-pill bg-warning ">{item.type ==="rent" ? "For Rent": "For Sale"}</span>
                    <span class="badge rounded-pill bg-dark">$ {item.discountPrice}</span>
                    </div>
                    <p className="card-bed">{item.bedrooms} Bedrooms ✔</p>
                    <p className="card-bath">{item.bathrooms} Bathrooms ✔</p>
                    <p className="card-bath">{item.furnished ? "Furnished": "Not Furnished"} ✔</p>
                    <p className="card-parking">{item.parking ? "Parking Spot" : "No Parking Spot"} ✔</p>
                    
                    <h5 className="card-name mt-4 ">Contact</h5>
                </div>
                <div className="contact mt-3">
        
                    <div className="contact-box  ">
                        <a href="https://t.me/Kholturaev_A"><FaTelegram/></a>
                    </div>
                    <div className="contact-box">
                        <a href="https://instagram.com/kholturaev_asliddin_"><FaInstagram className='text-warning'/></a>
                    </div>
                    <div className="contact-box"> 
                    <a href="+998995565867"><FaPhone className='text-success'/></a></div>
                </div>
            </div>
            
          

        ))
    }
        
    </>
  )
}
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default ListItem