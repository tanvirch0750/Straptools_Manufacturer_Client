import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderContact from "../components/HeaderContact";
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
    fetch(`https://polar-tundra-61708.herokuapp.com/products/${id}`, {
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
      fetch("https://polar-tundra-61708.herokuapp.com/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(purchasedProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success(`Your order is confirmed`);
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
      toast.error(
        `Sorry only ${product.availableQuantity} product are available`
      );
      setDisable(true);
    } else {
      setInputQuantity((prevState) => prevState + 1);
      setDisable(false);
    }
  };

  const handleMinusQuantity = () => {
    if (inputQuantity < product.minimumOrder) {
      toast.error(
        `You have to purchase atleast ${product.minimumOrder} product`
      );
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
    <>
      <HeaderContact />
      <Header />
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
                <div className="purchase-content">
                  <ul>
                    <li>
                      Quantity: <span>{product.quantity}</span>
                    </li>
                    <li>
                      Minimum order: <span>{product.minimumOrder}</span>
                    </li>
                    <li>
                      Available quantity:{" "}
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
              </div>
              <div className="purchase-description-content">
                <div className="description-img">
                  <img src={product.image} alt="" />
                </div>

                <div className="purchase-product">
                  <h3>Make Your Purchase:</h3>

                  <div className="quantity-box">
                    <button
                      onClick={handlePlusQuantity}
                      className="btn btn-full"
                    >
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
      <Footer />
    </>
  );
};

export default Purchase;
