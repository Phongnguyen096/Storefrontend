import classNames from "classnames/bind" ;
import { TextField , Box , FormControlLabel , Checkbox , Button , Grid , Link, Divider} from "@mui/material";
import { Google , Facebook } from "@mui/icons-material";

import styles from "./LoginForm.module.scss" ;
import ThemeProviderComponent from "../ThemeProvider";
import { themeButton } from "../ThemeStyle";
import handleLoginApi from "~/services/userService";
const cx = classNames.bind(styles) ;
function LoginForm() {
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get("email") 
    let password =  data.get("password")
    let res =(await handleLoginApi({email , password})).data ;
    console.log(res) ;
  };
    return ( <div className={cx("wrapper")}>
          <div className={cx("login-form-account")}>
               <div className={cx("title-login1")}>Login into your account</div>
          <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Divider orientation="vertical" flexItem>
  </Divider>
          </div>  
          <div className={cx("bulkhead")}><Divider orientation="vertical" variant="middle"/></div> 
          <div className={cx("login-form-another")}>
              <div className={cx("title-login2")}>Login with another provider</div>
             <ThemeProviderComponent comp={Button} themeCustom={themeButton} startIcon = {< Google/>} fullWidth color = "neutral" variant ="contained"  sx={{ mt: 3, mb: 2 }}>Google</ThemeProviderComponent>
             <ThemeProviderComponent comp={Button} themeCustom={themeButton} startIcon = {< Facebook/>} fullWidth color = "neutral" variant ="contained"  sx={{ mt: 3, mb: 2 }}>Facebook</ThemeProviderComponent>
          </div> 
    </div> );
}

export default LoginForm;
