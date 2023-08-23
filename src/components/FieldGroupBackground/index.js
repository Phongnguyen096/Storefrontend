import classNames from 'classnames/bind';

import styles from './FileGroupBackground.module.scss';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { Button, Typography } from '@mui/material';
import { PrimaryTypography, themeButton } from '~/components/CustomMetarialUI/ThemeStyle';

const cx = classNames.bind(styles);

function FieldGroupBackground({ textContent, textDescription }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('title')}>
                    <CustomComponentMUI
                        comp={Typography}
                        themeCustom={PrimaryTypography}
                        color="primary"
                        variant="typeLarge"
                    >
                        {textContent}
                    </CustomComponentMUI>
                </div>
                <div className={cx('description')}>
                    <CustomComponentMUI
                        comp={Typography}
                        themeCustom={PrimaryTypography}
                        color="primary"
                        variant="typeMedium"
                    >
                        {textDescription}
                    </CustomComponentMUI>
                </div>
                <div className={cx('btn-shopping')}>
                    <CustomComponentMUI comp={Button} themeCustom={themeButton} variant="redBackground">
                        <CustomComponentMUI
                            comp={Typography}
                            themeCustom={PrimaryTypography}
                            color="primary"
                            variant="typeSmall"
                        >
                            Shop now
                        </CustomComponentMUI>
                    </CustomComponentMUI>
                </div>
            </div>
        </div>
    );
}

export default FieldGroupBackground;
