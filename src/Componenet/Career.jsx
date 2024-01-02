import React from 'react'

function Career({card}) {
   
    
  return (
    <>
         <div class="container">
        <div class="row">
          {card.filter((data) => data.category === 'Career').map((data) => {
            return (
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="card h-100">
                  <a href="#">
                    <img
                      class="card-img-top"
                      src={data.image}
                      alt={data.name}
                    />
                  </a>
                  <div class="card-body">
                    <h4 class="card-title">
                      <a href="#">{data.name}</a>
                    </h4>
                    <p class="card-text">{data.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
    
  )
}

export default Career