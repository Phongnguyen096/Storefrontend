import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';

import styles from './DropdownMenu.module.scss';
import { CustomComponentMUI } from '../CustomMetarialUI';
import { themeButton } from '../CustomMetarialUI/ThemeStyle';
import { useDispatch, useSelector } from 'react-redux';
import { AppSlice } from '~/features/system/AppSlice';

const cx = classNames.bind(styles);

function DropDownMenu({ nameBtn, children, icon }) {
    const dispatch = useDispatch();
    const AppSelector = useSelector((state) => state.app);
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    const handleClick = () => {
        setOpen(!open);
    };
    useEffect(() => {
        let checkMenu = () => {
            //set state open is false when set redux state app.checkOpenMenu = false
            if (!AppSelector.checkOpenMenu) {
                setOpen(false);
            }
        };
        let handlerClickOutSide = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        checkMenu();
        document.addEventListener('mousedown', handlerClickOutSide);

        return () => {
            document.removeEventListener('mousedown', handlerClickOutSide);
            // when component dismount reset state app.checkOpenMenu
            dispatch(AppSlice.actions.setHandleMenu(true));
        };
    }, [AppSelector.checkOpenMenu, dispatch, open]);
    return (
        <div className={cx('wrapper')} ref={menuRef}>
            <CustomComponentMUI
                comp={Button}
                themeCustom={themeButton}
                color="primary"
                variant="normal"
                endIcon={icon}
                onClick={handleClick}
            >
                {nameBtn}
            </CustomComponentMUI>
            <div
                className={open && AppSelector.checkOpenMenu ? cx('drop-menu', 'active') : cx('drop-menu', 'inactive')}
            >
                {children}
            </div>
        </div>
    );
}

export default DropDownMenu;
