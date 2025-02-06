let products;

FetchFakeData();

async function FetchFakeData() {
  const rawPromise = await fetch("https://fakestoreapi.com/products");
  const data = await rawPromise.json();

  products = data;
}

export default products;
