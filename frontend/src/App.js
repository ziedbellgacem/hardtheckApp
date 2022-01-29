import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import ErorrPage from "./pages/404/404page";
import Alerts from "./components/alert/alert";
import Profile from "./pages/profile/Profile";
import AdminLists from "./pages/Admin/adminLists/adminLists";
import ProductsList from "./pages/Admin/productsList/ProductsList";
import UsersList from "./pages/Admin/usersList/userslist";
import AddEdit from "./pages/Admin/productsList/AddEdit";
import Loader from "./pages/loading/loading";
import PrivateRoute from "./router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/authAction";
import EditProfile from "./pages/profile/EditProfile";
import { getAllProducts } from "./redux/actions/productAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current());
      dispatch(getAllProducts());
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div className="App">
        <Alerts />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/product"
            element={
              <PrivateRoute>
                <Product />
              </PrivateRoute>
            }
          />
          <Route
            path="/productlist"
            element={
              <PrivateRoute>
                <ProductList />
              </PrivateRoute>
            }
          />

          <Route path="/404" element={<ErorrPage />} />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/adminlists"
            element={
              <PrivateRoute>
                <AdminLists />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/productslist"
            element={
              <PrivateRoute>
                <ProductsList />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/userslist"
            element={
              <PrivateRoute>
                <UsersList />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/addeditproduct"
            element={
              <PrivateRoute>
                <AddEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile/editprofile"
            element={
              <PrivateRoute>
                <EditProfile />
              </PrivateRoute>
            }
          />
          <Route path="/loader" element={<Loader />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
