let cart = [{ title: "Demo-title", price: "Demo-Price" }];
export function updationOfCart(product) {
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
      }
    });
  } else {
    cart.push(product);
  }
}
export default cart;
