import React, { useState } from 'react'

import classes from './Product.module.css'
import {addCart} from '../../redux/cartReducer'
import {useDispatch} from 'react-redux'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Product = () => {
  const id=useParams().id
  const [selectedImg,setSelectedImg]=useState('img')
  const [quantity,setQuantity]=useState(1)
  const {data,loading,error}=useFetch(`/products/${id}?populate=*`)
 
  const handleIncrement=()=>{
    setQuantity(oldState=>oldState+1)
  }
  const handleDecrement=()=>{
    setQuantity(quantity===1?1:oldState=>oldState-1)
  }
  const dispatch=useDispatch() 
  return (
    <div className={classes.product}>
      <div className={classes.left}>
       <div className={classes.images}>
         <img src={data?.attributes?.img?.data?.attributes?.url} alt='' onClick={e=>setSelectedImg('img')}/>
        <img src={data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={e=>setSelectedImg('img2')}/>
       </div>
        <div className={classes.mainImg}>
          <img src={data?.attributes[selectedImg]?.data?.attributes?.url} alt=''/>
        </div>
      </div>
     <div className={classes.right}>
      <h1>{data?.attributes?.title}</h1>
      <span className={classes.price}>{data?.attributes?.categories?.data[0]?.id===2?<a href='mailto:refrigerationneptune@gmail.com'><button className={classes.add}>Get Quote</button></a>:`Ksh${data?.attributes?.price}`}</span>
      <p>{data?.attributes?.desc}</p>
   {   data?.attributes?.categories?.data[0]?.id===2?'':
   <div className={classes.quantity}>
        <button onClick={handleDecrement}>-</button>
        {quantity}
        <button onClick={handleIncrement}>+</button>

      </div>}
      {data?.attributes?.categories?.data[0]?.id===2?'':
        <button onClick={()=>dispatch(addCart({
        id:data.id,title:data.attributes.title,
        desc:data.attributes.desc,
        price:data.attributes.price,
        img:data.attributes.img.data.attributes.url,
        quantity
      }))} className={classes.add}>
        Add to cart
      
      </button>}
      <div className={classes.link}>
        <div className={classes.item}>
       
        </div>
      </div>
   
     </div>

    </div>
  )
}

export default Product