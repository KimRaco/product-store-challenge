import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'
import { Routes, Route } from 'react-router-dom'


const API_URL = 'https://fakestoreapi.com/products'


const ProductDetail = () => {

    const [ product, setProduct ] = useState([])

    const { productId } = useParams()

    useEffect(() => {
        fetch(`${API_URL}/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setProduct(data)

            });
    }, []);

    return (
        <>
            

                <div className="d-flex container ">

                    <div className='row justify-content-center'>

                        <div className="card col-8 m-3 ">
                            <img src={product?.image} />
                            <h3>{product?.title}
                            </h3>
                            <p>{product?.description}</p>
      
                           <Link to={'/'} >
                            <button className="btn btn-info">Go back</button>
                           </Link>

                        </div>

                    </div>

                </div>

            

        </>


    )
}

export default ProductDetail