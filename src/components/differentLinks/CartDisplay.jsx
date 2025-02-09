function CartNumberDisplay() {
  if (JSON.parse(localStorage.getItem("cart")) === null) {
    return <div className="cart-display"> Cart Is empty</div>;
  } else {
    let TotalNumber = 0;

    JSON.parse(localStorage.getItem("cart")).map((element, index) => {
      if (index > 0) {
        TotalNumber += element.value;
      }
    });

    return <div className="cart-display"> {TotalNumber}</div>;
  }
}

export default CartNumberDisplay;
