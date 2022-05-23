import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

const Purchase = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useQuery(["purchase", id], () =>
    fetch(`http://localhost:5000/products/${id}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(product);

  return (
    <section className="purchase-page">
      <h1>{product.name}</h1>
    </section>
  );
};

export default Purchase;
