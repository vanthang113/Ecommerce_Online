import fetchAPI from "./api";

export async function getProducts() {
  return fetchAPI("/products", { method: "GET" });
}

export async function getProductById(id: string) {
  return fetchAPI(`/products/${id}`, { method: "GET" });
}
