import classNames from 'classnames/bind';
import { collection, query, where, getDocs } from 'firebase/firestore';

import { dbFireStore } from '~/Firebase';
import styles from './ProductCard.module.scss';

import { useEffect, useState } from 'react';
import AddCardButton from '~/components/AddCardEvent';

const cx = classNames.bind(styles);

function ProductCard({ data, typeOther }) {
    const [imgURL, setImgURL] = useState('');
    useEffect(() => {
        const FetchImageURL = async () => {
            const q = query(collection(dbFireStore, 'productAvatar'), where('serial', '==', data.serial));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setImgURL(doc.data().imageURL);
            });
        };

        FetchImageURL();
    }, [data.serial]);
    return (
        <div className={cx('wrapper')}>
            <div className={typeOther ? cx('image-other') : cx('image')}>
                <img src={imgURL} alt="productImage" />
            </div>
            <div className={cx('name')}>{data.name}</div>
            <div className={cx('price')}>{data.price}$</div>
            <div className={cx('btn-add-cart')}>
                <AddCardButton data={data} />
            </div>
        </div>
    );
}

export default ProductCard;
