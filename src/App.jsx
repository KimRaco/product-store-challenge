import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import CategorySection from './components/CategorySection'
import Login from "./pages/login/login"
function App() {


  return (
    <>
      <Navbar />
      <CategorySection/>
      <Routes>

        <Route path='/' element={<><Header /></>} />
        <Route path='/:productId' element={<ProductDetail />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App
