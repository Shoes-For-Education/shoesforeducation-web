import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    container: {
        marginTop: 100,
    },
    shelfHeader: {
        height: 25,
        width: "100vw",
        backgroundColor: "#643333",
        marginBottom: 5,
        boxShadow: "0px 5px 0px 5px #4D2727",
        padding: "0px 10px",
    },
    header: {
        color: "#fff",
        fontFamily: "Birthstone",
        fontSize: 22.5,
        lineHeight: "25px",
    },
    extra: {
        width: "100%",
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        marginTop: 35,
        alignItems: "center",
    },
    bookStack: {
        minWidth: 300,
        width: "30vw",
        height: "auto"
    },
    footerContent:{
        margin: "15px 0px",
        color: "grey",
        textAlign:'center',
    }
}))