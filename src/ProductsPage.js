import React, { useState, useEffect } from "react";
import productsStore from "./productsStore";
import ProductList from "./ProductList";
import { Link } from "react-router-dom";
import { loadProducts, deleteProduct } from "./productActions";

function ProductsPage() {
  const [products, setProducts] = useState(productsStore.getProducts());

  useEffect(() => {
    productsStore.addChangeListener(onChange);
    if (products.length === 0) loadProducts();
    return () => productsStore.removeChangeListener(onChange); // cleanup on unmount
  }, [products.length]);

  function onChange() {
    setProducts(productsStore.getProducts());
  }

  return (
    <>
      <h2>Products</h2>
      <Link className="btn btn-primary" to="/product">
        Add Product
      </Link>
      <ProductList products={products} deleteProduct={deleteProduct} />
    </>
  );
}

export default ProductsPage;
