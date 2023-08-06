import { Button, Link, Typography, IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { themeButton, LogoTypography, PrimaryTypography } from '~/components/ThemeStyle';
import { PersonOutlineRounded, Logout } from '@mui/icons-material';
import ThemeProviderComponent from '~/components/ThemeProvider/index.js';
import SearchBar from '../SearchBar';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '~/features/user/UserSlice';
import ModalLoginForm from '~/components/LoginForm/ModalLoginForm';

const cx = classNames.bind(styles);
function Header() {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);
    // const [login , setLogin] = useState(true) ;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        setOpen(false);
    };
    const handleLogout = () => {
        dispatch(userSlice.actions.userLogout());
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-element')}>
                <div className={cx('logo-content')}>
                    <div className={cx('logo')}>
                        <Link href="/">
                            <ThemeProviderComponent
                                comp={Typography}
                                themeCustom={LogoTypography}
                                variant="h4"
                                color="primary"
                                type="button"
                            >
                                Chem
                            </ThemeProviderComponent>
                        </Link>
                    </div>
                    <div className={cx('slogan')}>
                        <ThemeProviderComponent comp={Typography} themeCustom={PrimaryTypography} color="primary">
                            Music for Life.
                        </ThemeProviderComponent>
                    </div>
                </div>
                <div className={cx('search-bar')}>
                    <SearchBar />
                </div>
                {userSelector.isLogin ? (
                    <div>
                        {userSelector.userInfo.user.email}
                        <IconButton aria-label="logout" onClick={handleLogout}>
                            <Logout />
                        </IconButton>
                    </div>
                ) : (
                    <div className={cx('btn-login')}>
                        <ThemeProviderComponent
                            comp={Button}
                            themeCustom={themeButton}
                            color="primary"
                            variant="normal"
                            onClick={handleOpen}
                            startIcon={<PersonOutlineRounded color="info" />}
                        >
                            <ThemeProviderComponent
                                comp={Typography}
                                themeCustom={PrimaryTypography}
                                color="primary"
                                variant="typeSmall"
                            >
                                Account
                            </ThemeProviderComponent>
                        </ThemeProviderComponent>
                    </div>
                )}

                <ModalLoginForm open={open} handleClose={handleClose} />
            </div>
            <div className={cx('list-product')}>List Product</div>
        </div>
    );
}

export default Header;
