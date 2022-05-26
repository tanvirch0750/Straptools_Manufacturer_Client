import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoAppsOutline, IoLogOutOutline } from "react-icons/io5";
import { Link, matchPath, useLocation } from "react-router-dom";
import avatar from "../assets/images/icons/avatar.png";
import Loading from "../components/Loading";
import auth from "../Firebase.init";
import "../styles/NavProfile.css";

const NavProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [profileToggle, setProfileToggle] = useState(false);
  const handleSignOut = () => {
    signOut(auth);
  };

  const toggleProfile = () => {
    setProfileToggle(!profileToggle);
  };

  const { pathname } = useLocation();
  const isDashboardPath = matchPath("/dashboard/*", pathname);

  const dashboardCss = isDashboardPath && "dash-profile-menu";

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="profile" onClick={toggleProfile}>
        <img src={user.photoURL || avatar} alt="avatar" />

        <div
          className={`profile-menu ${dashboardCss}`}
          style={
            profileToggle
              ? { visibility: "visible", opacity: "1" }
              : { visibility: "hidden", opacity: "0" }
          }
        >
          <h4>{user?.displayName}</h4>
          <ul>
            <li>
              <IoAppsOutline className="profile-icon" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <IoLogOutOutline className="profile-icon" />
              <Link onClick={handleSignOut} to="/login">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
