import classNames from 'classnames/bind';
import { Typography, Button } from '@mui/material';
import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';

import styles from './Home.module.scss';
import FieldGroupBackground from '~/components/FieldGroupBackground';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import ProductCard from '~/components/ProductCard';
import productService from '~/services/productService';
import { themeButton } from '~/components/CustomMetarialUI/ThemeStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductSlice } from '~/features/product/ProductSlice';
import DefaultLayout from '~/layout/DefaultLayout';

const cx = classNames.bind(styles);
function Home() {
    //redux
    const dispatch = useDispatch();
    // router
    const navigate = useNavigate();
    // state ->top product
    const [topProduct, setTopProduct] = useState([]);
    //load data from sever
    useEffect(() => {
        return async () => {
            let responseProduct = await productService.getProduct('TOP');
            if (responseProduct && responseProduct.data.errorCode === 0) {
                setTopProduct(responseProduct.data.product);
            }
        };
    }, []);
    return (
        <DefaultLayout>
            <div className={cx('wrapper')}>
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
                    <div className={cx('top-product')}>
                        {topProduct.map((item, index) => {
                            return (
                                <div key={index} className={cx('top-product-item')}>
                                    <ProductCard name={item.name} price={item.price} imgUrl={item.imgUrl} />
                                    <div className={cx('btn-view-detail')}>
                                        <CustomComponentMUI
                                            comp={Button}
                                            themeCustom={themeButton}
                                            variant="outline2"
                                            endIcon={<ArrowForwardIosOutlined />}
                                            onClick={() => {
                                                dispatch(ProductSlice.actions.loadProduct(item));
                                                navigate(`products/${item.typeID}/${item.description}/${item.id}`);
                                            }}
                                        >
                                            View Detail
                                        </CustomComponentMUI>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
