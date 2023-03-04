import React, { useState } from 'react'
import classes from './Products.module.css'

import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import productss from '../../assets/products.jpeg'
const Products = () => {
 
  const categoryID=parseInt(useParams().id)
 const [maxPrice,setMaxPrice]=useState(80000)
 const [sort,setSort]=useState(null)
const [selectedSubCategories,setSelectedSubCategories]=useState([])
const handleChange=(e)=>{
  const value=e.target.value
  const isChecked=e.target.checked
  setSelectedSubCategories(isChecked?[...selectedSubCategories,value]:selectedSubCategories.filter(item=>item!==value))
}

const {data,loading,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${categoryID}`)

  return (
    <div className={classes.products}>
     
           
      <div className={classes.right}>
        <List SubCategories={selectedSubCategories} categoryID={categoryID} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products