export async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products');

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
  const data = await response.json();
  
  return data.products;
}
