import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import auth from "../Firebase.init";
import "../styles/Purchase.css";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState(null);
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState("");

  const { data: product, isLoading } = useQuery(["purchase", id], () =>
    fetch(`http://localhost:5000/products/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const [inputQuantity, setInputQuantity] = useState(+product?.minimumOrder);

  const handlePurchase = (e) => {
    e.preventDefault();
    const purchasedProduct = {
      id: product._id,
      name: product.name,
      quantity: inputQuantity,
      userName: user.displayName,
      email: user.email,
      address: address,
      phone: phone,
      price: product.pricePerUnit,
      totalPrice: inputQuantity * product.pricePerUnit,
    };

    if (inputQuantity > product.availableQuantity) {
      setError(`Sorry only ${product.availableQuantity} product are available`);
      setDisable(true);
    } else if (inputQuantity < product.minimumOrder) {
      setError(`You have to purchase at least ${product.minimumOrder} product`);
      setDisable(true);
    } else {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(purchasedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            alert(`Your order is confirmed`);
          } else {
            alert(
              `You already placed order for this item, plese check dashboard`
            );
          }
          setDisable(false);
          setError("");
        });
    }
  };

  const handleInputQuantityChange = (e) => {
    setInputQuantity(+e.target.value);
  };

  useEffect(() => {
    setInputQuantity(+product?.minimumOrder);
  }, [product]);

  useEffect(() => {
    console.log(inputQuantity, product?.minimumOrder);
    if (inputQuantity > product?.availableQuantity) {
      setError(`Sorry only ${product.availableQuantity} product are available`);
      setDisable(true);
    } else if (inputQuantity < product?.minimumOrder) {
      setError(`You have to purchase at least ${product.minimumOrder} product`);
      setDisable(true);
    } else {
      setDisable(false);
      setError("");
    }
  }, [inputQuantity]);

  const handlePlusQuantity = () => {
    if (inputQuantity > product.availableQuantity) {
      alert(`Sorry only ${product.availableQuantity} product are available`);
      setDisable(true);
    } else {
      setInputQuantity((prevState) => prevState + 1);
      setDisable(false);
    }
  };

  const handleMinusQuantity = () => {
    if (inputQuantity < product.minimumOrder) {
      alert(`You have to purchase atleast ${product.minimumOrder} product`);
      setDisable(true);
    } else {
      setDisable(false);
      setInputQuantity((prevState) => prevState - 1);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="purchase-page">
      <div className="container">
        <div className="purchase-page-inner">
          <div className="purchase-heading">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{inputQuantity}</p>
          </div>
          <div className="purchase-description">
            <div className="purchase-description-inner">
              <div className="description-full">
                <h3>Full Description:</h3>
                <p>{product.fullDescription}</p>
              </div>
              <div className="purchase-content">
                <ul>
                  <li>
                    Quantity: <span>{product.quantity}</span>
                  </li>
                  <li>
                    Minimum order: <span>{product.minimumOrder}</span>
                  </li>
                  <li>
                    Available quantity: <span>{product.availableQuantity}</span>
                  </li>
                  <li>
                    Price per product: <span>${product.pricePerUnit}</span>
                  </li>
                  <li>
                    Category: <span>{product.category}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="purchase-description-content">
              <div className="description-img">
                <img src={product.image} alt="" />
              </div>

              <div className="purchase-product">
                <h3>Make Your Purchase:</h3>

                <div className="quantity-box">
                  <button onClick={handlePlusQuantity} className="btn btn-full">
                    +
                  </button>
                  <input
                    type="text"
                    className="quantity-input"
                    placeholder="Product quantity Quantity"
                    value={inputQuantity}
                    onChange={handleInputQuantityChange}
                  />
                  <button
                    onClick={handleMinusQuantity}
                    className="btn btn-full"
                  >
                    -
                  </button>
                </div>
                {error && <p className="purchase-error">{error}</p>}
                <form onSubmit={handlePurchase}>
                  <input type="text" value={user.displayName} disabled />
                  <input type="email" value={user.email} disabled />
                  <input
                    type="text"
                    placeholder="Your address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Your phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <input
                    className="btn btn-full purchase-btn"
                    type="submit"
                    value="Purchase"
                    disabled={disable}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
