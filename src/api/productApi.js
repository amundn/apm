import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/products/";

export function getProducts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return fetch(baseUrl + (product.id || ""), {
    method: product.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteProduct(productId) {
  return fetch(baseUrl + productId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
