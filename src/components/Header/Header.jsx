import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import cart from '../../assets/cart.png'
import logo from '../../assets/logo.jpg'
import Cart from '../Cart/Cart'
import { NavLink } from 'react-router-dom'
import { flipper } from '../../redux/cartReducer'
const Header = () => {
 const isOpen=useSelector(state=>state.cart.open)
 const [open,setOpen]=useState(false)
 const dispatch=useDispatch()
 const scrollToElement= async ()=>{
    document.getElementById('id001').scrollIntoView();
  } 
  
  const[sidebar,setSidebar]=useState(false)
    const products=useSelector(state=>state.cart.products)
 
  const handleSidebar=()=>{
setSidebar(true)
  }
  const handleCart=()=>{
   dispatch(flipper())

  }
  const handleCloseCart=()=>{
    dispatch(flipper(false))
  }
 
  return (
    <header>
      <div className='leftNavbar'>
        <div className='logoContainer'><Link to='/'><img onClick={handleCloseCart} className='logo' src={logo} alt=''/></Link></div>
        
       
         
      </div>
      <div className='center'>
        <ul className='links'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/products/1'>Our Products</Link></li>
          <li><Link to='/products/2'>Our Services</Link></li>
          <li onClick={scrollToElement}><Link>Contact Us</Link></li>
         
        </ul>
      </div>
     
      <div className='rightNavbar'>
       
        <div className='farrightNavbar'>
  
       <div  className='noiContainer'>
     <img onClick={handleCart} className='cart' src={cart} alt=''/>
          <span className='noi'>{products.length}</span>
       </div>
     
        </div>
       {isOpen&&<Cart/>}
      
      </div>
      <div className='logg'>
      <div className='logos'><Link to='/'><img className='logo' src={logo} alt=''/></Link></div>
        <div className='hamburger' onClick={handleSidebar}>
        <div className='firstDiv'></div>
        <div className='secondDiv'></div>
        <div className='thirdDiv'></div>
        </div>
       
      </div>
      {sidebar&&<div className='sidebar'>
<div className='close' onClick={()=>setSidebar(false)}>X</div>
<div >
  <ul className='sidebarBody'  onClick={()=>setSidebar(false) }>
    <li  onClick={handleCloseCart}><Link to='/'>Home</Link></li>
    <li  onClick={handleCloseCart}><Link to='/products/1'>Our Products</Link></li>
    <li  onClick={handleCloseCart}><Link to='/products/2'>Our Services</Link></li>
    <li onClick={()=>dispatch(flipper(true))}><Link to='checkout'>View Cart</Link></li>
    <li  onClick={handleCloseCart}> <NavLink to='https://goo.gl/maps/41dci6PXoMP6WBQUA' target='_blank
    '>Our Location</NavLink></li>
    
  </ul>
  {open&&<Cart/>}
</div>
      </div>
      }
    </header>
  )
}

export default Header