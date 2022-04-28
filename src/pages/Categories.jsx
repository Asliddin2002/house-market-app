import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import { MarketContext } from '../hooks/UseContext'
import CategoryListItem from './CategoryListItem'


function Categories() {
  const {data,deleteItem} = useContext(MarketContext)
  const {categoryName} = useParams()

  return (
    <div className='container Categories'>
      <header className='mt-4 '>
       <h3>Places for {categoryName ==='rent' ? 'rent': 'sell'  }   </h3> 
      </header>
      { data.length ?
    data.filter((items)=> items.type === categoryName ).map((item)=> (
      
      <CategoryListItem item={item} deleteItem={deleteItem} key={item.id}/>
    )):<h5>Sorry, No items here</h5>  
    }</div>
  )
}

export default Categories