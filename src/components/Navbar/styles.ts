import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: "#fff",
        zIndex: 1,
        padding: 5,
        marginTop: 5,
        boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.15)",
        position: 'relative',
    },
    nav: {
        backgroundColor: "#fff",
        zIndex: 1,
        left: 10,
        marginTop: 5,
        right: 10,
        height: 50,
        // boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.15)",
        position: 'absolute',
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
    },
    navIcon: {
        display: "none",
        "@media(max-width: 950px)": {
            display: "block",
        },
    },
    ul: {
        display: 'flex',
        marginLeft: 'auto',
        alignItems: 'center',
        "@media(max-width: 950px)": {
            position: 'fixed',
            left: 0,
            flexDirection: "column",
            height: '100vh',
            backgroundColor: "#fff",
            width: 200,
            top: 0,
            padding: 0,
            alignItems: "center",
            boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.15)",
        },
    },
    li: {
        listStyle: 'none',
        paddingRight: 0,
        paddingLeft: 30,
        "&:hover": {
            cursor: "pointer",
        },
        "@media(max-width: 950px)": {
            paddingLeft: 0,
        },
    },
    liContent: {
        transition: "100ms ease",
        fontSize: 14,
        color: "grey",
        "&:hover": {
            cursor: "pointer",
            color: "rgba(0, 0, 0, 0.2)"
        }
    },
    signUp: {
        boxShadow: "none",
        width: 85,
        height: 35,
    }
}));