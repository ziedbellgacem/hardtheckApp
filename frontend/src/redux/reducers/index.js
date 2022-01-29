import { combineReducers } from "redux";
import authReducer from "./authReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  authReducer,
  alertReducer,
  productReducer,
  commentReducer,
});
export default rootReducer;
