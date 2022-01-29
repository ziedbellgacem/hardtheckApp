import React from "react";
import "./cardstyle.css";
import { Card, Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, getOneProduct } from "../../redux/actions/productAction";
import { getAllComments } from "../../redux/actions/commentAction";

function Cardproducts({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="card1">
      <Card.Img
        variant="top"
        src={product.pictureUrl}
        onClick={() => {
          dispatch(getOneProduct(product._id));
          dispatch(getAllComments(product._id));
          navigate("/product");
        }}
      />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Rating name="read-only" value={3} readOnly />
        <Card.Text>{product.prix} Dt</Card.Text>
      </Card.Body>
      <Button
        onClick={() => {
          dispatch(addToCart(product._id));
        }}
      >
        Add To Cart
      </Button>
    </Card>
  );
}

export default Cardproducts;
