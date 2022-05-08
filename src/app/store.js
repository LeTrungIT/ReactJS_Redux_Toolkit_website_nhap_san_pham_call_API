import { configureStore } from '@reduxjs/toolkit';
import EditingProductSlice from '../features/EditingProductSlice';
import productsSlice from '../features/productsSlice';

const store = configureStore({
    reducer: {
        products: productsSlice,
        EditingProduct: EditingProductSlice,
    },
});
export default store;
