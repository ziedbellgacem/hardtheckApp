import { GETALLCOMMENTS } from "../types";

const initState = {
  comments: [],
  comment: null,
};

function commentReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETALLCOMMENTS:
      return {
        ...state,
        comments: payload.comments,
      };

    default:
      return state;
  }
}
export default commentReducer;
