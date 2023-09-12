import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '~/features/product/ProductSlice';
import AppSlice from '~/features/system/AppSlice';
import UserSlice from '~/features/user/UserSlice';
const store = configureStore({
    reducer: {
        user: UserSlice,
        product: ProductSlice,
        app: AppSlice,
    },
});

export default store;
