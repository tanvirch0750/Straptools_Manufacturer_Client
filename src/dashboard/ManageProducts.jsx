import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loading from '../components/Loading';
import auth from '../Firebase.init';

const MySwal = withReactContent(Swal);

const ManageProducts = () => {
  const navigate = useNavigate();

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery('allProducts', () =>
    fetch('https://polar-tundra-61708.herokuapp.com/products', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('accessToken');
        signOut(auth);
        navigate('/');
      }
      return res.json();
    })
  );

  const deleteProduct = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://polar-tundra-61708.herokuapp.com/products/${id}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
            } else {
              toast.error('Something went wrong');
            }
          });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
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
                    <button
                      className="btn table-btn table-details-btn"
                      onClick={() =>
                        navigate(`/dashboard/productDetails/${product._id}`)
                      }
                    >
                      Details
                    </button>
                  </td>
                  <td data-lebel="Delete">
                    <button
                      className="btn table-btn table-danger-btn"
                      onClick={() => deleteProduct(product._id)}
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
