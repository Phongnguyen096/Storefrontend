import { createTheme } from '@mui/material/styles';
const themeButton = createTheme({
    palette: {
        primary: {
            main: '#ffff',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        red: {
            main: '#aa1f23',
        },
        black: {
            main: 'rgba(0,0,0,1)',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'normal' },
                    style: {
                        textTransform: 'none',
                        height: '100%',
                        width: '100%',
                        fontSize: '1rem',
                    },
                },
                {
                    props: { variant: 'menuButton' },
                    style: {
                        textTransform: 'none',
                        padding: '0.25rem 0',
                        height: '100%',
                        width: '100%',
                        fontSize: '1rem',
                        fontFamily: 'PT Sans',
                        justifyContent: 'flex-start',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',

                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#aa1f23',
                        },
                    },
                },
                {
                    props: { variant: 'redBackground' },
                    style: {
                        minWidth: '150px',
                        backgroundColor: '#aa1f23',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: 'black',
                        },
                    },
                },
                {
                    props: { variant: 'outline2' },
                    style: {
                        minWidth: '200px',
                        border: '1px solid',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: '#aa1f23',
                        },
                    },
                },
            ],
        },
    },
});

//theme custom Typography
const LogoTypography = createTheme({
    typography: {
        fontFamily: ['Lugrasimo', 'cursive'].join(','),
    },
    palette: {
        primary: {
            main: '#ffff',
        },
    },
});

const PrimaryTypography = createTheme({
    typography: {
        fontFamily: ['PT Sans', 'sans-serif'].join(','),
        typeSmall: {
            fontSize: '1.2rem',
        },
        typeMedium: {
            fontSize: '1.6rem',
        },
        typeLarge: {
            fontSize: '2.4rem',
        },
        typeTitle: {
            fontSize: '3rem',
        },
    },
    palette: {
        primary: {
            main: '#ffff',
        },
        secondary: {
            main: '#0000',
        },
    },
});

//textField
const customTextField = createTheme({
    components: {
        MuiTextField: {
            props: { variant: 'custom' },
            style: {},
        },
    },
});

// popper
const PopoverTheme = createTheme({
    components: {
        MuiPopover: {
            styleOverrides: {
                paper: {
                    width: '100%',
                    height: '70%',
                    boxShadow: 'none',
                    marginTop: '4px',
                    maxWidth: '100%',
                    paddingLeft: '16px',
                    marginLeft: '16px',
                },
            },
        },
    },
});

export { themeButton, LogoTypography, PrimaryTypography, customTextField, PopoverTheme };
