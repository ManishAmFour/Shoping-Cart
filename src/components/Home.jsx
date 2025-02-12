import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/home.css";
import { useState } from "react";

export const HomePage = () => {
  const [homeState, setHomeState] = useState(true);

  


  return (
    <div className="home-page-div">
      <div className="header-position">
        <div className="logo-name">
          <p
            className="logo-p"
            onClick={() => {
              setHomeState(true);
            }}
          >
            Shopping Cart
          </p>
        </div>
        <div
          className="link-option"
          onClick={() => {
            setHomeState(false);
          }}
        >
          <Link to="displayProd">Cart </Link>
        </div>
      </div>
      <div className="navigation-bar">
        <div className="navigation-links">
          <div
            className="navigation-specific-link"
            onClick={() => {
              setHomeState(false);
            }}
          >
            <Link to="SaleProducts">Discount Products</Link>
          </div>
          <div
            onClick={() => {
              setHomeState(false);
            }}
          >
            <Link to="AllProducts">All products</Link>
          </div>
          <div
            onClick={() => {
              setHomeState(false);
            }}
          >
            <Link to="About">About us</Link>
          </div>
        </div>
      </div>

      <div className="content-description">
        {homeState ? (
          <div className="Home-Intro">Welcome To our page</div>
        ) : (
          <Outlet />
        )}
      </div>

      <div className="footer-position">
        <p>footer</p>
      </div>
    </div>
  );
};

export default HomePage;
