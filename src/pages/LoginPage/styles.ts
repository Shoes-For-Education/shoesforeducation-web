import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    books: {
        zIndex: -1,
        width: '100%',
        height: "65vh",
        minHeight: 250,
        objectFit: "cover",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)"
    },
    title: {
        fontSize: 30,
        fontWeight: 300,
        textAlign: "center",
        marginTop: 75,
    },
    form: {
        width: "100%",
        minHeight: "315px",
        backgroundColor: "#fff",
        borderRadius: 5,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 25,
    },
    formContainer: {
        zIndex: 1,
        width: 350,
        marginTop: 75,
        minHeight: 450,
        backgroundColor: '#fff',
        position: 'relative'
    },
    buttons: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        width: "100%",
    },
    input: {
        minWidth: "285px",
        marginTop: 5,
    },
    signup: {
        minWidth: 285,
        height: 40,
        marginLeft: "50%",
        transform: "translateX(-50%)",
    },
    buttonLine: {
        width: 295,
        height: 1,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        margin: "10px 0px",
    },
    googleLogIn: {
        minWidth: 285,
        height: 42.5,
        marginTop: 5,
        textAlign: "center",
    },
    shoeIcon: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -35%)",
    }
}));