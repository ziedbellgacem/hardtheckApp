import {
  GETALLPRODUCTS,
  GET_PRODUCT,
  ADDTOCART,
  REMOVEITEM,
  INCREMENT,
  DESCREMENT,
  TOGGLETRUE,
  TOGGLEFALSE,
  FILTERPRODUCT,
} from "../types";

const initState = {
  products: [],
  product: null,
  loading: true,
  cart: [],
  edit: false,
  filter: "",
  search: "",
};

function productReducer(state = initState, { type, payload }) {
  switch (type) {
    case GETALLPRODUCTS:
      return {
        ...state,
        products: payload.products,
        loading: false,
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload.product,
        loading: false,
      };
    case ADDTOCART:
      // get the items data from products
      const item = state.products.find((product) => product._id === payload.id);
      // check if item in cart already
      const inCart = state.cart.find((item) =>
        item._id === payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === payload.id ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case REMOVEITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== payload.id),
      };
    case INCREMENT:
      return {
        ...state,
        cart: state.cart.map((el) =>
          el._id === payload
            ? { ...el, qty: el.qty + 1 }
            : { ...el, qty: el.qty }
        ),
      };
    case DESCREMENT:
      return {
        ...state,
        cart: state.cart.map((el) =>
          el._id === payload
            ? {
                ...el,
                qty: el.qty > 0 ? el.qty - 1 : el.qty,
              }
            : { ...el, qty: el.qty }
        ),
      };
    case TOGGLETRUE:
      return {
        ...state,
        edit: true,
      };
    case TOGGLEFALSE:
      return {
        ...state,
        edit: false,
      };
    case FILTERPRODUCT:
      return {
        ...state,
        filter: payload,
      };
    // case SEARCHPRODUCT:
    //   return {
    //     ...state,
    //     search: payload,
    //   };
    default:
      return state;
  }
}

export default productReducer;
