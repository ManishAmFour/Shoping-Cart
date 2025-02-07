let cart = [{ name: "Demo-product", value: "demo-value" }];

export function updationOfCart(name) {
  cart.forEach((product, index) => {
    if (product.name === name) {
      product.value += 1;
    } else {
      cart.push({ name, value: 1 });
    }
  });

  console.log(cart);
}

export default cart;
