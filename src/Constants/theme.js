import { createTheme } from "@material-ui/core";
import { primaryColor, neutralColor } from "./cor";

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            ContrastText: "white"
        },
        secondary: {
            main: neutralColor,
        },
        text: {
            primary: neutralColor
        }

    }
})
export default theme;