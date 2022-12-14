import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import callAPI from '../utils/apiCaller';

export const productsSlice = createSlice({
    name: 'products',
    initialState: { status: 'idle', data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FETCH_DATA_REQUEST.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(FETCH_DATA_REQUEST.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = 'idle';
            })
            .addCase(ADD_PRODUCT_REQUEST.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(DELETE_PRODUCT_REQUEST.fulfilled, (state, action) => {
                const index = state.data.findIndex((ele) => ele.id === action.payload.id);
                state.data.splice(index, 1);
            })
            .addCase(UPDATE_PRODUCT_REQUEST.fulfilled, (state, action) => {
                const index = state.data.findIndex((ele) => ele.id === action.payload.id);
                if (index && index !== -1) state.data[index] = action.payload;
            });
    },
});

export const FETCH_DATA_REQUEST = createAsyncThunk('products/fetchDataRequest', async () => {
    const res = await callAPI('products', 'GET', null);
    return res.data;
});

export const ADD_PRODUCT_REQUEST = createAsyncThunk('products/addProductRequest', async (newProduct) => {
    const res = await callAPI('products', 'POST', newProduct);
    return res.data;
});
export const DELETE_PRODUCT_REQUEST = createAsyncThunk('products/deleteProductRequest', async (id) => {
    const res = await callAPI(`products/${id}`, 'DELETE', null);
    return res.data;
});

export const UPDATE_PRODUCT_REQUEST = createAsyncThunk('products/updateProductRequest', async (newProduct) => {
    const res = await callAPI(`products/${newProduct.id}`, 'PUT', newProduct);
    return res.data;
});

const { reducer, actions } = productsSlice;
export const { FETCH_DATA, DELETE_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT } = actions;
export default reducer;
