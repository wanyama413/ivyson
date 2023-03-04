import React from 'react'
import { loadStripe } from "@stripe/stripe-js";
import classes from './Cart.module.css'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {makeRequest} from '../../makeRequest'
import {removeItem,resetCart} from '../../redux/cartReducer'
// import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const Cart = () => {

  const dispatch=useDispatch()
  const products=useSelector(state=>state.cart.products)
  const totalAmount=()=>{
    let total=0
    products.forEach(item=>total+=item.quantity*item.price)
    return total.toFixed(2)
  }
  const stripePromise = loadStripe(
    "pk_test_51Mf6JzHlDfEnHgXvMbLT9VsbZimdlh46qHm0eXnQQabQmp21oeXy41Z606JlLSOM3qwTUwLw8EM7lk6VJLLbEK0d009IQiMa1l"
  );
   const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) { 
      console.log(err);
    }
  };
  return (
    <div className={classes.cart}>
      <h1>Products in your cart</h1>
      {products?.map((item)=>{
    return    <div className={classes.item} key={item.id}>
          <img src={item?.img} alt=''/>
          <div className={classes.details}>
            <h1>{item?.title}</h1>
            <p>{item?.desc?.substring(0,70)}</p>
            <div className={classes.price}>{item?.quantity} x {item?.price}</div>
          </div>
          <div  className={classes.delete} onClick={()=>dispatch(removeItem(item.id))}>x</div>
 
        </div>
      })}
     <div className={classes.total}>
      <span>SUBTOTAL</span>
      <span>Ksh.{totalAmount()}</span>
     </div>
     <button onClick={handlePayment} className={classes.checkBtn}>PROCEED TO CHECKOUT</button>
     <span className={classes.reset} onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart