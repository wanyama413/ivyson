import React from 'react'
import Card from '../Card/Card'
import classes from './List.module.css'
import useFetch from '../../hooks/useFetch'
const List = ({categoryID,maxPrice,sort,subCategories}) => {
 
      const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryID}`
  );
       
  return (
    <div className={classes.list}>
         {loading?<span class={classes.loader}></span>:data?.map(item=>{
            return <Card item={item} key={item.id}/>
        })}   
           </div>
  )
}

export default List