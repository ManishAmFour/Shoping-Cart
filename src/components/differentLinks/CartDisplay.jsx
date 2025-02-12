function CartNumberDisplay() {
  if (JSON.parse(localStorage.getItem("cart")) === null) {
    return 
    

    <div>
      Total Items in the Cart
    <p className="cart-display">0</p>
    </div>;
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
