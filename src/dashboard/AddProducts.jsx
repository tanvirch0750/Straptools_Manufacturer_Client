import React from "react";
import { useForm } from "react-hook-form";
import "../styles/AddProducts.css";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(`Your order is confirmed`);
          reset();
        } else {
          alert("product add failed");
        }
      });
  };

  return (
    <section className="add-product">
      <div className="section-heading">
        <h2>Add Product</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container-inner">
            <div className="form-control">
              <label htmlFor="name">Product Name:</label>
              <input
                {...register("name", {
                  required: "Enter product name",
                })}
                id="location"
                type="text"
                placeholder="Enter product name"
              />
              <p className="error-message">{errors.name?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="image">Product image link:</label>
              <input
                {...register("image", {
                  required: "Enter product image link",
                })}
                type="text"
                placeholder="Enter product image link"
              />
              <p className="error-message">{errors.image?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="description">Product short description:</label>
              <input
                {...register("description", {
                  required: "Enter produt short discription",
                })}
                id="description"
                type="text"
                placeholder="Enter product description"
              />
              <p className="error-message">{errors.description?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor="minimumOrder">Minimum Order:</label>
              <input
                {...register("minimumOrder", {
                  required: "Enter minimum order",
                })}
                type="number"
                placeholder="Enter minimumOrder"
              />
              <p className="error-message">{errors.minimumOrder?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="quantity">Product Quantity:</label>
              <input
                {...register("quantity", {
                  required: "Enter product quantity",
                })}
                type="number"
                placeholder="Enter product quantity"
              />
              <p className="error-message">{errors.quantity?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="availableQuantity">Available Quantity:</label>
              <input
                {...register("availableQuantity", {
                  required: "Enter available quantity",
                })}
                type="number"
                placeholder="Enter available quantity"
              />
              <p className="error-message">
                {errors.availableQuantity?.message}
              </p>
            </div>
            <div className="form-control">
              <label htmlFor="pricePerUnit">Price Per Unit:</label>
              <input
                {...register("pricePerUnit", {
                  required: "Enter product price",
                })}
                type="number"
                placeholder="Enter product price"
              />
              <p className="error-message">{errors.pricePerUnit?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="category">Select product category:</label>
              <select
                {...register("category", {
                  required: "Please select a category",
                })}
              >
                <option value="plastic">plastic</option>
                <option value="steel">steel</option>
                <option value="textile">textile</option>
              </select>
              <p className="error-message">{errors.category?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="fullDescription">Product full description:</label>
              <textarea
                {...register("fullDescription", {
                  required: "Please give full description",
                })}
              ></textarea>
              <p className="error-message">{errors.fullDescription?.message}</p>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-full form-btn"
            value="Add Product"
          />
        </form>
      </div>
    </section>
  );
};

export default AddProducts;
