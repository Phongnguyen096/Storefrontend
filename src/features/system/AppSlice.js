import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
    name: 'app',
    initialState: {
        checkOpenMenu: true,
        amountProductCart: 0,
    },
    reducers: {
        setHandleMenu: (state, action) => {
            state.checkOpenMenu = action.payload;
        },
        increaseAmountProduct: (state, action) => {
            state.amountProductCart += action.payload;
        },
        decreaseAmountProduct: (state, action) => {
            state.amountProductCart -= 1;
        },
    },
});

export default AppSlice.reducer;
