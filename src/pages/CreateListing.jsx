import React,{useState,useContext} from 'react'
import { MarketContext } from '../hooks/UseContext'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

function CreateListing() {
const navigate = useNavigate();
const{data,setData}= useContext(MarketContext)
const [formData,setFormData]= useState({
    id:uuidv4(),
    bathrooms:1,
    bedrooms:1,
    discountPrice:0,
    furnished:false,
    img1:"",
    location: "",
    name:"",
    offer:false,
    parking:false,
    regularPrice:0,
    type:'rent',
    
})
const{type,bathrooms, bedrooms, discountPrice,furnished,img1,location,name,offer,parking,regularPrice,} = formData

const handleChange =(e) =>{
    setFormData( (prev)=>( {
        ...prev,
        [e.target.id]:e.target.value
}))
// console.log(name)
}

// Btns work function 
const  onMuted = (e)=> {
    let boolean = null;
    if(e.target.value === "true"){
        boolean = true; 
    }
    if(e.target.value === "false"){
        boolean = false; 
    }
    setFormData((prev)=> ({
        ...prev,
        [e.target.id]: boolean ?? e.target.value
    
    }))
}


const handleSubmit = (e) => {
    e.preventDefault();
    setData([formData, ...data])
    // console.log(data)
    // console.log(formData);
    navigate('/profile')
    toast.info("You added a new item to the list")
}


  return (
    <div className='container create-listing-container'>
        <header><h2 className=' mt-4 fw-bold'>Create listings</h2></header>
        <main className='mt-4 '>
            <form onSubmit={handleSubmit} needs-validation >
                
                <div className="left-hand">

                    <div className="sell-rent-wrapper">
                        <label className='fw-bold'>Sell/Rent</label>
                        <div className="sell-rent-btns d-flex">
                            <button type='button' onClick={()=> setFormData({type:"rent"})} className={ type === "rent"? 'btn-sell btn btn-active  ': "btn-sell btn"}>Rent</button>
                            <button type='button' onClick={()=> setFormData({type:"sell"})} className={ type === "sell" ? 'btn btn-rent btn-active ': "btn btn-rent"}>Sell</button>
                        </div>
                    </div>

                    <div className="input-name mt-4">
                    <label className='fw-bold'>Name</label>
                        <input 
                        onChange={handleChange} 
                        value={name} 
                        id='name' 
                        type="text" 
                        className='create-input' required />
                        

                    </div>

                
                        <div className="sell-rent-btns mt-4 d-flex">
                        <div className="bed">
                        <label className='fw-bold'>Bedrooms</label>
                            
                            <input onChange={handleChange} id='bathrooms' type="text" className='bed-input ' required />
                            </div>
                            <div className="bath">
                        <label className='fw-bold'>Bathrooms</label>
                            <input onChange={handleChange} id='bedrooms' type="text" className='bath-input' required />
                            </div>
                      
                        </div>


                    <div className="sell-rent-wrapper mt-4">
                        <label className='fw-bold'>Parking spot</label>
                        <div className="sell-rent-btns d-flex">
                            <button type='button'
                            id='parking'
                            value={true}
                            onClick={onMuted} 
                            className={parking ?'btn-sell btn btn-active ': "btn-sell btn "} >Yes</button>
                            <button type='button'
                            id='parking'
                            value={false}
                            onClick={onMuted}
                             className= { parking ?'btn btn-rent  ':"btn btn-rent btn-active"}>No</button>
                        </div>
                    </div>

                
                </div>

                <div className="right-hand">

                    <div className="input-name mt-4">
                    <label className='fw-bold'>Address</label>
                        <textarea onChange={handleChange} id='location' type="text"  className='create-input' required />
                    </div>

                    
                

                    <div className="sell-rent-wrapper mt-4">
                        <label className='fw-bold'>Offer</label>
                        <div className="sell-rent-btns d-flex">
                            <button type='button'
                            id='offer'
                            value={true}
                            onClick={onMuted} 
                            className= {offer ? 'btn-sell btn btn-active  ':"btn-sell btn"}>Yes</button>
                            <button type='button'
                            id='offer'
                            value={false}
                            onClick={onMuted}
                             className={offer ? "btn btn-rent":'btn btn-rent btn-active '}>No</button>
                        </div>
                    </div>

                    <div className="sell-rent-wrapper mt-4">
                        <label className='fw-bold'>Furnished</label>
                        <div className="sell-rent-btns d-flex">
                            <button onClick={onMuted}  type='button'
                            id='furnished'
                            value={true}
                             className={furnished ? 'btn-sell btn btn-active  ':"btn-sell btn"}>Yes</button>
                            <button onClick={onMuted } type='button'
                            id='furnished'
                            value={false}
                            className={furnished ? "btn btn-rent":'btn btn-rent btn-active '}>No</button>
                        </div>

                    </div>

                    <div className="price-wrapper mt-4">
                    <label className='fw-bold'>Regular Price</label>
                    <div className="price-data">
                        <input onChange={handleChange} id='regularPrice' type="text" className='price-input' required />
                        <div className='fw-bold'>{type==='rent' ? '$/Month': "$"}</div>
                    </div>
                    </div>

                    <div className="price-wrapper mt-4">
                    <label className='fw-bold'>Discount Price</label>
                    <div className="price-data">
                        <input onChange={handleChange} id='discountPrice' type="text" className='price-input'/>
                        <div className='fw-bold'> {type==='rent' ? '$/Month': "$"}</div>
                    </div>
                    </div>

                    <div className="input-name mt-4">
                    <label className='fw-bold'>Images</label> 
                    <span className='img-span'>Please, send only the link address of the images or left it empty.</span>
                        <input onChange={handleChange} id='img1' type="text" className='create-input' />
                    </div>
                </div>    
                    
                

                <div className="container mt-5">
                <button className='btn submit-listing' type='submit'>Create a listing</button>
                </div>

            </form>
            
        </main>
   </div>
  )
}

export default CreateListing