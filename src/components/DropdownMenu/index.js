import { useState } from 'react';
import { Button, Popover } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { CustomComponentMUI } from '../CustomMetarialUI';
import { themeButton, PopoverTheme } from '../CustomMetarialUI/ThemeStyle';

function DropDownMenu({ nameBtn, children }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <CustomComponentMUI
                comp={Button}
                themeCustom={themeButton}
                color="primary"
                variant="normal"
                endIcon={<KeyboardArrowDown />}
                onClick={handleClick}
                aria-controls={openMenu ? 'PopoperId' : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? 'true' : undefined}
                disableElevation
            >
                {nameBtn}
            </CustomComponentMUI>
            <CustomComponentMUI
                comp={Popover}
                themeCustom={PopoverTheme}
                id="PopoperId"
                open={openMenu}
                anchorEl={anchorEl}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                anchorPosition={{ left: 0, top: 160 }}
            >
                {children}
            </CustomComponentMUI>
        </>
    );
}

export default DropDownMenu;
