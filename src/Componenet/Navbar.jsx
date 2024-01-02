import React from "react";
import { Link } from "react-router-dom";

function Navbar({ card }) {
 

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-center">
        <Link
          className="navbar-brand"
          to="/"
          
        >
          All
        </Link>
        <Link
          className="nav-link"
          to="/fullstack"
          
        >
          FullStack
        </Link>
        <Link
          className="nav-link"
          to="/datascience"
         
        >
          Datascience
        </Link>
        <Link
          className="nav-link"
          to="/cybersecurity"
         
        >
          Cybersecurity
        </Link>
        <Link
          className="nav-link"
          to="/career"
         
        >
          Career
        </Link>
      </nav>

      <hr />

      <div className="container">
        <div className="row">
          {card.filter((data) => data.all === "all").map((data) => (
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

export default Navbar;
