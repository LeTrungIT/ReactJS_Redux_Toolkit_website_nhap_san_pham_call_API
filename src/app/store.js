import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import  EditingProductSlice from '../features/EditingProductSlice';
import  productsSlice from '../features/productsSlice';


const rootReducer=combineReducers({
    products: productsSlice,
    EditingProduct: EditingProductSlice
  })
const store = configureStore({
    reducer: rootReducer,
  
  })
  export default store;