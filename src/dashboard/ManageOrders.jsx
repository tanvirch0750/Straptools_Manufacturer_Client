import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const ManageOrders = () => {
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("allOrders", () =>
    fetch("https://polar-tundra-61708.herokuapp.com/orders", {
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
        <h2>Manage Orders</h2>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Confirm Order</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td data-lebel="Name">{order.name}</td>
                <td data-lebel="Email">{order.email}</td>
                <td data-lebel="Address">{order.address}</td>
                <td data-lebel="Quantity">{order.quantity}</td>
                <td data-lebel="Price">{order.price}</td>
                <td data-lebel="Total">{order.totalPrice}</td>
                <td data-lebel="Confirm Order">
                  <button className="btn table-btn">Confirm</button>
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

export default ManageOrders;
