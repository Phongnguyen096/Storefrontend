import {Button, Link, Modal, Typography} from "@mui/material";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { themeButton , LogoTypography , PrimaryTypography} from "~/components/ThemeStyle";
import { PersonOutlineRounded } from "@mui/icons-material";
import ThemeProviderComponent from "~/components/ThemeProvider/index.js";
import SearchBar from "../SearchBar";
import LoginForm from "../LoginForm";
import { useState } from "react";

const cx = classNames.bind(styles) ;
function Header() {
       const [login , setLogin] = useState(true) ;
       const [open  , setOpen] = useState(false) ;
       const handleOpen = () => setOpen(true) ;
       const handleClose =  () => setOpen(false) ;
      return ( <div className={cx("wrapper")}>
                 <div  className={cx("nav-element")}>
                     <div className={cx("logo-content")}>
                              <div className={cx("logo")}>
                                    <Link href="/"><ThemeProviderComponent comp={Typography} themeCustom={LogoTypography} variant="h4" color="primary" type="button">GStore</ThemeProviderComponent></Link>
                              </div>
                              <div  className={cx("slogan")}>
                                       <ThemeProviderComponent comp={Typography} themeCustom={PrimaryTypography}  color="primary">Music for Life.</ThemeProviderComponent>    
                              </div>
                     </div>
                     <div className={cx("search-bar")}>
                           <SearchBar/>
                     </div>
              {!login ?<div>avatar</div> : <div className={cx("btn-login")}>
                  <ThemeProviderComponent comp={Button} themeCustom={themeButton} color="primary" variant="normal" onClick ={handleOpen} startIcon ={<PersonOutlineRounded color="info"/>}>
                       <ThemeProviderComponent comp={Typography} themeCustom={PrimaryTypography}  color="primary" variant ="typeSmall" >Account </ThemeProviderComponent>
                  </ThemeProviderComponent>
               </div>} 
                   <Modal
                     open ={open} 
                     onClose={handleClose}
                   >
                       <LoginForm/>
                   </Modal>
              </div>
        
        </div> );
}

export default Header;