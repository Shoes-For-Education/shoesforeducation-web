import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: 'center',
        padding: "25px",
        "@media(max-width: 950px)": {
            padding: 5,
        },
    },
    formContainer: {
        width: 600,
        height: 450,
        borderRadius: 15,
        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.1)",
        padding: "25px 15px",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        zIndex: 1,
        backgroundColor: "white",
    },
    formType: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: "15px",
    },
    input: {
        margin: "10px 0px",
        minWidth: 300,
        width: "100%",
    },
    proofButtons: {
        display: 'flex',
        minWidth: 300,
        width: "100%",
    },
    proofOption: {
        width: "100%",
    },
    bgImage: {
        position: 'absolute',
        zIndex: -1,
        left: "50%",
        transform: "translateX(-50%)",
    },
    flex: {
        display: 'flex',
        width: "100%",
        gap: 5,
        justifyContent: 'space-between',
    },
    nameSegment: {
        minWidth: 100,
        width: "100%",
        flex: 1,
    },
    addresses: {
        maxHeight: 175,
        padding: 15,
        overflowY: "scroll",
        overflowX: "hidden",
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.15)",
    },
    select: {
        display: 'flex',
        flexDirection: 'column',
    },  
    addressContainer: {
        transition: "150ms ease",
        margin: "7.5px 0px",
        color: "grey",
        cursor: "pointer",
        "&:hover": {
            opacity: 0.5,
        }
    }
}));