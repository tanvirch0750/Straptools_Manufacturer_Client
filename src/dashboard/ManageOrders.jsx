import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const MySwal = withReactContent(Swal);

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
        toast.success("Order approved");
        refetch();
      });
  };

  const deleteOrder = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://polar-tundra-61708.herokuapp.com/order/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
            } else {
              toast.error("Something went wrong");
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
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
                      onClick={() => deleteOrder(order._id)}
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
