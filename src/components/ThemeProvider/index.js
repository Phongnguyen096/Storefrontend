import { ThemeProvider as Theme } from '@mui/material/styles';
function ThemeProviderComponent({ comp, themeCustom, children, ...props }) {
    let Comp = comp;
    return (
        <Theme theme={themeCustom}>
            <Comp {...props}>{children}</Comp>
        </Theme>
    );
}

export default ThemeProviderComponent;
