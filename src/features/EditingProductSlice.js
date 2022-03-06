import { createSlice } from "@reduxjs/toolkit";

const data = {};

export const EditingProductSlice = createSlice({
  name: "EditingProduct",
  initialState: data,
  reducers: {
    EDIT_PRODUCT: (state, action) => {
      return action.payload;
    },
  },
});

export const { reducer, actions } = EditingProductSlice;
export const { EDIT_PRODUCT } = actions;
export default reducer;
