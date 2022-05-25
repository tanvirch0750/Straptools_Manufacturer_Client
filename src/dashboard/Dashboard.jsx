import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";
import auth from "../Firebase.init";
import useAdmin from "../hooks/useAdmin";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [active, setActive] = useState(false);
  const [admin] = useAdmin(user);
  return (
    <>
      <Header />
      <section className="dashboard">
        <div className={`menu-toggle ${active ? "is-active" : ""}`}>
          <div className="hamburger" onClick={() => setActive(!active)}>
            <span></span>
          </div>
        </div>

        <aside className={`sidebar ${active ? "is-active" : ""}`}>
          <h3>Dashboard</h3>
          <nav className="menu">
            {!admin && (
              <Link className="menu-item" to="/dashboard/myOrders">
                My Orders
              </Link>
            )}
            {!admin && (
              <Link className="menu-item" to="/dashboard/addReview">
                Add Review
              </Link>
            )}
            <Link className="menu-item" to="/dashboard/myProfile">
              My Profile
            </Link>
            {admin && (
              <Link className="menu-item" to="/dashboard/allUsers">
                All Users
              </Link>
            )}
            {admin && (
              <Link className="menu-item" to="/dashboard/manageOrders">
                Manage Orders
              </Link>
            )}
            {admin && (
              <Link className="menu-item" to="/dashboard/addProduct">
                Add Product
              </Link>
            )}
            {admin && (
              <Link className="menu-item" to="/dashboard/manageProducts">
                Manage Products
              </Link>
            )}
          </nav>
        </aside>
        <main className="content">
          {/* <h1>Welcome, Human</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          explicabo!
        </p> */}
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default Dashboard;
