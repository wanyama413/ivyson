import Card from '../Card/Card'
import classes from './FeaturedProducts.module.css'
import useFetch from '../../hooks/useFetch'
import React from 'react'
const FeaturedProducts = ({type}) => {
    
 const {data,loading,error}=useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)  
       
  return (
    <div className={classes.featuredproducts}>
        <div className={classes.top}>
          
            <h1 className={classes.tite}>{type} products</h1>
            
        </div>
        <div className={classes.bottom}>
            {loading?<span className={classes.loader}></span>:data?.map(item=>{
                return <Card item={item} key={item.id}/>
            })} 
        </div>
    </div>
  )
}

export default FeaturedProducts