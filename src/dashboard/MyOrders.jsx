import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../Firebase.init";
import "../styles/MyOrder.css";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(`http://localhost:5000/order?email=${user.email}`, {
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
    <section className="my-orders">
      <div className="section-heading">
        <h2 className="">My Orders</h2>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Cancel</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td data-lebel="Name">{order.name}</td>
                <td data-lebel="Quantity">{order.quantity}</td>
                <td data-lebel="Price">{order.price}</td>
                <td data-lebel="Total">{order.totalPrice}</td>
                <td data-lebel="Payment">
                  {!order.paid ? (
                    <button
                      className="btn table-btn"
                      onClick={() =>
                        navigate(`/dashboard/payment/${order._id}`)
                      }
                    >
                      Pay
                    </button>
                  ) : (
                    <button className="btn table-btn" disabled>
                      Paid
                    </button>
                  )}
                </td>
                <td data-lebel="Delete">
                  <button className="btn table-btn table-danger-btn">
                    Cancel
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

export default MyOrders;
