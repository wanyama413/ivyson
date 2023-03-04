import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import CheckOut from './pages/CheckOut'
import Error from './pages/Error'
import Home from './pages/Home'
import Product from './pages/Product/Product'
import Products from './pages/Products/Products'
import SubCategories from './pages/SubCategories'

const App = () => {
 
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='products/:id' element={<Products/>}/>
        <Route path='subcategory/:ID' element={<SubCategories/>}/>
      
    <Route path='checkout' element={<CheckOut open={open}/>}/>
        <Route path='product/:id' element={<Product/>}/>
<Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default App