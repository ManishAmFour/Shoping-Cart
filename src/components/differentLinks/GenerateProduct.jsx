import FetchFakeData from "../cartItems";
import { useEffect, useState } from "react";
import "../../styles/productCard.css";
import CartNumberDisplay from "./CartDisplay";
import js from "@eslint/js";

function GenerateProduct({ list }) {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [value, setValue] = useState(1);
  let cart = JSON.parse(localStorage.getItem("cart")) || [
    { title: "Demo-title", price: "Demo-Price" },
  ];

  useEffect(() => {
    FetchFakeData().then((data) => {
      setProducts(data);
    });
  }, []);

  function updationOfCart(product) {
    if (
      cart.find((element, index) => {
        if (element.title === product.title) {
          return true;
        } else {
          return false;
        }
      })
    ) {
      cart.forEach((element, index) => {
        if (element.title === product.title) {
          element.value += 1;
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      });
      setUpdate(!update);
    } else {
      let NewProduct = {
        title: product.title,
        price: product.price,
        value: 1,
      };
      cart.push(NewProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      setUpdate(!update);
    }
  }

  function ChangingTheInput(e) {}

  return products.map((product) => {
    return list.map((id) => {
      if (product.id === id) {
        return (
          <div className="product-card" key={product.title}>
            <img className="product-image" src={product.image} />
            <p>{product.title}</p>
            <input
              onChange={(e) => {
                console.log(e.target.value);
              }}
              min={0}
              type="number"
            />
            <button
              onClick={() => {
                updationOfCart({
                  title: product.title,
                  price: product.price,
                  id: product.id,
                });
              }}
            >
              Add to Cart
            </button>
            <button>Remove from Cart</button>
            {product.id === 1 ? (
              <CartNumberDisplay />
            ) : product.id === 12 ? (
              <CartNumberDisplay />
            ) : null}
          </div>
        );
      }
    });
  });
}

export default GenerateProduct;
