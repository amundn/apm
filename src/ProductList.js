import React from "react";
import { Link } from "react-router-dom";

function ProductList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Product</th>
          <th>Code</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map(product => {
          return (
            <tr key={product.id}>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    props.deleteProduct(product.id);
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/product/" + product.id}>{product.productName}</Link>
              </td>
              <td>{product.productCode}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// ProductList.propTypes = {
//   deleteProduct: PropTypes.func.isRequired,
//   products: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       authorId: PropTypes.number.isRequired,
//       category: PropTypes.string.isRequired
//     })
//   ).isRequired
// };

export default ProductList;
