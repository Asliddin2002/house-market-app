import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes} from 'react-icons/fa';

function CategoryListItem({item,deleteItem}) {


  return ( <> 
  
    <div className='item-card  mt-3'>
      <Link className='Card-link d-flex' to={`/category/:categoryName/${item.id}`}>
        <div className="item-img">
        <img src={item.img1} alt="" className='item-img' />
        </div>
        <div className="item-body ">
            <p className="item-location text-secondary">{item.location}</p>
            <p className='item-title fw-bold'>{item.name}</p>
            <p className="item-price">${item.discountPrice ? item.discountPrice  : item.price } {item.type === "rent" && "/Month"}</p>
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
  
  </>
    
  )
}

export default CategoryListItem