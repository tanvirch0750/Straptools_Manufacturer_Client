import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../Firebase.init";
import "../styles/AddReview.css";
import "../styles/Form.css";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    let defaultValues = {};
    defaultValues.name = user.displayName;
    defaultValues.email = user.email;

    reset({ ...defaultValues });
  }, [user]);

  const onSubmit = (data) => {
    fetch("https://polar-tundra-61708.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(`Your review is successfull`);
          reset();
        } else {
          alert("Something went wrong, cannot add your review");
        }
      });
  };

  return (
    <section className="add-review">
      <div className="container">
        <div className="section-heading">
          <h2>Add Review</h2>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-container-inner">
              <div className="form-control">
                <label htmlFor="name">Your Name:</label>

                <input
                  {...register("name", {
                    required: "Please provide your name",
                  })}
                  type="text"
                  placeholder="Enter your name"
                  disabled
                />
                <p className="error-message">{errors.name?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="email">Your Email:</label>

                <input
                  {...register("email", {
                    required: "Please provide your name",
                  })}
                  type="text"
                  placeholder="Enter your name"
                  disabled
                />
                <p className="error-message">{errors.email?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="image">Your Image Link:</label>

                <input
                  {...register("image", {
                    required: "Please provide your image link",
                  })}
                  type="text"
                  placeholder="Your image link"
                />
                <p className="error-message">{errors.image?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="company">Your company name:</label>

                <input
                  {...register("company", {
                    required: "Please provide your company name",
                  })}
                  type="text"
                  placeholder="Enter your name"
                />
                <p className="error-message">{errors.company?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="company">Your position in the company:</label>

                <input
                  {...register("position", {
                    required: "Please provide your company name",
                  })}
                  type="text"
                  placeholder="Your position in the company"
                />
                <p className="error-message">{errors.position?.message}</p>
              </div>
              <div className="form-control">
                <label htmlFor="review">Your Review:</label>

                <input
                  {...register("review", {
                    required: "Please enter your review",
                  })}
                  type="text"
                  placeholder="Enter your review"
                />
                <p className="error-message">{errors.review?.message}</p>
              </div>

              <div className="form-control">
                <label htmlFor="number">Your Review Number:</label>

                <input
                  {...register("number", {
                    required: "Please give your review between 1 and 5",
                    min: 1,
                    max: 5,
                  })}
                  type="number"
                  placeholder="Enter your review rating (between 1 and 5)"
                />
                <p className="error-message">{errors.number?.message}</p>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-full form-btn"
              value="Add Review"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddReview;
