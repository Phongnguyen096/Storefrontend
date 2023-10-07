import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

import styles from './Product.module.scss';
import { dbFireStore } from '~/Firebase';
import productService from '~/services/productService';
import { ProductSlice } from '~/features/product/ProductSlice';
import DefaultLayout from '~/layout/DefaultLayout';
const cx = classNames.bind(styles);

function Product() {
    // product selector
    const productSelector = useSelector((state) => state.product);
    //get params url
    const params = useParams();
    //
    const dispatch = useDispatch();
    //state active image gallery
    const [active, setActive] = useState(0);
    //state imageURL product
    const [imageURL, setImageURL] = useState([]);
    //state currency  USD -> VND
    const [Currency, setCurrency] = useState('USD');
    useEffect(() => {
        const testData = async () => {
            try {
                if (Object.keys(productSelector.productData).length === 0) {
                    let productData = (await productService.getProduct(params.id)).data.product;
                    dispatch(ProductSlice.actions.loadProduct(productData));
                }
                let serialProduct = productSelector.productData.serial;
                const imageRef = collection(dbFireStore, 'productImage');
                const q = query(imageRef, where('serial', '==', serialProduct));

                onSnapshot(q, (snapshot) => {
                    let listImage = [];
                    snapshot.docs.forEach((doc) => {
                        let url = doc.data().imageURL;
                        listImage.push(url);
                        setImageURL(listImage);
                    });
                });
            } catch (e) {
                console.log('Error getting cached document:', e);
            }
        };

        testData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productSelector.productData.id]);
    return (
        <DefaultLayout>
            <div className={cx('wrapper')}>
                <div className={cx('name-product')}>{productSelector.productData.name}</div>
                <div className={cx('descriptions')}>
                    {(productSelector.productData.typeID === 1 && 'ACOUSTIC') ||
                        (productSelector.productData.typeID === 2 && 'CLASSIC') ||
                        (productSelector.productData.typeID === 3 && 'ELECTRIC') ||
                        (productSelector.productData.typeID === 4 && 'OTHER')}
                    <span className={cx('divider')} />
                    {Object.keys(productSelector.productData).length === 0
                        ? ''
                        : productSelector.productData.description.toUpperCase()}
                </div>
                <div className={cx('product-details')}>
                    <div className={cx('series')}>
                        <span>Series: </span>
                        <div
                            className={cx('series-number')}
                        >{`${productSelector.productData.typeID}${productSelector.productData.id}`}</div>
                    </div>
                </div>
                <div className={cx('product-area')}>
                    <div className={cx('left-area', 'left')}>
                        <div className={cx('photo-swipe-gallery')}>
                            {imageURL.map((url, index) => (
                                <img
                                    key={index}
                                    className={active === index ? cx('image-gallery', 'active') : cx('image-gallery')}
                                    src={url}
                                    alt="img-gallery"
                                />
                            ))}
                        </div>
                        <div className={cx('thumbs')}>
                            {imageURL.map((url, index) => (
                                <img
                                    key={index}
                                    className={active === index ? cx('image-thumbs', 'focus') : cx('image-thumbs')}
                                    src={url}
                                    alt="img-gallery"
                                    onClick={() => setActive(index)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={cx('right-area', 'right')}>
                        <div className={cx('shopping')}>
                            <div className={cx('price-container')}>
                                <div className={cx('price')}>
                                    <span className={cx('currency-icon')}>$</span>
                                    <span className={cx('number')}>
                                        {Currency === 'USD'
                                            ? productSelector.productData.price
                                            : productSelector.productData.price * 24000}
                                    </span>
                                    <span className={cx('currency')}>{Currency}</span>
                                </div>
                                <div className={cx('currency-choose')}>
                                    <span
                                        className={Currency === 'USD' ? cx('choose') : cx('element-choose')}
                                        onClick={() => setCurrency('USD')}
                                    >
                                        USD
                                    </span>
                                    <span
                                        className={Currency === 'VND' ? cx('choose') : cx('element-choose')}
                                        onClick={() => setCurrency('VND')}
                                    >
                                        VND
                                    </span>
                                </div>
                            </div>
                            <div className={cx('shipping-promotion')}>Free 2-Day Shipping</div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Product;
