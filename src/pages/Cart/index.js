import classNames from 'classnames/bind';
import styles from './CartPage.module.scss';
const cx = classNames.bind(styles);

function CartPage() {
    return <div className={cx('wrapper')}>cart</div>;
}

export default CartPage;
