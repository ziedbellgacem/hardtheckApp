import React, { useEffect } from "react";
import "./addedit.css";
import Announcement from "../../../components/Announcement";
import Navbar from "../../../components/Navbar";
import { Form, Button } from "react-bootstrap";
import Footer from "../../../components/Footer";
import { addProduct, editProduct } from "../../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddEdit() {
  const productEdit = useSelector((state) => state.productReducer.product);
  const edit = useSelector((state) => state.productReducer.edit);
  const loading = useSelector((state) => state.productReducer.loading);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    prix: null,
    pictureUrl: "",
    category: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handelChange
  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handelSubmit
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formData, navigate));
  };
  //handelEdit
  const handelEdit = (e) => {
    e.preventDefault();
    dispatch(editProduct(productEdit._id, formData));
    navigate("/admin/productslist");
  };
  useEffect(() => {
    edit
      ? setFormData({
          name: productEdit.name,
          description: productEdit.description,
          prix: productEdit.prix,
          pictureUrl: productEdit.pictureUrl,
          category: productEdit.category,
        })
      : setFormData({
          name: "",
          description: "",
          prix: null,
          pictureUrl: "",
          category: "",
        });
  }, [
    edit,
    productEdit.pictureUrl,
    productEdit.prix,
    productEdit.description,
    productEdit.name,
    productEdit.category,
  ]);

  return (
    <>
      <Announcement />
      <Navbar />
      {edit && !loading ? (
        <div>
          <Form className="form" onSubmit={handelEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="Text"
                name="description"
                placeholder="Your description"
                value={formData.description}
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="Number"
                name="prix"
                placeholder="Price"
                value={formData.prix}
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="String"
                name="pictureUrl"
                placeholder="Picture"
                value={formData.pictureUrl}
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="Text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handelChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Edit Product
            </Button>
          </Form>
        </div>
      ) : (
        <div>
          <Form className="form" onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="Text"
                name="name"
                placeholder="Enter name"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="Text"
                name="description"
                placeholder="Your description"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="Number"
                name="prix"
                placeholder="Price"
                onChange={handelChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Picture</Form.Label>
              <Form.Control
                type="String"
                name="pictureUrl"
                placeholder="Picture"
                onChange={handelChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="Text"
                name="category"
                placeholder="Category"
                onChange={handelChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </div>
      )}
      <Footer />
    </>
  );
}

export default AddEdit;
