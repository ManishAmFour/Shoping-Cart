import "../styles/payout.css";

const CartDisplay = () => {
  let TotalPrice = 0;

  {
    JSON.parse(localStorage.getItem("cart")) === null
      ? (TotalPrice = "empty")
      : JSON.parse(localStorage.getItem("cart")).map((element, index) => {
          if (index > 0) {
            TotalPrice += element.price * element.value;
          }
        });
  }

  return (
    <>
      <div className="payment-summary">
        <div className="title">Shopping Cart</div>
        <div>
          {JSON.parse(localStorage.getItem("cart")) === null ? (
            <div>cart is empty</div>
          ) : (
            JSON.parse(localStorage.getItem("cart")).map((element, index) => {
              if (index > 0) {
                return (
                  <div className="product-detail" key={element.title}>
                    <p className="product-title">
                      {element.title}({element.value})
                    </p>
                    <p className="product-price">
                      ${Math.round(element.price * element.value)}
                    </p>
                  </div>
                );
              }
            })
          )}
        </div>{" "}
        <p className="total-price">Total price: - ${Math.round(TotalPrice)}</p>
      </div>
    </>
  );
};

export default CartDisplay;
