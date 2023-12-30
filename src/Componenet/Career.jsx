import React from 'react'

function Career() {
    const card = [
        
        {
          name: "Ui & UX",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
        },
        {
          name: "Automation Test Engineer",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        },
        {
          name: "Machine Learning Engineer ",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          image:
            "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        }
        
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

export default Career