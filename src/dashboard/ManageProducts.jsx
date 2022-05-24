import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const ManageProducts = () => {
  const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("allProducts", () =>
    fetch("http://localhost:5000/products", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="manage-orders">
      <div className="section-heading">
        <h2>Manage Products</h2>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>A. Quantity</th>
              <th>Price</th>
              <th>Category</th>
              <th>Min. Order</th>
              <th>Update</th>
              <th>Details</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td data-lebel="Name">{product.name}</td>
                <td data-lebel="Quantity">{product.quantity}</td>
                <td data-lebel="A. Quantity">{product.availableQuantity}</td>
                <td data-lebel="Price">{product.pricePerUnit}</td>
                <td data-lebel="Category">{product.category}</td>
                <td data-lebel="Min. Order">{product.minimumOrder}</td>
                <td data-lebel="Update">
                  <button className="btn table-btn">Update</button>
                </td>
                <td data-lebel="Details">
                  <button className="btn table-btn table-details-btn">
                    Details
                  </button>
                </td>
                <td data-lebel="Delete">
                  <button className="btn table-btn table-danger-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageProducts;
