import { useEffect } from "react";

function CartNumberDisplay() {
  useEffect(() => {
    console.log("hello");
  }, []);

  if (JSON.parse(localStorage.getItem("cart")) === null) {
    return (
      <div>
        <p className="cart-display">Total Items in the Cart:- 0</p>
      </div>
    );
  } else {
    let TotalNumber = 0;

    JSON.parse(localStorage.getItem("cart")).map((element, index) => {
      if (index > 0) {
        TotalNumber += element.value;
      }
    });

    return (
      <div>
        {window.innerWidth > 500 ? (
          <p className="cart-display">
            Total Items in the Cart:- {TotalNumber}
          </p>
        ) : (
          <div className="cart-display cart-display-no">{TotalNumber}</div>
        )}
      </div>
    );
  }
}

export default CartNumberDisplay;
