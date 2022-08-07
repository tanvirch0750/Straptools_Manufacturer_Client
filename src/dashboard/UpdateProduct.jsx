import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import '../styles/AddProducts.css';

const UpdateProduct = () => {
  const [product, setProduct] = useState([]);
  const [loadData, setLoadData] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({});

  const { id } = useParams();

  useEffect(() => {
    setLoadData(true);
    fetch(`https://polar-tundra-61708.herokuapp.com/products/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoadData(false);
        setProduct(data);
      });
  }, []);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = product.name;
    defaultValues.availableQuantity = product.availableQuantity;
    defaultValues.category = product.category;
    defaultValues.image = product.image;
    defaultValues.description = product.description;
    defaultValues.fullDescription = product.fullDescription;
    defaultValues.minimumOrder = product.minimumOrder;
    defaultValues.pricePerUnit = product.pricePerUnit;
    defaultValues.quantity = product.quantity;
    reset({ ...defaultValues });
  }, [product]);

  const onSubmit = (data) => {
    setLoadData(true);
    // send data to the server
    fetch(`https://polar-tundra-61708.herokuapp.com/products/${id}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoadData(false);
        navigate(`/dashboard/productDetails/${id}`);
      });
  };

  if (loadData) {
    return <Loading />;
  }

  return (
    <section className="add-product">
      <div className="section-heading">
        <h2>Update Product: {product.name}</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container-inner">
            <div className="form-control">
              <label htmlFor="name">Product Name:</label>
              <input
                {...register('name', {
                  required: 'Enter product name',
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
                {...register('image', {
                  required: 'Enter product image link',
                })}
                type="text"
                placeholder="Enter product image link"
              />
              <p className="error-message">{errors.image?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="description">Product short description:</label>
              <input
                {...register('description', {
                  required: 'Enter produt short discription',
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
                {...register('minimumOrder', {
                  required: 'Enter minimum order',
                })}
                type="number"
                placeholder="Enter minimumOrder"
              />
              <p className="error-message">{errors.minimumOrder?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="quantity">Product Quantity:</label>
              <input
                {...register('quantity', {
                  required: 'Enter product quantity',
                })}
                type="number"
                placeholder="Enter product quantity"
              />
              <p className="error-message">{errors.quantity?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="availableQuantity">Available Quantity:</label>
              <input
                {...register('availableQuantity', {
                  required: 'Enter available quantity',
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
                {...register('pricePerUnit', {
                  required: 'Enter product price',
                })}
                type="number"
                placeholder="Enter product price"
              />
              <p className="error-message">{errors.pricePerUnit?.message}</p>
            </div>
            <div className="form-control">
              <label htmlFor="category">Select product category:</label>
              <select
                {...register('category', {
                  required: 'Please select a category',
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
                {...register('fullDescription', {
                  required: 'Please give full description',
                })}
              ></textarea>
              <p className="error-message">{errors.fullDescription?.message}</p>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-full form-btn"
            value="Update Product"
          />
        </form>
      </div>
    </section>
  );
};

export default UpdateProduct;
