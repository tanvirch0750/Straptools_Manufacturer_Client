import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="menu-toggle">
        <div className="hamburger">
          <span></span>
        </div>
      </div>

      <aside className="sidebar">
        <h3>Dashboard</h3>
        <nav className="menu">
          <Link className="menu-item" to="/myOrders">
            My Orders
          </Link>
          <Link className="menu-item" to="/addReview">
            Add Review
          </Link>
          <Link className="menu-item" to="/myProfile">
            My Profile
          </Link>
        </nav>
      </aside>
      <main className="content">
        <h1>Welcome, Human</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          explicabo!
        </p>
      </main>
    </section>
  );
};

export default Dashboard;
