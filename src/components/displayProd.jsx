import "../styles/payout.css";

const CartDisplay = () => {
  let TotalPrice = 0;

  console.log(JSON.parse(localStorage.getItem("cart")));

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
      <div></div>
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
                    <div>
                      {element.title}({element.value})
                    </div>
                    <div>${Math.round(element.price * element.value)}</div>
                  </div>
                );
              }
            })
          )}
        </div>{" "}
        <div>Total price: - ${Math.round(TotalPrice)}</div>
      </div>
    </>
  );
};

export default CartDisplay;
