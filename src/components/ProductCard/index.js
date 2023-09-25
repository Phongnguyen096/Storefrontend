import classNames from 'classnames/bind';
import { Button, Typography } from '@mui/material';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { dbFireStore } from '~/Firebase';
import styles from './ProductCard.module.scss';
import { CustomComponentMUI } from '../CustomMetarialUI';
import { themeButton, PrimaryTypography } from '../CustomMetarialUI/ThemeStyle';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ProductCard({ name, price, serial }) {
    const [imgURL, setImgURL] = useState('');
    useEffect(() => {
        const FetchImageURL = async () => {
            const q = query(collection(dbFireStore, 'productAvatar'), where('serial', '==', serial));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                setImgURL(doc.data().imageURL);
            });
        };

        FetchImageURL();
    }, [serial]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={imgURL} alt="productImage" />
            </div>
            <div className={cx('name')}>{name}</div>
            <div className={cx('price')}>{price}$</div>
            <div className={cx('btn-add-cart')}>
                <CustomComponentMUI comp={Button} themeCustom={themeButton} variant="redBackground">
                    <CustomComponentMUI
                        comp={Typography}
                        themeCustom={PrimaryTypography}
                        color="primary"
                        variant="typeSmall"
                    >
                        Add to Cart
                    </CustomComponentMUI>
                </CustomComponentMUI>
            </div>
        </div>
    );
}

export default ProductCard;
