import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./dashboard/Dashboard";
import Login from "./Pages/Authentication/Login";
import RequireAuth from "./Pages/Authentication/RequireAuth";
import Signup from "./Pages/Authentication/Signup";
import Home from "./Pages/Home";
import Purchase from "./Pages/Purchase";

function App() {
  const location = useLocation();

  const locationPath = location.pathname === "/dashboard";

  return (
    <>
      <Header />
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
        ></Route>
      </Routes>
      {!locationPath && <Footer />}
    </>
  );
}

export default App;
