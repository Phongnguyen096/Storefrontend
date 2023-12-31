import { createSlice } from '@reduxjs/toolkit';

export const ProductSlice = createSlice({
    name: 'product',
    initialState: {
        productData: {},
        listProduct: [],
        totalPrice: 0,
        listProductCart: [],
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
        totalPrice: (state, action) => {
            state.totalPrice = action.payload;
        },
        increaseTotalPrice: (state, action) => {
            state.totalPrice += action.payload;
        },
        decreaseTotalPrice: (state, action) => {
            state.totalPrice -= action.payload;
        },
        addListProductCart: (state, action) => {
            state.listProductCart = [...state.listProductCart, action.payload];
        },
        increaseAmountProductCart: (state, action) => {
            state.listProductCart.every((e) => {
                if (e.serial === action.payload) {
                    e.amount += 1;
                    return false;
                }
                return true;
            });
        },
    },
});

export default ProductSlice.reducer;
