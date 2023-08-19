import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FieldGroupBackground from '~/components/FieldGroupBackground';
import Header from '~/layout/Header';

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
        </div>
    );
}

export default Home;
