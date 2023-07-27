import { createTheme } from "@mui/material/styles";
const themeButton = createTheme({
    palette:{
        primary :{
            main: "#ffff" 
        } ,
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
    },
    components: {
        MuiButton: {
          variants: [
            {
              props: { variant: 'normal' },
              style: {
                textTransform: 'none',
              },
            },
          ],
        },
    }

});


//theme custom Typography
const LogoTypography = createTheme({
    typography :{
        fontFamily : [
            'Lugrasimo',
             'cursive',
        ].join(",") ,
    
    },
    palette:{
        primary :{
            main: "#ffff" 
        }
    },
  
});

const PrimaryTypography = createTheme({
    typography :{
        fontFamily : [
            'Ysabeau Office',
             'sans-serif',
        ].join(",") ,
        typeSmall: {
            fontSize: "1rem",
          },
        typeMedium :{
            fontSize: "1.4rem",
        }
    },
    palette:{
        primary :{
            main: "#ffff" 
        }
    },
  
});

//textField
const customTextField =  createTheme({
    components :{
        MuiTextField :{
            props :{variant : 'custom'} ,
            style :{
                
            } ,
        }
    }
}) ;


export { themeButton , LogoTypography, PrimaryTypography , customTextField}  ;