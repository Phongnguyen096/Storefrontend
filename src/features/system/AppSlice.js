import { createSlice } from '@reduxjs/toolkit';

export const AppSlice = createSlice({
    name: 'app',
    initialState: {
        checkOpenMenu: true,
    },
    reducers: {
        setHandleMenu: (state, action) => {
            state.checkOpenMenu = action.payload;
        },
    },
});

export default AppSlice.reducer;
