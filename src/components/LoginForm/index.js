import classNames from 'classnames/bind';
import { TextField, Box, FormControlLabel, Checkbox, Button, Grid, Link, Divider } from '@mui/material';
import { Google, Facebook } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import React from 'react';

import styles from './LoginForm.module.scss';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { themeButton } from '~/components/CustomMetarialUI/ThemeStyle';
import handleLoginApi from '~/services/userService';
import { userSlice } from '~/features/user/UserSlice';
const cx = classNames.bind(styles);
const LoginForm = React.forwardRef(({ handleClose }, ref) => {
    const dispatch = useDispatch();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let email = data.get('email');
        let password = data.get('password');
        let res = (await handleLoginApi({ email, password })).data;
        if (res.errCode === 1) {
            dispatch(userSlice.actions.userLoginSuccess(res));
            handleClose();
        }
    };
    return (
        <div className={cx('wrapper')} ref={ref}>
            <div className={cx('login-form-account')}>
                <div className={cx('title-login1')}>Login into your account</div>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
                <Divider orientation="vertical" flexItem></Divider>
            </div>
            <div className={cx('bulkhead')}>
                <Divider orientation="vertical" variant="middle" />
            </div>
            <div className={cx('login-form-another')}>
                <div className={cx('title-login2')}>Login with another provider</div>
                <CustomComponentMUI
                    comp={Button}
                    themeCustom={themeButton}
                    startIcon={<Google />}
                    fullWidth
                    color="neutral"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Google
                </CustomComponentMUI>
                <CustomComponentMUI
                    comp={Button}
                    themeCustom={themeButton}
                    startIcon={<Facebook />}
                    fullWidth
                    color="neutral"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Facebook
                </CustomComponentMUI>
            </div>
        </div>
    );
});

export default LoginForm;
