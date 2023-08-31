import classNames from 'classnames/bind';
import { Button, Typography } from '@mui/material';

import styles from './ProductCard.module.scss';
import { CustomComponentMUI } from '../CustomMetarialUI';
import { themeButton, PrimaryTypography } from '../CustomMetarialUI/ThemeStyle';

const cx = classNames.bind(styles);

function ProductCard({ name, price, imgUrl }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={imgUrl} alt="productImage" />
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
