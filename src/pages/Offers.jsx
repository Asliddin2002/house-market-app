import React, {useContext} from 'react'
import { MarketContext } from '../hooks/UseContext'
import { Link } from 'react-router-dom'
import{FaTimes} from 'react-icons/fa'


function Offers() {
  const{data, deleteItem} = useContext(MarketContext)

  return (  

    <div className="offers container">
      <h3 className='fw-bold mt-4'>Offers</h3>

      { data.length?
        data.map((item)=> {
         return item.offer &&  (
           <div key={item.id} className='item-card  mt-3'>
              <Link className='Card-link d-flex' to={`/category/:categoryName/${item.id}`}>      
            <div className="item-img">
            <img src={item.img1} alt="" className='item-img' />
            </div>
            <div className="item-body ">
                <p className="item-location text-secondary">{item.location}</p>
                <p className='item-title fw-bold'>{item.name}</p>
                <p className="item-price">${item.discountPrice ? item.discountPrice  : item.price } {item.type === "rent" && "/Month"} </p>
                <div className="item-ico d-flex">
                <i className="material-icons">bed</i>
                <p className="icon-name"> {item.bedrooms} Bedrooms</p>
                <i className="material-icons">bathroom</i>
                <p className="icon-name"> {item.bathrooms} Bathrooms</p>
                </div>
            </div>
          
          
          </Link>
            <button onClick={()=> deleteItem(item.id)} className='close'><FaTimes className='text-secondary'/></button>
          </div> 
         )
        }): <h5>Sorry, No items here</h5> 
      }
     
    </div>


  
    
    )
}
  

export default Offers