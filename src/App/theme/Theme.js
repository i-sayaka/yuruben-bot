import { createMuiTheme } from '@material-ui/core/styles'

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: '#B0EBF6',
            main: '#00a0c6',
            dark: '#068ac6',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        }
    },
})

export default Theme
