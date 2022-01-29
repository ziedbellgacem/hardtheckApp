import axios from "axios";
import { setAlert } from "./alertAction";
import {
  ADDTOCART,
  DESCREMENT,
  FILTERPRODUCT,
  GETALLPRODUCTS,
  GET_PRODUCT,
  INCREMENT,
  REMOVEITEM,
  TOGGLEFALSE,
  TOGGLETRUE,
} from "../types";
// get all PRODUCTS
export const getAllProducts = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:9000/api/products/allproducts",
      config
    );
    console.log(res);
    dispatch({
      type: GETALLPRODUCTS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// add product

export const addProduct = (formData, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.post(
      "http://localhost:9000/api/products/addproduct",
      formData,
      config
    );

    dispatch(getAllProducts());
    navigate("/admin/productslist");
  } catch (err) {
    err.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg, "danger"))
    );
  }
};

// edit product

export const editProduct = (productId, formData) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.put(
      `http://localhost:9000/api/products/updateproduct/${productId}`,
      formData,
      config
    );
    dispatch(getAllProducts());
    console.log(res.data);
  } catch (err) {
    err.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg, "danger"))
    );
  }
};

export const toggleTrue = () => {
  return {
    type: TOGGLETRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLEFALSE,
  };
};

// delete product

export const deleteProduct = (productId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(
      `http://localhost:9000/api/products/deleteproduct/${productId}`,
      config
    );
    dispatch(getAllProducts());
  } catch (error) {
    console.log(error);
  }
};

// getone product

export const getOneProduct = (productId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:9000/api/products/getoneproduct/${productId}`,
      config
    );
    console.log(res.data);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

// add to cart

export const addToCart = (productId) => {
  return {
    type: ADDTOCART,
    payload: {
      id: productId,
    },
  };
};

//increment

export const increment = (productId) => {
  return {
    type: INCREMENT,
    payload: productId,
  };
};

//descrement

export const decrement = (productId) => {
  return {
    type: DESCREMENT,
    payload: productId,
  };
};

// rremove from cart

export const removeItem = (productId) => {
  return {
    type: REMOVEITEM,
    payload: {
      id: productId,
    },
  };
};
// filter

export const filterProduct = (status) => {
  return {
    type: FILTERPRODUCT,
    payload: status,
  };
};

//search
// export const searchProduct = (name) => {
//   return {
//     type: SEARCHPRODUCT,
//     payload: name,
//   };
// };
