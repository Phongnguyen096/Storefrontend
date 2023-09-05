export const HEADER_TEXT = Object.freeze({
    LOGO: 'G STORE',
    SLOGAN: 'Music for life',
    LOGIN_BTN: 'Account',
    EMPTY: '',
});

//header bar content
export const HEADER_BAR_CONTENT = [
    {
        index: 1,
        type: 'Product',
        nameList: 'Acoustic',
        link: '/acoustic',
        listMenu: [
            {
                title: 'Taylor',
            },
            {
                title: 'Fender',
            },
            {
                title: 'Takamine',
            },
            {
                title: 'Yamaha',
            },
            {
                title: 'Other',
            },
        ],
    },
    {
        index: 2,
        type: 'Product',
        nameList: 'Electric',
        link: '/electric',
        listMenu: [
            {
                title: 'Fender',
            },
        ],
    },
    {
        index: 3,
        type: 'Product',
        nameList: 'Classic',
        link: '/classic',
        listMenu: [
            {
                title: 'Codoba',
                content: ['no products'],
            },
            {
                title: 'Taylor',
            },
            {
                title: 'Fender',
            },
            {
                title: 'Takamine',
            },
            {
                title: 'Yamaha',
            },
        ],
    },
    {
        index: 4,
        type: 'Product',
        nameList: 'Other Products',
        link: '/other-products',
    },
    {
        index: 5,
        type: 'Other',
        nameList: 'Lean Guitar',
        link: '/leaning',
    },
];
