import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()(theme => ({
    container: {
        backgroundColor: "#fff",
        zIndex: 999,
        padding: 0,
        position: 'relative',
        overflowX: "hidden",
    },
    nav: {
        top: 0,
        backgroundColor: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(8px)",
        zIndex: 999,
        left: 0,
        right: 0,
        height: 50,
        // boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.15)",
        position: 'fixed',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
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
        marginTop: 5,       
        "&:hover": {
            cursor: "pointer"
        }
    },
    ul: {
        transition: "150ms ease",
        display: 'flex',
        height: "100%",
        marginLeft: 'auto',
        marginBottom: 'auto',
        alignItems: 'center',
        "@media(max-width: 950px)": {
            position: 'fixed',
            transform: "translateX(-230px)",
            left: 0,
            flexDirection: "column-reverse",
            height: '100vh',
            backgroundColor: "#fff",
            width: 200,
            zIndex:999,
            top: -15,
            padding: 15,
            justifyContent: "flex-end",
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
            transform: "translateX(-7.5px)",
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