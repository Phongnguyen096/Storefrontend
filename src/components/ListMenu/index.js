import classNames from 'classnames/bind';
import { Typography } from '@mui/material';

import styles from './ListMenu.module.scss';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';

const cx = classNames.bind(styles);
function ListMenu({ title, content, colorWhite, product }) {
    return (
        <div className={cx('wrapper')}>
            <div className={colorWhite ? cx('title-menu', 'white-color') : cx('title-menu', 'default-color')}>
                <CustomComponentMUI comp={Typography} themeCustom={PrimaryTypography} variant="typeSmall">
                    {title.toUpperCase()}
                </CustomComponentMUI>
            </div>
            <div className={colorWhite ? cx('content-menu', 'border-color') : cx('content-menu', 'border-default')}>
                <ul>
                    {content ? (
                        content.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a
                                        href={
                                            product
                                                ? `products/${item.typeID}/${item.description}/${item.id}`
                                                : item.link
                                        }
                                        className={colorWhite ? cx('white-color') : cx('default-color')}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })
                    ) : (
                        <li>empty</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default ListMenu;
