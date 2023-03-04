import React from 'react'
import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';
import useFetch from '../hooks/useFetch';
const SubCategories = () => {
    const {ID}=useParams()
   const {data,loading,error}=useFetch(`/sub-categories?[filters][id][$eq]=${ID}`)
  return (
   <>
   {data?.map(item=>{
    return <div key={item.id}>
        <h4>{item.attributes.title}</h4>
    </div>
   })}
   </>
  )
}

export default SubCategories