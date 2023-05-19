
import React from 'react'
import { CartIcon } from './icons';
import { RemoveFromCartIcon } from './icons';


const ShoppingCart = ({productsInCart, setProductsInCart}) => {

    const removeFromCart = (e) => {
        const newProductsInCart = productsInCart.filter(p => p.id !== e.id)
        setProductsInCart(newProductsInCart)
        
    }

    //total

    let prices = []

    productsInCart.map( p => {
        prices.push(p.price)
        
    })

    const getTotal = prices => {
        return prices.reduce((acum, current) => acum + current, 0)
        
    }

    let total = Math.round(getTotal(prices))
    

    return (
        <>

            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <CartIcon />
            </button>

            <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        productsInCart.map(p =>
                            <React.Fragment key={p.id}>
                                <div className="card mb-3" >
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src={p.image} className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{p.title}</h5>
                                                <p className="card-text"><small className="text-body-secondary">${p.price}</small></p>
                                                <button className="btn btn-danger" onClick={() => removeFromCart(p)}> <RemoveFromCartIcon /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                            </React.Fragment>
                        )
                    }

                </div>
                <div className='d-flex justify-content-around p-3'>

                    <h5>Total to pay: </h5>
                    <p>${total}</p>
                </div>
                    
                    
                    

            </div>
        </>
    )
}

export default ShoppingCart