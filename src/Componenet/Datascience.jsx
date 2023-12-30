import React from 'react'

function Datascience() {
    const card = [
        
        
        {
          name: "Data Science ",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"
        },
        {
          name: "Machine Learning",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp"
        },
        {
          name: "Artificial Intelligence",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Install-Adobe-XD-on-Windows-A-Step-by-Step-Guide.webp"
        }
      ]
  return (
    <>
       <div class="container">
        <div class="row">
          {card.map((data) => {
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

export default Datascience