import FetchFakeData from "../cartItems";
import { useEffect, useState } from "react";
import "../../styles/productCard.css";
import CartNumberDisplay from "./CartDisplay";
import js from "@eslint/js";

function GenerateProduct({ list }) {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [values, setValue] = useState([]);
  let cart = JSON.parse(localStorage.getItem("cart")) || [
    { title: "Demo-title", price: "Demo-Price" },
  ];

  useEffect(() => {
    FetchFakeData().then((data) => {
      setProducts(data);
    });

    let NewValue = [];

    list.map((id, index) => {
      NewValue.push({ id, value: "" });
    });
    setValue(NewValue);
  }, []);

  function updationOfCart(product) {
    let MajorQuantity = 0;

    values.forEach((element, index) => {
      if (element.id === product.id) {
        MajorQuantity = parseInt(element.value);
      }
    });

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
          values.forEach((value, smallIndex) => {
            if (value.id === product.id && value.value !== "") {
              element.value += MajorQuantity;

              localStorage.setItem("cart", JSON.stringify(cart));
            }
          });
        }
      });
      setUpdate(!update);
    } else {
      let NewProduct = {
        title: product.title,
        price: product.price,
        value: MajorQuantity,
      };
      values.forEach((element, index) => {
        if (element.id === product.id && element.value !== "") {
          cart.push(NewProduct);

          localStorage.setItem("cart", JSON.stringify(cart));
          setUpdate(!update);
        }
      });
    }
  }

  function ChangingTheInput(id, value) {
    let NewValue = { id, value };
    if (value > -1) {
      values.forEach((element, index) => {
        if (NewValue.id === element.id) {
          let NewArray = [...values];

          NewArray[index] = NewValue;
          setValue(NewArray);
        }
      });
    } else {
      alert("enter valid number of quantity");
    }
  }

  function deleteFromCart(product) {
    cart.forEach((element, index) => {
      if (element.title === product.title) {
        element.value = element.value - 1;
        if (element.value >= 0) {
          localStorage.setItem("cart", JSON.stringify(cart));
          values.forEach((value, index) => {
            if (product.id === value.id) {
              let NewValues = [...values];
              let NewValue = { id: value.id, value: "" };
              NewValues[index] = NewValue;
              setValue(NewValues);
            }
          });
        }
      }
    });
  }

  return products.map((product) => {
    return list.map((id, index) => {
      if (product.id === id) {
        return (
          <div className="product-card" key={product.title}>
            <img className="product-image" src={product.image} />

            <p>{product.title}</p>
            {JSON.parse(localStorage.getItem("cart")) === null ? (
              <div></div>
            ) : (
              JSON.parse(localStorage.getItem("cart")).map((element, index) => {
                if (element.title === product.title) {
                  if (element.value === 0) {
                    return <div key={element.title}></div>;
                  }
                  return (
                    <div key={element.title}>Quantity:- {element.value}</div>
                  );
                }
              })
            )}
            {values.map((element, valueIndex) => {
              if (valueIndex === index) {
                return (
                  <input
                    name={element.title}
                    value={element.value}
                    key={element.id}
                    onChange={(e) => {
                      ChangingTheInput(id, e.target.value);
                    }}
                    min={0}
                    type="number"
                  />
                );
              }
            })}

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
            <button
              onClick={() => {
                deleteFromCart(product);
              }}
            >
              Remove from Cart
              
            </button>
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
