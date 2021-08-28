import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';


const rootTheme = createTheme({
    palette: {
        primary: {
            main: blue[900],
        },
        secondary: {
            main: red[900],
        },
    },
    direction: "rtl",
    typography: {
        fontFamily: [
            'Rubik',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
});

export default rootTheme;