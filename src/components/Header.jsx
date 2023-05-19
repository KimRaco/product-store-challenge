
import React from 'react'
import PriceRange from './PriceRange'
import Category from './Category'
import Products from './Products'
import { useState, useEffect } from 'react'
import ShoppingCart from './ShoppingCart'
import './header.css'
import CategorySection from './CategorySection'

const CATEGORIES_URL = "https://fakestoreapi.com/products/categories/"
const API_URL = "https://fakestoreapi.com/products"

const Header = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [maxPrice, setMaxPrice] = useState(0)
  const [priceFilter, setPriceFilter] = useState([])
  const [ productsInCart, setProductsInCart] = useState([])
  const [isLoading, setIsLoading] = useState(false);

//Fetch

  useEffect(() => {
    doFetch(CATEGORIES_URL, setCategories)
    doFetch(API_URL, setProducts)
    setIsLoading(true)
  }, []);

  const doFetch = async (URL, setter) => {
    const resp = await fetch(`${URL}`);
    const data = await resp.json();
    setter(data)
    setIsLoading(false)
  }

 //Filter By Category

  const filterByCategory = (category) => {
    if (category === 'all') {
      doFetch(API_URL, setProducts)
    } else {

      const NEW_URL = "https://fakestoreapi.com/products/category/" + category;
      doFetch(NEW_URL, setProducts)
    }
  }

  //Filter By Price

  const filterByPrice = (maxPrice) => {
    setMaxPrice(maxPrice)

    let filteredProducts = products.filter(product => product.price < maxPrice )
    setPriceFilter(filteredProducts)

  }

  //Shopping Cart

  const addProductToCart = (product) => {
    setProductsInCart( Array.from(new Set ([...productsInCart, product])))
  };

  
  

  return (
    <header>
      <CategorySection/>
      <h1 className='m-3'>Best Seller Products</h1>
      <span className='mt-4 d-flex justify-content-around  align-items-center'>
        <PriceRange filterByPrice={filterByPrice} maxPrice={maxPrice} />
        <Category categories={categories} filterByCategory={filterByCategory} />
        <ShoppingCart productsInCart={productsInCart} setProductsInCart={setProductsInCart}/>

      </span>
      {isLoading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
        {!isLoading && (
          <>
            <Products products={priceFilter.length > 0  ? priceFilter : products} addProductToCart={addProductToCart}/>
            
          </>
        )}
      
    </header>
  )
}

export default Header