import axios from "axios";
import {
  GETALLUSERS,
  GET_USER,
  LOGOUT,
  USER_FAIL,
  USER_lOGIN,
  USER_REGGISTER,
} from "../types";
import { setAlert } from "./alertAction";

export const register = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:9000/api/auth/signup",
      formData
    );
    console.log(res.data);
    dispatch({
      type: USER_REGGISTER,
      payload: res.data,
    });
    navigate("/home");
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: USER_FAIL,
    });
    err.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg, "danger"))
    );
  }
};

//get auth user
export const current = () => async (dispatch) => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:9000/api/auth/current",
      config
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: USER_FAIL,
    });
  }
};
// login
export const login = (formData, navigate) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:9000/api/auth/signin",
      formData
    );
    console.log(res.data);
    dispatch({
      type: USER_lOGIN,
      payload: res.data,
    });
    navigate("/home");
  } catch (err) {
    console.log(err.response.data);
    dispatch({
      type: USER_FAIL,
    });
    err.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg, "danger"))
    );
  }
};

// logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// editUser

export const editUser = (formData, navigate) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.put(
      "http://localhost:9000/api/auth/updateuser",
      formData,
      config
    );
    dispatch(current());
    navigate("/profile");
  } catch (err) {
    err.response.data.errors.forEach((error) =>
      dispatch(setAlert(error.msg, "danger"))
    );
  }
};

// get all users

export const getAllUsers = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      "http://localhost:9000/api/auth/allusers",
      config
    );
    console.log(res);
    dispatch({
      type: GETALLUSERS,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// delet user

export const deleteUser = (userId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(
      `http://localhost:9000/api/auth/deleteuser/${userId}`,
      config
    );
    dispatch(getAllUsers());
  } catch (error) {
    console.log(error);
  }
};
