import React, { useState } from 'react'
import classes from './Products.module.css'
import { useEffect } from 'react'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import { makeRequest } from '../../makeRequest'

const Products = () => {
 const [myData,setMyData]=useState([])

  const categoryID=parseInt(useParams().id)
 const [maxPrice,setMaxPrice]=useState(80000)
 const [sort,setSort]=useState('desc')
const [selectedSubCategories,setSelectedSubCategories]=useState([])
const url=  `/sub-categories?[filters][categories][id][$eq]=${categoryID}`
useEffect(() => {
  const fetchProducts = async () => {
   try {
   
    const response = await makeRequest.get(
    url
    );
    setMyData(response.data.data);
   } catch (err) {
    console.log(err)
   }
 
  };
  fetchProducts();
 }, []);
const handleChange=(e)=>{
  let value=e.target.value
  const isChecked=e.target.checked
  setSelectedSubCategories(isChecked?[...selectedSubCategories,value]:selectedSubCategories.filter(item=>item!==value))
 
}



  return (
    <div className={classes.products}>
       <div className={classes.left}>
        <div className={classes.filterItem}>
          <h2>Product Categories</h2>
          {myData.map(item=>{
            return  <div key={item.id} className={classes.inputItem}>
            <input value={item.id} id={item.id} type='checkbox' onChange={handleChange}/><label htmlFor={item.id}>{item.attributes.title}</label>
          </div>
          })}
         
         
          
        </div>
        <div className={classes.filterItem}>
          <h2>Filter by price</h2>
           <div className={classes.inputItem}>
            <span>0</span><input type='range' min
            ={0} max
            ={80000}
            onChange={e=>setMaxPrice(e.target.value)}/> <span>Ksh.{maxPrice}</span>
          </div>
        </div>
        <div className={classes.filterItem}>
          <h2>Sort by</h2>
           <div className={classes.inputItem}>
            <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/> <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
           <div className={classes.inputItem}>
            <input type='radio' id='desc' value='desc' name='price' onChange={e=>setSort('desc')}/> <label htmlFor='desc'>Price (Highest first)</label>
          </div>
        </div>
      </div>
           
      <div className={classes.right}>
        <List SubCategories={selectedSubCategories} categoryID={categoryID} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products