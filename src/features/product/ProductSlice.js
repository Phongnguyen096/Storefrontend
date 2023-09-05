import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productData: {},
        listProduct: [],
    },
    reducers: {
        loadProduct: (state, action) => {
            state.productData = action.payload;
        },
        loadListProduct: (state, action) => {
            state.listProduct = action.payload;
        },
        productReset: (state, action) => {
            state.productData = {};
            state.listProduct = [];
        },
    },
});

export default ProductSlice.reducer;
