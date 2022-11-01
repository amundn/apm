import React from "react";
import { getProjects } from "./api/projectApi";

function ProductsList() {
    
   // const prod = getProjects()
  return (
    <>
      <div className="card">
        <div className="card-header">Product list</div>

        <div className="card-body">
          <div className="list-group">
            <button type="button" className="list-group-item"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsList;
