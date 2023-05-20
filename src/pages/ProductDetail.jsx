import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import React from 'react'



const API_URL = 'https://fakestoreapi.com/products'


const ProductDetail = () => {

    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const { productId } = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetch(`${API_URL}/${productId}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data)
                setIsLoading(false)
            });
    }, []);

    return (
        <>

            <div className='row d-flex justify-content-around m-3'>

                {isLoading && <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}
                {!isLoading && (
                   <>
                    <img className='col-sm-12 col-md-4 ' src={product?.image} />


                    <div className=" col-sm-12 col-md-6 text-start">
                        <h2>{product?.title}
                        </h2>
                        <h4>${product.price}</h4>
                        <p>{product?.description}</p>

                        <Link to={'/'} >
                            <button className="btn btn-info">Buy</button>
                        </Link>

                    </div>
                   
                   </>
                )}

            </div>



        </>


    )
}

export default ProductDetail