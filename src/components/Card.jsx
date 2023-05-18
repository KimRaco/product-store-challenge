import React from 'react'
import Button from './Button'
import './card.css'

const Card = ({category, img, color}) => {

  return (
    <div className='col-md-6'>
      <div className={color}>
        <div className="row g-0">  
          <div className="col-md-8">
            <div className="card-body text-start">
              <h3>Category</h3>
              <h1 className="card-title text-white">{category}</h1>
              <Button/>
            </div>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <img src={img} className="img-fluid rounded-end" alt="..."/>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Card