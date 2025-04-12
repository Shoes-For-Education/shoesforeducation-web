import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()(theme => ({
    container: {
        width: 750,
        minHeight: 450,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginLeft: "50%",
        marginTop: "50vh",
        transform: "translate(-50%, -225px)",
        outline: "none",
        padding: 15,
        display: 'flex',
        "@media(max-width: 950px)": {
           flexDirection: "column",
           width: 350,
           minHeight: 450,
        },
    },
    bookImageContainer: {
        width: "50%",
        borderRadius: 5,
        marginRight: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        "@media(max-width: 950px)": {
            width: "100%",
            maxHeight: 200,
         },
    },  
    bookImage: {
        width: "100%",
        minWidth: 350,
        height: "auto",
        borderRadius: 10,
        objectFit: 'cover',
        objectPosition: "top center",
        overflow: 'hidden',
    },
    title: {
        fontWeight: 700,
        fontSize: 35,
    },
    description: {
        fontWight: 300,
        fontSize: 14,
        color: "grey",
        marginTop: 15,
        overflowY: 'auto',
        overflowX: 'hidden',
        overflowWrap: "break-word",
        maxHeight: 125,
    },
    bookDetailsContainer: {
        width: "50%",
        height: "100%",
        "@media(max-width: 950px)": {
            width: "100%",
         },
    },
    author: {
        fontSize: 14,
        fontWeight: 300,
        color: "#FF6B6B",
    }
}));