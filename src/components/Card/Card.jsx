import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Card.module.css'
const Card = ({item,which}) => {
  return (
    <Link to={`/product/${item.id}`}>
    <div className={classes.card}>
        <div className={classes.image}>
            {item?.attributes?.inStock?<span className={classes.span}>In stock</span>:<span className={classes.span}>Sold out</span>}
            <img src={item?.attributes?.img?.data?.attributes?.url} alt='' className={classes.mainImg}/>
        </div>
        <h2 className={classes.title}>{item?.attributes?.title}</h2>
        <div className={classes.prices}>
            
            <h3>{which?.id===2?'':`Ksh.${item?.attributes?.price}`}</h3>
        </div>
    </div>
    </Link>
  )
}

export default Card