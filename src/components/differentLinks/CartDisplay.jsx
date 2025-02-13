function CartNumberDisplay() {
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
        {window.innerWidth > 600 ? (
          <p className="cart-display">
            Total Items in the Cart:- {TotalNumber}
          </p>
        ) : window.innerWidth <= 600 && window.innerWidth > 300 ? (
          <div className="cart-display cart-display-no">{TotalNumber}</div>
        ) : null}
      </div>
    );
  }
}

export default CartNumberDisplay;
