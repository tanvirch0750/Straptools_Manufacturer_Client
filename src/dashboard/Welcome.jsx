import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import useAdmin from "../hooks/useAdmin";
import "../styles/Welcome.css";

const Welcome = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  return (
    <section style={{ zIndex: "-1" }} className="dashboaard-welcome">
      <div>
        <h2>Welocome to dashboard</h2>
        {admin && (
          <button
            className="btn btn-full"
            onClick={() => navigate("/dashboard/manageOrders")}
          >
            Manage Orders
          </button>
        )}
        {!admin && (
          <button
            className="btn btn-full"
            onClick={() => navigate("/dashboard/myOrders")}
          >
            My Orders
          </button>
        )}
      </div>
    </section>
  );
};

export default Welcome;
