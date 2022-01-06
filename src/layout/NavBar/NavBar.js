import React from "react";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-md py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            Recipe Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-start">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/food">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/addRecipe">
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/favourites">
                  Favourites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/profile">
                  Profile
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link fw-bold" to="/favourites">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/favourites">
                  Register
                </Link>
              </li> */}
              <div className="px-3">
              <Avatar name="Wim Mostmans" size="40" round={true} />
              </div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
