import dispatcher from "../appDispatcher";
import * as productApi from "../api/productApi";
import actionTypes from "./actionTypes";

export function saveProduct(product) {
  return productApi.saveProduct(product).then(savedProduct => {
    // Hey dispatcher, go tell all the stores that a product was just created.
    dispatcher.dispatch({
      actionType: product.id
        ? actionTypes.UPDATE_PRODUCT
        : actionTypes.CREATE_PRODUCT,
      product: savedProduct
    });
  });
}

export function loadProducts() {
  return productApi.getProducts().then(products => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_PRODUCTS,
      products: products
    });
  });
}

export function deleteProduct(id) {
  return productApi.deleteProduct(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_PRODUCT,
      id: id
    });
  });
}
