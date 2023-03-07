import React from 'react'
import Card from '../Card/Card'
import classes from './List.module.css'
import useFetch from '../../hooks/useFetch'
const List = ({categoryID,maxPrice,sort,SubCategories}) => {
 const filter=SubCategories.map(item=>`&[filters][sub_categories][id][$eq]=${item}`).join('')

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryID}${filter}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );  
 
  return (
    <div className={classes.list}>
         {loading?<span className={classes.loader}></span>:data?.map(item=>{
        
            return <Card item={item} key={item.id} which={item.attributes.categories.data[0]}/>
        })}   
           </div>
  )
}

export default List