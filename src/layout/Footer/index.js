import classNames from 'classnames/bind';
import { Typography } from '@mui/material';

import ListMenu from '~/components/ListMenu';
import styles from './Footer.module.scss';
import Icons from '~/components/IconsComponent';
import { CustomComponentMUI } from '~/components/CustomMetarialUI';
import { PrimaryTypography } from '~/components/CustomMetarialUI/ThemeStyle';
import { fbIcon, instagramIcon, tiktokIcon, youtubeIcon } from '~/components/IconsComponent/Icons';
import { FOOTER_LIST_SERVICE, FOOTER_TEXT } from '~/config/Constant';
const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-connect')}>
                <CustomComponentMUI
                    comp={Typography}
                    themeCustom={PrimaryTypography}
                    variant="typeLarge"
                    color="primary"
                >
                    Connect With Us
                </CustomComponentMUI>
                <div className={cx('connect-list')}>
                    <ul>
                        <li>
                            <a href="/">
                                <Icons iconItem={fbIcon} />
                            </a>
                            <span className={cx('title-link')}>FACEBOOK</span>
                        </li>
                        <li>
                            <a href="/">
                                <Icons iconItem={instagramIcon} />
                            </a>
                            <span className={cx('title-link')}>INSTAGRAM</span>
                        </li>
                        <li>
                            <a href="/">
                                <Icons iconItem={youtubeIcon} />
                            </a>
                            <span className={cx('title-link')}>YOUTUBE</span>
                        </li>
                        <li>
                            <a href="/">
                                <Icons iconItem={tiktokIcon} />
                            </a>
                            <span className={cx('title-link')}>TIKTOK</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('nav-footer-service')}>
                {FOOTER_LIST_SERVICE.map((item, index) => (
                    <ListMenu key={index} title={item.title} content={item.content} colorWhite />
                ))}
            </div>
            <div className={cx('footer-element')}>
                <div className={cx('app-information', 'footer-element-text')}>{FOOTER_TEXT.APP_INFO.toUpperCase()}</div>
                <div className={cx('shop-information', 'footer-element-text')}>
                    {FOOTER_TEXT.SHOP_INFO.toUpperCase()}
                </div>
                <div className={cx('license-text', 'footer-element-text')}>
                    {FOOTER_TEXT.LICENSE_TEXT.toUpperCase()}
                </div>
            </div>
        </div>
    );
}

export default Footer;
