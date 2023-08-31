import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

import styles from './DropdownMenu.module.scss';
import { CustomComponentMUI } from '../CustomMetarialUI';
import { themeButton } from '../CustomMetarialUI/ThemeStyle';

const cx = classNames.bind(styles);

function DropDownMenu({ nameBtn, children }) {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
    const handleClick = () => {
        setOpen(!open);
    };
    useEffect(() => {
        let handlerClickOutSide = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handlerClickOutSide);

        return () => {
            document.removeEventListener('mousedown', handlerClickOutSide);
        };
    });
    return (
        <div className={cx('wrapper')} ref={menuRef}>
            <CustomComponentMUI
                comp={Button}
                themeCustom={themeButton}
                color="primary"
                variant="normal"
                endIcon={<KeyboardArrowDown />}
                onClick={handleClick}
            >
                {nameBtn}
            </CustomComponentMUI>
            <div className={open ? cx('drop-menu', 'active') : cx('drop-menu', 'inactive')}>{children}</div>
        </div>
    );
}

export default DropDownMenu;
