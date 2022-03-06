import { createSlice } from "@reduxjs/toolkit";
import callAPI from "../utils/apiCaller";

const data = [];

export const productsSlice = createSlice({
  name: "products",
  initialState: data,
  reducers: {
    FETCH_DATA: (state, action) => {
      return action.payload;
    },
    FETCH_DATA_REQUEST: (state, action) => {
      return (dispatch) => {
        return callAPI("products", "GET", null).then((res) => {
          dispatch(FETCH_DATA(res.data));
        });
      };
    },
    DELETE_PRODUCT: (state, action) => {
      const index = state.findIndex((ele) => {
        return ele.id === action.payload;
      });
      state.splice(index, 1);
    },
    ADD_PRODUCT: (state, action) => {
      state.push(action.payload);
    },
    UPDATE_PRODUCT: (state, action) => {
      const index = state.findIndex((ele) => {
        return ele.id === action.payload.id;
      });
      if (index && index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});
const { reducer, actions } = productsSlice;
export const { FETCH_DATA, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } =
  actions;
export default reducer;
