import classNames from 'classnames/bind';
import { Typography } from '@mui/material';

import styles from './Home.module.scss';
import FieldGroupBackground from '~/components/FieldGroupBackground';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import Header from '~/layout/Header';
import CardInfomation from '~/components/CardInfomation';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('image-side')}>
                <FieldGroupBackground
                    textContent="Special Offer: Buy an 814ce, Get a Free GS Mini Mahogany"
                    textDescription="Celebrate 814 Day by adding a travel-friendly acoustic guitar when you buy our flagship Grand Auditorium. Valid August 14, 2023 only"
                />
            </div>
            <div className={cx('product-pick-model')}>
                <div className={cx('title-pick-model')}>
                    <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} variant="typeTitle">
                        Product Pick Models
                    </CustomComponentMUI>
                </div>
                <div className={cx('best-product')}>
                    <CardInfomation />
                </div>
            </div>
        </div>
    );
}

export default Home;
