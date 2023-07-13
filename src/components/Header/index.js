import {  Button, ThemeProvider, Typography} from "@mui/material";
import "./Header.scss"
import {styles} from "./theme";
function Header() {
        const  classes = styles() ;
        return ( <div className="Header">
        <Typography className={classes.btn}>LOGO</Typography>
        <Typography>Slogan</Typography>    
             <Button color="primary">Login</Button>
        </div> );
}

export default Header;