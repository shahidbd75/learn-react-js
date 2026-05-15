export const fetchProducts = () => {
  return fetch(`../assets/data/products.json`).then(res => res.json()).then(data => data.data);
};