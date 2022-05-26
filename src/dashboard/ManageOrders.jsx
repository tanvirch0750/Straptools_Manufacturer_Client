import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ConfirmationBox from "../components/ConfirmationBox";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const ManageOrders = () => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
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

  const handleConfirmOrder = (id) => {
    const url = `https://polar-tundra-61708.herokuapp.com/order/approved/${id}`;

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Order approved");
        refetch();
      });
  };

  const handleDeleteFunction = () => {
    fetch(`https://polar-tundra-61708.herokuapp.com/order/${deleteId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert(`Order cancelled successfully`);
          refetch();
        } else {
          alert("Something went wrong");
        }
      });
  };

  const handleDelete = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  console.log(orders);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {open && (
        <ConfirmationBox
          setOpen={setOpen}
          deleteFunction={handleDeleteFunction}
          confirmation={true}
        />
      )}

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
                <th>Status</th>
                <th>Order</th>
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
                  <td data-lebel="Status">
                    {order.paid ? (
                      <span className="order-paid">Paid</span>
                    ) : (
                      <span className="order-paid">Unpaid</span>
                    )}
                  </td>
                  <td data-lebel="Order">
                    {order.approved ? (
                      <span className="order-paid">Shipped</span>
                    ) : (
                      <span className="order-paid">Pending</span>
                    )}
                  </td>
                  <td data-lebel="Confirm Order">
                    {!order.approved && (
                      <button
                        className="btn table-btn"
                        onClick={() => handleConfirmOrder(order._id)}
                        disabled={!order.paid}
                      >
                        Confirm
                      </button>
                    )}
                  </td>
                  <td data-lebel="Delete">
                    <button
                      className="btn table-btn table-danger-btn"
                      onClick={() => handleDelete(order._id)}
                      disabled={order.paid}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default ManageOrders;
