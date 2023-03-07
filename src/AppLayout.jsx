import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css'
const AppLayout = () => {
  return (
    <div className='appLayout'>
       <Header />
       <Outlet/>
       <Footer/> 
    </div>
  )
}

export default AppLayout