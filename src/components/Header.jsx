
import React from 'react'
import PriceRange from './PriceRange'
import Category from './Category'
import Products from './Products'
import { useState, useEffect } from 'react'
import Footer from './Footer'
import ShoppingCart from './ShoppingCart'

const CATEGORIES_URL = "https://fakestoreapi.com/products/categories/"
const API_URL = "https://fakestoreapi.com/products"

const Header = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [minPrice, setMinPrice] = useState(0)

  useEffect(() => {
    doFetch(CATEGORIES_URL, setCategories)
    doFetch(API_URL, setProducts)
  }, []);

  const doFetch = async (URL, setter) => {
    const resp = await fetch(`${URL}`);
    const data = await resp.json();
    setter(data)
  }

  const filterByCategory = (category) => {
    if (category === 'all') {
      doFetch(API_URL, setProducts)
    } else {

      const NEW_URL = "https://fakestoreapi.com/products/category/" + category;
      doFetch(NEW_URL, setProducts)
    }
  }

  let filteredProducts = []

  const filterByPrice = (minPrice) => {
    setMinPrice(minPrice)
    products.map(product => {
      if ( product.price < minPrice ) {
        filteredProducts.push(product)
        setProducts(filteredProducts)
        
      }
      
    })


  }

  const [ productsInCart, setProductsInCart] = useState([])

  const addProductToCart = (product) => {
    
    setProductsInCart(product)
    console.log(productsInCart)
  };

  return (
    <header>

      <h1 className='mt-3'>Shopping Cart</h1>
      <ShoppingCart />
      <PriceRange filterByPrice={filterByPrice} minPrice={minPrice} />
      <Category categories={categories} filterByCategory={filterByCategory} />
      <Products products={products} addProductToCart={addProductToCart}/>
      
    </header>
  )
}

export default Header