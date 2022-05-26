import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import "../styles/Payment.css";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JqdAsGXrwkMLuhtiJgMQKnaLLHsfi7RQMEznBz9DWD4EQxzjKqGqjajqHa3EMBXLxTM0Bf6WiGAAigES9a0YSB600FrqYDOoX"
);

const Payment = () => {
  const { id } = useParams();

  const { data: order, isLoading } = useQuery(["paymentOrder", id], () =>
    fetch(`https://polar-tundra-61708.herokuapp.com/orders/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="payment">
      <div className="section-heading">
        <h2>Make Your Payment</h2>
      </div>
      <div className="payment-order-details">
        <h4>Hello {order.userName}</h4>
        <h3>{order.name}</h3>
        <p>Quantity: {order.quantity}</p>
        <p>Price: ${order.price}</p>
        <p>Pleae Pay: ${order.totalPrice}</p>
      </div>
      <div className="payment-order-stripe">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
