import React from 'react'
import { useId } from 'react'
import { useState } from 'react'
//import { useFilters } from '../hooks/useFilters.js'


const Filters = ({filterByPrice, minPrice}) => {

    
  
    const handleChangeMinPrice = (e) => {
        filterByPrice(e.target.value)
    }

    

    return (
      <section className='filters'>
  
        <div>
          <label>Price range:</label>
          <input
            className='m-2'
            type='range'
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
          />
            <span>${minPrice}</span>
        </div>
  
      </section>
  
    )
  
}

export default Filters