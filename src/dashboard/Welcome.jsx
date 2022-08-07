import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';
import useAdmin from '../hooks/useAdmin';
import '../styles/Welcome.css';
import ManageOrders from './ManageOrders';
import MyOrders from './MyOrders';

const Welcome = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const navigate = useNavigate();
  return (
    <section className="dashboaard-welcome">
      <>
        {admin && (
          <ManageOrders />
          // <button
          //   className="btn btn-full"
          //   onClick={() => navigate("/dashboard/manageOrders")}
          // >
          //   Manage Orders
          // </button>
        )}
        {!admin && (
          <MyOrders />
          // <button
          //   className="btn btn-full"
          //   onClick={() => navigate("/dashboard/myOrders")}
          // >
          //   My Orders
          // </button>
        )}
      </>
    </section>
  );
};

export default Welcome;
