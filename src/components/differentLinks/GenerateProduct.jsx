import FetchFakeData from "../cartItems";
import { useEffect, useState } from "react";
import "../../styles/productCard.css";
import { updationOfCart } from "../cart";

function GenerateProduct({ list }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchFakeData().then((data) => {
      setProducts(data);
    });
  }, []);

  return products.map((product) => {
    return list.map((id) => {
      if (product.id === id) {
        return (
          <div className="product-card" key={product.title}>
            <img className="product-image" src={product.image} />
            <p>{product.title}</p>
            <input min={0} type="number" />
            <button
              onClick={() => {
                updationOfCart(product.title);
              }}
            >
              Add to Cart
            </button>
            <button>Remove from Cart</button>
          </div>
        );
      }
    });
  });
}

export default GenerateProduct;
