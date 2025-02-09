import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/home.css";
import { useState } from "react";

export const HomePage = () => {
  return (
    <div className="home-page-div">
      <div className="header-position">
        <p className="logo-name">Shopping Cart</p>
        <div className="link-option">
          <Link to="components/displayProd.jsx">Cart </Link>
        </div>
        <div>Total Items</div>
      </div>
      <div className="navigation-bar">
        <div className="navigation-links">
          <div>
            <Link to="components/differentLinks/SaleProducts">
              Discount Products
            </Link>
          </div>
          <div>
            <Link to="components/differentLinks/AllProducts">All products</Link>
          </div>
          <div>
            <Link to="components/differentLinks/About">About us</Link>
          </div>
        </div>
      </div>
      <div className="content-description">
        <Outlet />
      </div>
      <div className="footer-position">
        <p>footer</p>
      </div>
    </div>
  );
};

export default HomePage;
