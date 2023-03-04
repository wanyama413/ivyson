import React from 'react'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Error = () => {
  const navigate=useNavigate()
useEffect(()=>{
  setTimeout(()=>{
navigate('.')
  },100)
})
  return (
    <div></div>
  )
}

export default Error