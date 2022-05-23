import { Route, Routes } from "react-router-dom";
import AddReview from "./dashboard/AddReview";
import AllUsers from "./dashboard/AllUsers";
import Dashboard from "./dashboard/Dashboard";
import MyOrders from "./dashboard/MyOrders";
import MyProfile from "./dashboard/MyProfile";
import Welcome from "./dashboard/Welcome";
import Login from "./Pages/Authentication/Login";
import RequireAdmin from "./Pages/Authentication/RequireAdmin";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home";
import Purchase from "./Pages/Purchase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/products/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Welcome />}></Route>
          <Route path="myOrders" element={<MyOrders />}></Route>
          <Route path="myProfile" element={<MyProfile />}></Route>
          <Route path="addReview" element={<AddReview />}></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
