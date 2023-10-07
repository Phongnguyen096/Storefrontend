import { Button, Link, Typography, IconButton, Badge } from '@mui/material';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { PersonOutlineRounded, Logout, KeyboardArrowDown, ShoppingCart } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';

import { themeButton, LogoTypography, PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import SearchBar from '../../components/SearchBar';
import { userSlice } from '~/features/user/UserSlice';
import DropDownMenu from '~/components/DropdownMenu';
import { HEADER_TEXT, HEADER_BAR_CONTENT } from '~/config/Constant';
import ListMenu from '~/components/ListMenu';
import productService from '~/services/productService';
import ModalHandleEvent from '~/components/ModaHandleEvent';
import LoginForm from '~/components/LoginForm';

const cx = classNames.bind(styles);
function Header() {
    const dispatch = useDispatch();
    // selector redux
    const userSelector = useSelector((state) => state.user);
    const appSelector = useSelector((state) => state.app);
    //State open login form from button account
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = (e) => {
        setOpen(false);
    };
    const handleLogout = () => {
        dispatch(userSlice.actions.userLogout());
    };

    // set content for each lists menu of header bar
    const [headerBarContent, setHeaderBarContent] = useState(HEADER_BAR_CONTENT);
    useEffect(() => {
        let ContentHB = HEADER_BAR_CONTENT;
        ContentHB.forEach((item) => {
            if (item.listMenu && item.type === 'Product') {
                item.listMenu.forEach(async (e) => {
                    let textQuery = `${item.nameList.toUpperCase()}/${e.title.toUpperCase()}/TOP`;
                    let list = (await productService.getProduct(textQuery)).data.product;
                    //console.log(list);
                    e.content = list;
                });
            }
        });
        setHeaderBarContent(ContentHB);
    }, [headerBarContent]);

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
                                {HEADER_TEXT.LOGO}
                            </CustomComponentMUI>
                        </Link>
                    </div>
                    <div className={cx('slogan')}>
                        <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} color="primary">
                            {HEADER_TEXT.SLOGAN}
                        </CustomComponentMUI>
                    </div>
                </div>
                <div className={cx('search-bar')}>
                    <SearchBar />
                </div>
                {userSelector.isLogin && userSelector.userInfo.user.roleId === '2' ? (
                    <div>
                        {userSelector.userInfo.user.roleId}
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
                                {HEADER_TEXT.LOGIN_BTN}
                            </CustomComponentMUI>
                        </CustomComponentMUI>
                    </div>
                )}

                <ModalHandleEvent open={open} handleClose={handleClose}>
                    <LoginForm handleClose={handleClose} />
                </ModalHandleEvent>

                <div className={cx('cart-bnt')}>
                    <IconButton>
                        <Badge badgeContent={appSelector.amountProductCart} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </div>
            <div className={cx('header-bar')}>
                {headerBarContent.map((item) => {
                    return (
                        <div key={item.index} className={cx('button-header-bar')}>
                            <DropDownMenu nameBtn={item.nameList} icon={<KeyboardArrowDown />}>
                                {item.listMenu
                                    ? item.listMenu.map((e, index) => {
                                          return <ListMenu key={index} title={e.title} content={e.content} product />;
                                      })
                                    : HEADER_TEXT.EMPTY}
                            </DropDownMenu>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Header;
