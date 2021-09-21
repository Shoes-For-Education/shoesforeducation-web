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
    },
    ul: {
        display: 'flex',
        marginLeft: 'auto',
        paddingRight: 25,
        alignItems: 'center'
    },
    li: {
        listStyle: 'none',
        paddingRight: 15,
        paddingLeft: 15,
        "&:hover": {
            cursor: "pointer",
        }
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