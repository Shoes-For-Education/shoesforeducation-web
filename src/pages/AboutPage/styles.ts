import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    headerHighlight: {
        textShadow: "4px 0px #4ECDC4",
        "@media (max-width: 900px)": {
            textShadow: "none",
        }
    },
    container: {
        marginTop: 65,
        padding: "0px 25px",
        paddingTop: "50px",
    },
    header: {
        fontWeight: 700,
        fontSize: "clamp(25px, 4vw, 4vw)",
    },
    text: {
        maxWidth: '65vw',
        margin: "15px 0px",
        color: theme.palette.grey[600],
        "@media (max-width: 900px)": {
            maxWidth: "90vw",
        }
    },
    subHeader: {
        marginTop: 25,
        fontWeight: 500,
        color: theme.palette.grey[900],
        fontSize: "clamp(17.5px, 1.25vw, 1.25vw)",
    }
}))