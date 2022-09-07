import { useEffect, useState } from 'react'

import { Routes ,Route } from 'react-router-dom'
import AdminLayout from './page/layout/AdminLayout'
import "bootstrap/dist/css/bootstrap.min.css" 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WebsiteLayout from './page/layout/WebsiteLayout';
import HomeProducts from './components/home/HomeProducts';
import { Product } from './types/Product';

import HomePage from './components/home/HomePage';
import ProductDetailPage from './components/ProductDetailPage';
import ProductsList from './page/admin/ProductsList';

function App() {

  return (
    <div className="App">

      <Routes>
          <Route path="/" element={<WebsiteLayout/>}>
          <Route index element ={<HomePage/>}/>
          <Route path="san-pham/:id" element={<ProductDetailPage />} />
          </Route>
            <Route path="/admin" element={<AdminLayout/>}>
            <Route index element ={<ProductsList/>}/>
            </Route>
      </Routes>
    </div>
  )
}

export default App
