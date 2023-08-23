import classNames from 'classnames/bind';
import { Button, Typography } from '@mui/material';
import { ArrowForwardIosOutlined } from '@mui/icons-material';

import styles from './CardInfomation.module.scss';
import { CustomComponentMUI } from '../CustomMetarialUI';
import { themeButton, PrimaryTypography } from '../CustomMetarialUI/ThemeStyle';

const cx = classNames.bind(styles);

function CardInfomation() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src="https://tongkhonhaccu.com/Data/upload/images/KyGui/OverView/6.png" alt="productImage" />
            </div>
            <div className={cx('name')}>GS Mini Mahogany</div>
            <div className={cx('price')}>500$</div>
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
            <div className={cx('btn-view-detail')}>
                <CustomComponentMUI
                    comp={Button}
                    themeCustom={themeButton}
                    variant="outline2"
                    endIcon={<ArrowForwardIosOutlined />}
                >
                    View Detail
                </CustomComponentMUI>
            </div>
        </div>
    );
}

export default CardInfomation;
