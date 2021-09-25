import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: "#fff",
        zIndex: 999,
        padding: 0,
        marginTop: 5,
        boxShadow: "0px 5px 5px 5px rgba(0, 0, 0, 0.15)",
        position: 'relative',
        overflowX: "hidden",
    },
    nav: {
        backgroundColor: "#fff",
        zIndex: 999,
        left: 10,
        marginTop: 5,
        right: 10,
        height: 50,
        // boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.15)",
        position: 'absolute',
        display: 'flex',
        paddingLeft: 5,
        paddingRight: 25,
        "@media(max-width: 950px)": {
            marginTop: 0,
            paddingTop: 0,
            paddingRight: 0,
        },
    },
    navIcon: {
        display: "none",
        zIndex: 1,
        marginLeft: 10,
        "@media(max-width: 950px)": {
            display: "block",
            marginLeft: "auto",
        },
    },
    logo: {
        width: 35,
        height: 35,
        zIndex: 1000,
        marginTop: 5
    },
    ul: {
        transition: "150ms ease",
        display: 'flex',
        marginLeft: 'auto',
        alignItems: 'center',
        "@media(max-width: 950px)": {
            position: 'fixed',
            transform: "translateX(-230px)",
            left: 0,
            flexDirection: "column",
            height: '100vh',
            backgroundColor: "#fff",
            width: 200,
            zIndex:999,
            top: -15,
            padding: 15,
            paddingTop: 85,
            alignItems: "flex-start",
            boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.15)",
        },
    },
    li: {
        transition: "100ms ease",
        listStyle: 'none',
        paddingRight: 0,
        paddingLeft: 30,
        display: 'flex',
        justifyContent: "space-between",
        "&:hover": {
            cursor: "pointer",
            opacity: 0.2,
        },
        "@media(max-width: 950px)": {
            paddingLeft: 0,
            marginBottom: 35,
            width: "100%",
        },
    },
    liUser: {
        transition: "100ms ease",
        listStyle: 'none',
        paddingRight: 0,
        paddingLeft: 30,
        display: 'flex',
        justifyContent: "space-between",
        "&:hover": {
            cursor: "pointer",
        },
        "@media(max-width: 950px)": {
            paddingLeft: 0,
            marginBottom: 35,
            width: "100%",
        }, 
    },
    liContent: {
        fontSize: 14,
        color: "grey",
        paddingLeft: 5,
        "&:hover": {
            cursor: "pointer",
        }
    },
    signUp: {
        boxShadow: "none",
        width: 85,
        height: 35,
        "@media(max-width: 950px)": {
            width: "170px",
            marginTop: '0px',
        },
    },
    arrow: {
        display: 'none',
        color: "grey",
        marginRight: 5,
        "@media(max-width: 950px)": {
           display: 'block',
        },
    },
    menuItem:{
        color: 'grey',
        fontSize: 14,
    }
}));