import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from '../components/Loading';

import '../styles/Purchase.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useQuery(['purchase', id], () =>
    fetch(`https://polar-tundra-61708.herokuapp.com/products/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="purchase-page">
        <div className="container">
          <div className="purchase-page-inner">
            <div className="purchase-heading">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="purchase-description">
              <div className="purchase-description-inner">
                <div className="description-full">
                  <h3>Full Description:</h3>
                  <p>{product.fullDescription}</p>
                </div>
                <div className="description-img">
                  <img src={product.image} alt="" />
                </div>
              </div>
              <div className="purchase-description-content">
                <div className="purchase-content">
                  <h3>Product Status:</h3>
                  <ul>
                    <li>
                      Quantity: <span>{product.quantity}</span>
                    </li>
                    <li>
                      Minimum order: <span>{product.minimumOrder}</span>
                    </li>
                    <li>
                      Available quantity:{' '}
                      <span>{product.availableQuantity}</span>
                    </li>
                    <li>
                      Price per product: <span>${product.pricePerUnit}</span>
                    </li>
                    <li>
                      Category: <span>{product.category}</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    className="btn btn-full"
                    onClick={() =>
                      navigate(`/dashboard/updateProduct/${product._id}`)
                    }
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
