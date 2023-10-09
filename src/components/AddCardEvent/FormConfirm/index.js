import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Done, Clear } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './FormConfirm.module.scss';
import { dbFireStore } from '~/Firebase';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { PrimaryTypography, themeButton } from '~/components/CustomMetarialUI/ThemeStyle';
const cx = classNames.bind(styles);

const FormConfirm = React.forwardRef(({ handleClose, data }, ref) => {
    const [imgURL, setImgURL] = useState('');
    //selector
    const appSelector = useSelector((state) => state.app);
    const productSelector = useSelector((state) => state.product);
    //
    const navigate = useNavigate();

    useEffect(() => {
        const FetchImageURL = async () => {
            const q = query(collection(dbFireStore, 'productAvatar'), where('serial', '==', data.serial));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setImgURL(doc.data().imageURL);
            });
        };

        FetchImageURL();
    }, [data.serial]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-form')}>
                <div className={cx('notification')}>
                    <div className={cx('done-icon')}>
                        <Done />
                    </div>
                    <div className={cx('text-notification')}>Product added to cart</div>
                </div>
                <div className={cx('close-btn')}>
                    <IconButton onClick={handleClose}>
                        <Clear />
                    </IconButton>
                </div>
            </div>
            <div className={cx('product-description')}>
                <div className={cx('image-product')}>
                    <div className={cx('name-product')}>{`${data.name},${data.description}`}</div>
                    <img src={imgURL} alt="productImage" />
                </div>
                <div className={cx('confirm-shopping')}>
                    <div
                        className={cx('amount-product-cart')}
                    >{`Have ${appSelector.amountProductCart} product in cart | ${productSelector.totalPrice} $`}</div>
                    <div className={cx('btn-continue')}>
                        <button onClick={handleClose}>Continue Shopping</button>
                    </div>
                    <div className={cx('view-cart-btn')}>
                        <CustomComponentMUI comp={Button} themeCustom={themeButton} variant="redBackground">
                            <CustomComponentMUI
                                comp={Typography}
                                themeCustom={PrimaryTypography}
                                color="primary"
                                variant="typeSmall"
                                onClick={() => {
                                    navigate('/cart');
                                }}
                            >
                                View Cart
                            </CustomComponentMUI>
                        </CustomComponentMUI>
                    </div>
                    <div className={cx('price')}>{data.price}$</div>
                </div>
            </div>
        </div>
    );
});
export default FormConfirm;
