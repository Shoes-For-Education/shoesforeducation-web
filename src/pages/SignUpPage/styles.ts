import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
    },
    books: {
        width: '100%',
        height: "65vh",
        minHeight: 250,
        objectFit: "cover",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    },
    form: {
        width: 350,
        minHeight: 500,
        height: "auto",
        backgroundColor: "#fff",
        borderRadius: 5,
    }
}));