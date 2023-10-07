import classNames from 'classnames/bind';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import styles from './AddCardButton.module.scss';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { themeButton, PrimaryTypography } from '../CustomMetarialUI/ThemeStyle';
import ModalHandleEvent from '~/components/ModaHandleEvent';
import { useState } from 'react';
import FormConfirm from './FormConfirm';
import { AppSlice } from '~/features/system/AppSlice';
import { ProductSlice } from '~/features/product/ProductSlice';
const cx = classNames.bind(styles);
function AddCardButton({ data }) {
    const dispatch = useDispatch();
    const [openConfirmForm, setOpenConfirmForm] = useState(false);
    const handleOpen = () => {
        dispatch(AppSlice.actions.increaseAmountProduct(1));
        dispatch(ProductSlice.actions.increaseTotalPrice(data.price));
        dispatch(ProductSlice.actions.addListProductCart({ name: data.name, price: data.price, serial: data.serial }));
        setOpenConfirmForm(true);
    };
    const handleClose = (e) => {
        setOpenConfirmForm(false);
    };
    return (
        <div className={cx('wrapper')}>
            <CustomComponentMUI comp={Button} themeCustom={themeButton} variant="redBackground" onClick={handleOpen}>
                <CustomComponentMUI
                    comp={Typography}
                    themeCustom={PrimaryTypography}
                    color="primary"
                    variant="typeSmall"
                >
                    Add to Cart
                </CustomComponentMUI>
            </CustomComponentMUI>
            <ModalHandleEvent open={openConfirmForm} handleClose={handleClose}>
                <FormConfirm data={data} handleClose={handleClose} />
            </ModalHandleEvent>
        </div>
    );
}

export default AddCardButton;
