import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()(theme => ({
    container: {
        width: 350,
        height: 500,
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
    content: {
        margin: "auto 0px",
    },
    header: {
        fontWeight: 700,
        fontSize: 25,
        textAlign: "center",
    },
    label: {
        fontFamily: "roboto",
        color: "grey",
        fontSize: 14,
        lineHeight: "1.25rem",
        margin: "5px 0px",
        fontWeight: 300,
    },
    buttons: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        marginTop: "auto",
    },
    button: {
        flex: 1,
        width: 300,
    }
}));