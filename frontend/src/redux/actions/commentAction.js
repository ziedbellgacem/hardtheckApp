import axios from "axios";
import { GETALLCOMMENTS } from "../types";

// get all comment
export const getAllComments = (productId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `http://localhost:9000/api/product/comments/${productId}/allcomments`,
      config
    );
    // dispatch(getOneProduct(productId));
    dispatch({ type: GETALLCOMMENTS, payload: res.data });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// add comment

export const addComment = (productId, text) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const res = await axios.post(
      `http://localhost:9000/api/product/comments/${productId}`,
      { text },
      config
    );
    console.log(res.data);

    dispatch(getAllComments(productId));
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (productId, commentId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      authorization: token,
    },
  };
  try {
    await axios.delete(
      `http://localhost:9000/api/product/comments/${productId}/deletecomment/${commentId}`,

      config
    );
    dispatch(getAllComments(productId));
  } catch (error) {
    console.log(error);
  }
};
