import React from 'react'

function Cybersecurity() {
    const card = [
        
        
        {
          name: "Ethical Hacking",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
        },
        {
          name: "Cyber security",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
        },
        {
          name: "Hacking",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-data-science.webp",
        },
      ];
    

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

export default Cybersecurity