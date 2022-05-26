import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationBox from "../components/ConfirmationBox";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const ManageProducts = () => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("allProducts", () =>
    fetch("https://polar-tundra-61708.herokuapp.com/products", {
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

  const handleDeleteFunction = () => {
    fetch(`https://polar-tundra-61708.herokuapp.com/products/${deleteId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Product delete successfully");
          refetch();
        } else {
          toast.error("Something went wrong");
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
                    <button
                      className="btn table-btn table-danger-btn"
                      onClick={() => handleDelete(product._id)}
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

export default ManageProducts;
