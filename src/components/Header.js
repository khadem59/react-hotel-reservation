import React from "react";
import { NavLink } from "react-router-dom";
import mylogo from "../assets/img/mylogo.jpg";

const Header = () => {
  return (
    <div className="background1">
    <section className="header">
      <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={mylogo} className="img-fluid mylogo" alt="" />
          </NavLink>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/">
                  صفحه اصلی
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/about">
                  درباره ما
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/rooms">
                  اتاق های ما
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/restauran">
                 رستوران 
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/roomreservation">
                 رزرو اتاق 
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/restauranreservation">
                  سفارش غذا
                </NavLink>
              </li>
              <li className="nav-item ms-4">
                <NavLink className="nav-link text-dark" to="/contact">
                  تماس با ما
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    </div>
  );
};

export default Header;
