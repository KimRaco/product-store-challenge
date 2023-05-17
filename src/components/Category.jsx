import React from 'react'


const Category = ({categories, filterByCategory}) => {

    const handleCategory = (e) => {
        filterByCategory(e.target.value)
    }

    return (
        <div className=" w-25">
            <label  className="form-label">Category</label>
            <select id="select" className="form-select" onChange={handleCategory}>
                <option value='all' >All</option>
                {
                categories.map(cat => <option key={cat} value={cat}>{cat} </option> )
                }
            </select>
        </div>
    )
}

export default Category