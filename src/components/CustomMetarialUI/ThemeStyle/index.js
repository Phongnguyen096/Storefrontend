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
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'normal' },
                    style: {
                        textTransform: 'none',
                        height: '100%',
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
        fontFamily: ['Ysabeau Office', 'sans-serif'].join(','),
        typeSmall: {
            fontSize: '1rem',
        },
        typeMedium: {
            fontSize: '1.4rem',
        },
        typeLarge: {
            fontSize: '3rem',
        },
    },
    palette: {
        primary: {
            main: '#ffff',
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
                },
            },
        },
    },
});

export { themeButton, LogoTypography, PrimaryTypography, customTextField, PopoverTheme };
