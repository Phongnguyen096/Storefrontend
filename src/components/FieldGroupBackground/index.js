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
                <CustomComponentMUI
                    comp={Typography}
                    themeCustom={PrimaryTypography}
                    color="primary"
                    variant="typeLarge"
                >
                    {textContent}
                </CustomComponentMUI>
                <CustomComponentMUI
                    comp={Typography}
                    themeCustom={PrimaryTypography}
                    color="primary"
                    variant=" typeMedium"
                >
                    {textDescription}
                </CustomComponentMUI>
                <div>{textDescription}</div>
                <CustomComponentMUI comp={Button} color="red" themeCustom={themeButton} variant="contained">
                    <CustomComponentMUI
                        comp={Typography}
                        themeCustom={PrimaryTypography}
                        color="primary"
                        variant=" typeMedium"
                    >
                        Shop now
                    </CustomComponentMUI>
                </CustomComponentMUI>
            </div>
        </div>
    );
}

export default FieldGroupBackground;
