import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom';
import { Home, About, Blog, BlogDetails, CarDetails, CarListing, NotFound, Contact} from '../pages/index';

const Routers = () => {
  
  return <Routes>
      <Route path='/' element={<Navigate to="/home"/>} />   
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/cars' element={<CarListing />} />
      <Route path='/cars/:slug' element={<CarDetails />} />
      <Route path='/blogs' element={<Blog />} />
      <Route path='/blogs/:slug' element={<BlogDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
}

export default Routers