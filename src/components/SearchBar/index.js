import classNames from "classnames/bind";
import styles from  "./SearchBar.module.scss"
import {IconButton, InputBase} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const cx = classNames.bind(styles) ;
function SearchBar() {
    const [searchValue , setSearchValue] = useState("") ;
    const handleChange =(event) =>{
      console.log(event.target.value);
       setSearchValue(event.target.value) ;
    }
    return ( <div className={cx("wrapper")}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search ...."
        inputProps={{ 'aria-label': 'search google maps' }}
        value ={searchValue}
        onChange={handleChange}      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <Search />
        </IconButton>
    </div>
    );
}

export default SearchBar;