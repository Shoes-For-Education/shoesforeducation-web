import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()(theme => ({
    container: {
        width: "calc(100vw - 25px)",
        maxWidth: 500,
        minHeight: 525,
        backgroundColor: '#fff',
        marginLeft: "50%",
        marginTop: "50vh",
        transform: "translate(-50%, -50%)",
        padding: 15,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        "&:focus-visible": {
            outline: "none",
        },
    },
    input: {
        margin: "10px 0px",
        width: "100%",
        marginBottom: "10px !important"
    },
    select: {
        display: 'flex',
        flexDirection: 'column',
    },  
    selectItem: {
        display: "block",
        padding: 7.5
    },
    image: {
        maxWidth: 300,
        width: "85%",
        aspectRatio: "1.0",
        "@media (max-width: 600px)": {
            maxWidth: 200,
            width: "100%",
        }
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
        justifyContent: "center",
        marginTop: "auto",
        gap: 10
    }
}));