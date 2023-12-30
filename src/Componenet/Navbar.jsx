import React from "react";
import All from "./All";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          All
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/fullstack">
                FullStack
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/datascience">
                Datascience
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/cybersecurity">
                Cybersecurity
              </Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/career">
                Career
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    
     
    </>
  );
}

export default Navbar;
