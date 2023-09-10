import classNames from 'classnames/bind';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './ListMenu.module.scss';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import { themeButton } from '~/components/CustomMetarialUI/ThemeStyle';
import { ProductSlice } from '~/features/product/ProductSlice';

const cx = classNames.bind(styles);
function ListMenu({ title, content, colorWhite, product }) {
    //dispatch redux
    const dispatch = useDispatch();
    //navigation
    const navigate = useNavigate();

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
                                    <div className={colorWhite ? cx('white-color') : cx('default-color')}>
                                        <CustomComponentMUI
                                            comp={Button}
                                            themeCustom={themeButton}
                                            variant="menuButton"
                                            onClick={() => {
                                                dispatch(ProductSlice.actions.loadProduct(item));
                                                if (product) {
                                                    navigate(`products/${item.typeID}/${item.description}/${item.id}`);
                                                } else {
                                                    navigate(item.link);
                                                }
                                            }}
                                        >
                                            {item.name}
                                        </CustomComponentMUI>
                                    </div>
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
