import React from "react";
import Announcement from "../../../components/Announcement";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import AdminProduct from "./AdminProduct";
import { Button } from "react-bootstrap";
import "./productslist.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAllProducts,
  toggleFalse,
} from "../../../redux/actions/productAction";
function Productslist() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <Announcement />
      <Navbar />
      <div>
        <Link to="/admin/addeditproduct">
          {" "}
          <Button
            className="btn1"
            onClick={() => {
              dispatch(toggleFalse());
              navigate("/addeditproduct");
            }}
          >
            Add New Product
          </Button>
        </Link>
      </div>

      <table className="table">
        <thead className="thead">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {products.map((product) => (
          <AdminProduct product={product} key={product._id} />
        ))}
      </table>
      <Footer />
    </div>
  );
}

export default Productslist;
