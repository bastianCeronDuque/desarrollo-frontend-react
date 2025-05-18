import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette:{
        primary:{
            main: '#3f50b5',
        },
        secondary:{
            main: '#7d3269',
        },
        background:{
            darkBlue: '#466E82',
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    textTransform: 'none',
                    borderRadius: '5px',
                    transition: 'background-color 0.3s',
                    '&:hover':{
                        backgroundColor: '#7d3269'
                    },
                },
            },
        },
    },
    MuiLink:{
        styleOverrides:{
            root:{
                textDecoration: 'none',
                color: 'inherit',
                transition: 'color 0.3s',
                '&:hover':{
                    textDecoration: 'underline',
                    color: '#7d3269',
                },
            },
        },
    },
})

export default theme;