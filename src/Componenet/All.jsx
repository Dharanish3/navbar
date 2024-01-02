import React from "react";

function All({card}) {
  

  return (
    <>
       <div className="container">
        <div className="row">
          {card.map((data) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={data.name}>
              <div className="card h-100">
                <a href="#">
                  <img
                    className="card-img-top"
                    src={data.image}
                    alt={data.name}
                  />
                </a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="#">{data.name}</a>
                  </h4>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default All;
