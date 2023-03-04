import React from 'react'
import Cart from '../components/Cart/Cart'
import { useSelector } from 'react-redux'
const CheckOut = () => {
    
 const isOpen=useSelector(state=>state.cart.open)
  return (
    <div className='cartphone'>{isOpen&&<Cart/>}</div>
  )
}

export default CheckOut