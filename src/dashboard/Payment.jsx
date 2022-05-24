import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <section className="payment">
      <h1>Payment {id}</h1>
    </section>
  );
};

export default Payment;
