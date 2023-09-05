import classNames from 'classnames/bind';
import { Link, Outlet } from 'react-router-dom';

import styles from './Products.module.scss';

const cx = classNames.bind(styles);
function Products() {
    return (
        <div className={cx('wrapper')}>
            <Link to={'/products/acoustic'}>Acoustic</Link>
            <Link to={'/products/classic'}>Classic</Link>
            <Link to={'/products/electric'}>Electric</Link>
            <Outlet />
        </div>
    );
}

export default Products;
