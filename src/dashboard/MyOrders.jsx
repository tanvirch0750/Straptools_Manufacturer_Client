import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import ConfirmationBox from "../components/ConfirmationBox";
import Loading from "../components/Loading";
import auth from "../Firebase.init";
import "../styles/MyOrder.css";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("myOrders", () =>
    fetch(
      `https://polar-tundra-61708.herokuapp.com/order?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem("accessToken");
        signOut(auth);
        navigate("/");
      }
      return res.json();
    })
  );

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
                <th>Status</th>
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
                      <>
                        <p>Paid - Trx id:</p>
                        <p>{order.transactionId}</p>
                      </>
                    )}
                  </td>
                  <td data-lebel="Status">
                    {/* {order.approved && order.paid ? (
                      <span className="paid-pending">Shipped</span>
                    ) : (
                      <span className="paid-pending">Pending</span>
                    )} */}
                    {order.approved ? (
                      <span className="paid-pending">Shipped</span>
                    ) : !order.paid ? (
                      <span className="paid-pending"></span>
                    ) : (
                      <span className="paid-pending">Pending</span>
                    )}
                  </td>
                  <td data-lebel="Delete">
                    <button
                      className="btn table-btn table-danger-btn"
                      disabled={order.paid}
                      onClick={() => handleDelete(order._id)}
                    >
                      Cancel
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

export default MyOrders;
