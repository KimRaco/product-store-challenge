import React from 'react'
import { useState, useEffect } from 'react';
import { AddToCartIcon } from './icons';
import './products.css'
import { Link } from 'react-router-dom';


const Products = ({products, addProductToCart}) => {



    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-4 p-4">
                {
                    products.slice(0, 20).map(product =>
                        <React.Fragment key={product.id} >
                            <div className="col ">
                                <div className="card h-100 d-flex justify-content-center align-items-center p-3">
                                    <Link to={`${product.id}`}><img src={product?.image} className="card-img-top w-25 " alt="..." /></Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p>${product.price}</p>
                                        <button className='mt-4 btn btn-warning'
                                        onClick={() => {
                                            addProductToCart(product)
                                        }} >
                                            <AddToCartIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        </>
    )
}

export default Products