import React from "react";
import { Button } from "react-bootstrap";
import "./adminproduct.css";
import { useDispatch } from "react-redux";
import {
  deleteProduct,
  getOneProduct,
  toggleTrue,
} from "../../../redux/actions/productAction";
import { useNavigate } from "react-router-dom";
function AdminProduct({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDelete = () => {
    if (window.confirm("are you sure ")) {
      dispatch(deleteProduct(product._id));
    }
  };
  return (
    <tbody>
      <tr>
        <th scope="row">{product._id}</th>
        <td>{product.name}</td>
        <td>
          <Button
            onClick={() => {
              dispatch(getOneProduct(product._id));
              navigate("/product");
            }}
          >
            <i class="far fa-eye"></i>
          </Button>{" "}
          <Button
            onClick={() => {
              dispatch(getOneProduct(product._id));
              dispatch(toggleTrue());
              navigate("/admin/addeditproduct");
            }}
          >
            <i className="far fa-edit"></i>
          </Button>
          <Button className="icon1" onClick={productDelete}>
            <i className="far fa-trash-alt"></i>
          </Button>
        </td>
      </tr>
    </tbody>
  );
}

export default AdminProduct;
