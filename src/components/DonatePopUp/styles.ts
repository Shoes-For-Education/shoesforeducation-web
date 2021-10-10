import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        width: 350,
        height: 550,
        backgroundColor: '#fff',
        marginLeft: "50%",
        marginTop: "50vh",
        transform: "translate(-50%, -50%)",
        padding: 15,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        "&:focus-visible": {
            outline: "none",
        },
    },
    image: {
        width: "85%",
        aspectRatio: "1.0",
    },
    label: {
        fontFamily: "roboto",
        color: "grey",
        fontSize: 14,
        lineHeight: "1.25rem",
        margin: "10px 0px",
        fontWeight: 300,
        marginBottom: 20,
    },
    buttons: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "auto",
    }
}));