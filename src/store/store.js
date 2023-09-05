import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '~/features/product/ProductSlice';
import UserSlice from '~/features/user/UserSlice';
const store = configureStore({
    reducer: {
        user: UserSlice,
        product: ProductSlice,
    },
});

export default store;
