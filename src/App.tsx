import { Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import ProductsPage from "./ProductsPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/products" component={ProductsPage} />
      </Switch>
      <a href="/products">Products</a>
    </div>
  );
}

export default App;
