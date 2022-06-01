import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Loading from "../components/Loading";
import auth from "../Firebase.init";

const MySwal = withReactContent(Swal);

const AllReviews = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://polar-tundra-61708.herokuapp.com/review", {
      method: "GET",
    }).then((res) => {
      return res.json();
    })
  );

  const deleteReview = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://polar-tundra-61708.herokuapp.com/review/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
            } else {
              toast.error("Something went wrong");
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="all-user">
      <div className="section-heading">
        <h2 className="">All Reviews</h2>
      </div>
      <div className="table-section">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Review</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, idx) => (
              <tr key={review._id}>
                <td data-lebel="">{idx + 1}</td>
                <td data-lebel="Email">{review.email}</td>
                <td data-lebel="Review">{review.review}</td>
                <td data-lebel="Rating">{review.number}</td>

                <td data-lebel="Delete">
                  <button
                    className="btn table-btn table-danger-btn"
                    onClick={() => deleteReview(review._id)}
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
  );
};

export default AllReviews;
