import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/home.css";
import { useState } from "react";

export const HomePage = () => {

  const [homeState, setHomeState] = useState(true)

  return (
    <div className="home-page-div">
      <div className="header-position">
        <p className="logo-name">Shopping Cart</p>
        <div className="link-option">
          <Link to="displayProd">Cart </Link>
        </div>
        <div>Total Items</div>
      </div>
      <div className="navigation-bar">
        <div className="navigation-links">
          <div>
            <Link to="SaleProducts">
              Discount Products
            </Link>
          </div>
          <div>
            <Link to="AllProducts">All products</Link>
          </div>
          <div>
            <Link to="About">About us</Link>
          </div>
        </div>
      </div>
      <div className="content-description">

        {homeState === true? <div>Welcome to our Shopping Page</div> : <Outlet />}
      </div>
      <div className="footer-position">
        <p>footer</p>
      </div>
    </div>
  );
};

export default HomePage;
