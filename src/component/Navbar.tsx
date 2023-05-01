import React from "react";

const Navbar = () => {
  return (
    <div className="col">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled text-light">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
