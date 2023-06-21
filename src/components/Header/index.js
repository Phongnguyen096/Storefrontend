import { IconButton } from "@mui/material";
import "./Header.scss"
import { AddShoppingCart } from "@mui/icons-material";
function Header() {
    return ( <div className="Header">
        <div className="logo-store">
            <div>PG</div>
        </div>
        <div className="slogan"><div>MUSIC FOR LIFE</div></div>
        <div className="search-bar">
           <div className="search-icon"></div>
           <div className="search-input"></div>
        </div>
        <div className="deader">
           <div className="deader-icon"></div>
           <div className="deader-description"></div>
        </div>
        <div className="my-account">
           <div className="my-account-icon"></div>
           <div className="my-account-description"></div>
        </div>
        <div className="cart">
            <IconButton  aria-label="add to shopping cart" href="products">
                <AddShoppingCart sx={{color:"white"}}/>
            </IconButton>
        </div>
    </div> );
}

export default Header;