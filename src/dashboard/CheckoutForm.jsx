import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "../styles/CheckoutForm.css";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  const { _id, totalPrice, email, userName } = order;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://polar-tundra-61708.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    // setProcessing(true);

    // Confirmed card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      // setProcessing(false);
    } else {
      setCardError("");
      // console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats your payment is completed");

      // update data and set data into db
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };

      const url = `https://polar-tundra-61708.herokuapp.com/order/${_id}`;

      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          // setProcessing(false);
        });
    }
  };

  // if (setProcessing) {
  //   return <Loader />;
  // }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#705c42",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-full checkout-btn"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>

      {cardError && <p className="error-message">{cardError}</p>}
      {success && (
        <div className="payment-text-success">
          <p>{success}</p>
          <p>
            Your Transaction Id:{" "}
            <span className="payment-trx">{transactionId}</span>
          </p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
