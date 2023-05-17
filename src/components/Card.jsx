import React from 'react'

const Card = () => {
  return (
    <div className="card mb-3" style="max-width: 540px;">
        <div className="row g-0">
          
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="col-md-4">
            <img src="https://picsum.photos/200" className="img-fluid rounded-end" alt="..."/>
          </div>
        </div>
      </div> 
  )
}

export default Card