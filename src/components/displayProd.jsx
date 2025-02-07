import cart from "./cart";
import "../styles/payout.css";

const CartDisplay = () => {
  let TotalItems = 0;
  cart.map((element, index) => {
    TotalItems = element.value;
  });

  console.log(TotalItems);

  return (
    <>
      <div></div>
      <div className="payment-summary">
        <div className="title">Shopping Cart</div>
        {cart.map((product, index) => {
          return (
            <div key={product.title} className="product-detail">
              <div>{product.title}</div>
              <div>${product.price}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartDisplay;
