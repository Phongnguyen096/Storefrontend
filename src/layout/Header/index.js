import { Button, Link, Typography, IconButton } from '@mui/material';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { PersonOutlineRounded, Logout } from '@mui/icons-material';
import React, { useState } from 'react';

import { themeButton, LogoTypography, PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import SearchBar from '../../components/SearchBar';
import { userSlice } from '~/features/user/UserSlice';
import ModalLoginForm from '~/components/LoginForm/ModalLoginForm';
import { HeaderContent, HeaderBar } from '~/config/Constants.config';
import DropDownMenu from '~/components/DropdownMenu';

const cx = classNames.bind(styles);
function Header() {
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);

    //State open login form from button account
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        setOpen(false);
    };
    const handleLogout = () => {
        dispatch(userSlice.actions.userLogout());
    };

    //State open menu from header bar

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-element')}>
                <div className={cx('logo-content')}>
                    <div className={cx('logo')}>
                        <Link href="/" underline="none">
                            <CustomComponentMUI
                                comp={Typography}
                                themeCustom={LogoTypography}
                                variant="h4"
                                color="primary"
                                type="button"
                            >
                                {HeaderContent.LogoText}
                            </CustomComponentMUI>
                        </Link>
                    </div>
                    <div className={cx('slogan')}>
                        <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} color="primary">
                            {HeaderContent.SloganText}
                        </CustomComponentMUI>
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
                        <CustomComponentMUI
                            comp={Button}
                            themeCustom={themeButton}
                            color="primary"
                            variant="normal"
                            onClick={handleOpen}
                            startIcon={<PersonOutlineRounded color="warning" />}
                        >
                            <CustomComponentMUI
                                comp={Typography}
                                themeCustom={PrimaryTypography}
                                color="primary"
                                variant="typeSmall"
                            >
                                {HeaderContent.textBnt}
                            </CustomComponentMUI>
                        </CustomComponentMUI>
                    </div>
                )}

                <ModalLoginForm open={open} handleClose={handleClose} />
            </div>
            <div className={cx('header-bar')}>
                {HeaderBar.map((item) => (
                    <div key={item.index} className={cx('button-header-bar')}>
                        <DropDownMenu nameBtn={item.name}>{item.name}</DropDownMenu>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;
