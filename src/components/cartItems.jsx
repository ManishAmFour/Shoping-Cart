async function FetchFakeData() {
  const rawPromise = await fetch("https://fakestoreapi.com/products");
  const data = await rawPromise.json();
  return data;
}

export default FetchFakeData;
