import React from 'react'
import Card from './Card'
import electronicsimg from '../assets/electronics.png'
import jeweleryimg from '../assets/jewelery.png'
import menimg from '../assets/men_cloth.png'
import womanimg from '../assets/woman_cloth.png'


const categoryList = [{
    category: 'Electronics',
    img:electronicsimg,
    color: 'card mb-3 bg-secondary d-flex',
    path:'/electronics'
},
{
    category: 'Jewelery',
    img:jeweleryimg,
    color: 'card mb-3 bg-primary',
    path:'/jewelery'
},
{
    category: "Men's Clothing",
    img:menimg,
    color: 'card mb-3 bg-dark-subtle',
    path:'/mencloth'
},
{
    category: "Woman's Clothing",
    img:womanimg,
    color: 'card mb-3 bg-success',
    path:'/womancloth'
},]

const CategorySection = () => {
  return (
    <div className='container'>
        <div className='row'>{categoryList.map(category=>{
            return (<Card key={category.path} category={category.category} img={category.img} color={category.color}/>)
        })}
        </div>
    </div>
  )
}

export default CategorySection