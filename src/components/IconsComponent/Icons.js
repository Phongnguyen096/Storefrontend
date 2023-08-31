import classNames from 'classnames/bind';
import styles from './Icons.module.scss';

const cx = classNames.bind(styles);

export const fbIcon = ({ width = '3.2rem', hight = '3.2rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={hight} viewBox="0 0 53 52" className={className}>
        <g transform="translate(-57.931 16.5)">
            <g
                id={cx('rectangle_1')}
                transform="translate(57.931 -16.5)"
                strokeWidth="0.5"
                stroke="#ffff"
                fill="#2B2827"
            >
                <rect width="53" height="52" rx="16" stroke="none"></rect>
                <rect x="0.5" y="0.5" width="52" height="51" rx="15.5" fill="none"></rect>
            </g>
            <path
                className="icon"
                id={cx('icon-svg')}
                data-name="Icon awesome-facebook-f"
                d="M11.932,11.6,12.5,7.869H8.923V5.447a1.866,1.866,0,0,1,2.1-2.017h1.628V.252A19.856,19.856,0,0,0,9.766,0C6.816,0,4.888,1.788,4.888,5.024V7.869H1.609V11.6H4.888v9.023H8.923V11.6Z"
                transform="translate(77.358 -1.313)"
                fill="#fff"
            ></path>
        </g>
    </svg>
);

export const instagramIcon = ({ width = '3.2rem', hight = '3.2rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={hight} viewBox="0 0 53 52" className={className}>
        <g transform="translate(-152.931 16.5)">
            <g
                id={cx('rectangle_1')}
                data-name="Rectangle 1587"
                transform="translate(152.931 -16.5)"
                stroke="#ffff"
                strokeWidth="0.5"
                fill="#2B2827"
            >
                <rect width="53" height="52" rx="16" stroke="none"></rect>
                <rect x="0.5" y="0.5" width="52" height="51" rx="15.5" fill="none"></rect>
            </g>
            <path
                className="icon"
                id={cx('icon-svg')}
                data-name="Icon awesome-instagram"
                d="M10.312,7.262A5.288,5.288,0,1,0,15.6,12.55,5.28,5.28,0,0,0,10.312,7.262Zm0,8.726A3.438,3.438,0,1,1,13.75,12.55,3.444,3.444,0,0,1,10.312,15.988Zm6.738-8.942a1.233,1.233,0,1,1-1.233-1.233A1.231,1.231,0,0,1,17.049,7.046Zm3.5,1.252a6.1,6.1,0,0,0-1.666-4.321A6.144,6.144,0,0,0,14.564,2.31c-1.7-.1-6.807-.1-8.51,0A6.135,6.135,0,0,0,1.733,3.972,6.124,6.124,0,0,0,.067,8.293c-.1,1.7-.1,6.807,0,8.51a6.1,6.1,0,0,0,1.666,4.321A6.152,6.152,0,0,0,6.055,22.79c1.7.1,6.807.1,8.51,0a6.1,6.1,0,0,0,4.321-1.666A6.144,6.144,0,0,0,20.552,16.8c.1-1.7.1-6.8,0-8.5Zm-2.2,10.332a3.481,3.481,0,0,1-1.961,1.961c-1.358.538-4.579.414-6.08.414s-4.726.12-6.08-.414A3.481,3.481,0,0,1,2.272,18.63c-.538-1.358-.414-4.579-.414-6.08s-.12-4.726.414-6.08A3.481,3.481,0,0,1,4.232,4.51C5.59,3.972,8.811,4.1,10.312,4.1s4.726-.12,6.08.414a3.481,3.481,0,0,1,1.961,1.961c.538,1.358.414,4.579.414,6.08S18.89,17.277,18.352,18.63Z"
                transform="translate(170.019 -3.55)"
                fill="#ffff"
            ></path>
        </g>
    </svg>
);

export const youtubeIcon = ({ width = '3.2rem', hight = '3.2rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={hight} viewBox="0 0 53 52" className={className}>
        <g id="Group_1619" data-name="Group 1619" transform="translate(-243.931 16.5)">
            <g data-name="Group 1616" id={cx('rectangle_1')}>
                <g
                    id={cx('rectangle_2')}
                    data-name="Rectangle 1588"
                    transform="translate(243.931 -16.5)"
                    strokeWidth="0.5"
                    stroke="#ffff"
                    fill="#2B2827"
                >
                    <rect width="53" height="52" rx="16" stroke="none"></rect>
                    <rect x="0.5" y="0.5" width="52" height="51" rx="15.5" fill="none"></rect>
                </g>
            </g>
            <path
                className="icon"
                id={cx('icon-svg')}
                data-name="Icon awesome-youtube"
                d="M29.77,7.727a3.686,3.686,0,0,0-2.593-2.61C24.889,4.5,15.717,4.5,15.717,4.5s-9.173,0-11.46.617a3.686,3.686,0,0,0-2.593,2.61,38.665,38.665,0,0,0-.613,7.106,38.665,38.665,0,0,0,.613,7.106,3.631,3.631,0,0,0,2.593,2.569c2.288.617,11.46.617,11.46.617s9.173,0,11.46-.617A3.631,3.631,0,0,0,29.77,21.94a38.665,38.665,0,0,0,.613-7.106,38.665,38.665,0,0,0-.613-7.106ZM12.717,19.195V10.472l7.667,4.362-7.667,4.361Z"
                transform="translate(254.714 -5.813)"
                fill="#fff"
            ></path>
        </g>
    </svg>
);

export const tiktokIcon = ({ width = '3.2rem', hight = '3.2rem', className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={hight} viewBox="0 0 53 52" className={className}>
        <g id="Group_1615" data-name="Group 1615" transform="translate(-317.931 16.5)">
            <g
                id={cx('rectangle_1')}
                data-name="Rectangle 1589"
                transform="translate(317.931 -16.5)"
                strokeWidth="0.5"
                stroke="#ffff"
                fill="#2B2827"
            >
                <rect width="53" height="52" rx="16" stroke="none"></rect>
                <rect x="0.5" y="0.5" width="52" height="51" rx="15.5" fill="none"></rect>
            </g>
            <path
                className="icon"
                id={cx('icon-svg')}
                data-name="Icon simple-tiktok"
                d="M11.779.017C12.905,0,14.022.009,15.14,0a5.353,5.353,0,0,0,1.5,3.584,6.06,6.06,0,0,0,3.644,1.538V8.585a9.2,9.2,0,0,1-3.609-.834,10.618,10.618,0,0,1-1.392-.8c-.009,2.509.009,5.019-.017,7.519a6.564,6.564,0,0,1-1.16,3.386A6.4,6.4,0,0,1,9.03,20.616a6.266,6.266,0,0,1-3.506-.885,6.48,6.48,0,0,1-3.137-4.907c-.017-.43-.026-.859-.009-1.28A6.47,6.47,0,0,1,9.88,7.8c.017,1.272-.034,2.544-.034,3.816A2.949,2.949,0,0,0,6.082,13.44a3.409,3.409,0,0,0-.12,1.384A2.925,2.925,0,0,0,8.969,17.29a2.887,2.887,0,0,0,2.38-1.384A1.983,1.983,0,0,0,11.7,15c.086-1.538.052-3.068.06-4.606.009-3.463-.009-6.918.017-10.373Z"
                transform="translate(333.103 -1.313)"
                fill="#fff"
            ></path>
        </g>
    </svg>
);
