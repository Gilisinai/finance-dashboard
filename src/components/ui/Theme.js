import { createMuiTheme } from '@material-ui/core/styles';




let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#2f3b4b'
        },
        secondary: {
            main: '#252c36'
        },
        background: {
            default: '#151c26'
        },
        common: {
            black: '#151c26'
        }
        
    },
    typography: {
        fontSize: 10,
        
    }
})


   



export default theme