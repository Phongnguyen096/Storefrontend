import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLogin: false,
        userInfo: {
            data: {
                roleId: '',
            },
        },
    },
    reducers: {
        userLoginSuccess: (state, action) => {
            state.isLogin = true;
            state.userInfo = action.payload;
        },
        userLoginFail: (state, action) => {
            state.isLogin = false;
        },
        userLogout: (state, action) => {
            state.isLogin = false;
            state.userInfo = {
                user: {
                    roleId: '',
                },
            };
        },
    },
});

export default userSlice.reducer;
