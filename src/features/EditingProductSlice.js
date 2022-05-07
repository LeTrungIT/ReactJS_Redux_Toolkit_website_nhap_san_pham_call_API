import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import callAPI from "../utils/apiCaller";




export const EditingProductSlice = createSlice({
  name: "EditingProduct",
  initialState: {status: 'idle', data: {}},
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(EDIT_PRODUCT_REQUEST.pending, (state, action) => {
      state.status = 'loading';
    }).addCase(EDIT_PRODUCT_REQUEST.fulfilled, (state, action) => {
      state.data=action.payload;
      state.status = 'idle';
      
    })
  }

});

export const EDIT_PRODUCT_REQUEST=createAsyncThunk('EditingProduct/editProductRequest', async (id) => {
  const res=await callAPI(`products/${id}`, "GET", null);
  return res.data;

})

export const { reducer, actions } = EditingProductSlice;
export const { EDIT_PRODUCT } = actions;
export default reducer;
