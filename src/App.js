import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProducts from './dashboard/AddProducts';
import AddReview from './dashboard/AddReview';
import AllReviews from './dashboard/AllReviews';
import AllUsers from './dashboard/AllUsers';
import Dashboard from './dashboard/Dashboard';
import ManageOrders from './dashboard/ManageOrders';
import ManageProducts from './dashboard/ManageProducts';
import MyOrders from './dashboard/MyOrders';
import MyProfile from './dashboard/MyProfile';
import Payment from './dashboard/Payment';
import ProductDetails from './dashboard/ProductDetails';
import UpdateProduct from './dashboard/UpdateProduct';
import Welcome from './dashboard/Welcome';
import Login from './Pages/Authentication/Login';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import RequireAuth from './Pages/Authentication/RequireAuth';
import RequireUser from './Pages/Authentication/RequireUser';
import Signup from './Pages/Authentication/Signup';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home';
import MyPortfolio from './Pages/MyPortfolio';
import NotFound from './Pages/NotFound';
import Products from './Pages/Products';
import Purchase from './Pages/Purchase';
import './styles/Form.css';
import './styles/Table.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/portfolio" element={<MyPortfolio />}></Route>
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
          <Route
            path="myOrders"
            element={
              <RequireUser>
                <MyOrders />
              </RequireUser>
            }
          ></Route>
          <Route path="myProfile" element={<MyProfile />}></Route>
          <Route
            path="addReview"
            element={
              <RequireUser>
                <AddReview />
              </RequireUser>
            }
          ></Route>
          <Route
            path="payment/:id"
            element={
              <RequireUser>
                <Payment />
              </RequireUser>
            }
          ></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="allReviews"
            element={
              <RequireAdmin>
                <AllReviews />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageOrders"
            element={
              <RequireAdmin>
                <ManageOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="productDetails/:id"
            element={
              <RequireAdmin>
                <ProductDetails />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="updateProduct/:id"
            element={
              <RequireAdmin>
                <UpdateProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProducts />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
