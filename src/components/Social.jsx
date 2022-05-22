import React, { useEffect, useState } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase.init";
import "../styles/Social.css";
import Loading from "./Loading";

const Social = ({ text }) => {
  const [customError, setCustomError] = useState("");
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    if (error) {
      if (error.message.includes("auth/popup-closed-by-user")) {
        setCustomError("Popup Closed by user");
      } else if (error.message.includes("auth/user-not-found")) {
        setCustomError("Account not found with this email");
      } else {
        setCustomError(error.message);
      }
    }
  });

  const navigate = useNavigate();

  const handleGoogleSubmit = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    } else {
      if (text === "login") {
        navigate("/login");
      }
      if (text === "signup") {
        navigate("/signup");
      }
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="social">
      <div className="or-separator">
        <div></div>
        <span>or</span>
        <div></div>
      </div>
      {customError && <p className="error-message">{customError}</p>}
      <button onClick={handleGoogleSubmit} className="btn social-btn">
        {text} with Google
      </button>
    </div>
  );
};

export default Social;
