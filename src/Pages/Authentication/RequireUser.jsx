import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../Firebase.init";
import useUser from "../../hooks/useUser";

const RequireUser = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isUser, userLoading] = useUser(user);

  const location = useLocation();

  if (loading || userLoading) {
    return <Loading />;
  }

  if (!user || !isUser) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireUser;
