import { makeStyles } from "@material-ui/core";
import BooksJPEG from "../../../assets/wood.png";

export const useStyles = makeStyles(theme => ({
    container: {
        minWidth: "100vw",
        height: 225,
        overflowY: "hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
            backgroundColor: "transparent",
        },
    },
    shelf: {
        height: 200,
        backgroundColor: "#985555",
        display: 'flex',
        overflowY: "hidden",
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
            backgroundColor: "transparent",
        },
    },
    headerContainer: {
        height: 25,
        backgroundColor: "#643333",
        boxShadow: "0px -5px 0px 0px #4D2727",
        padding: "0px 15px",
        zIndex: 1,
        // backgroundImage: `url(${BooksJPEG})`,
        // backgroundRepeat: "repeat-x",
        // backgroundSize: "25px 50px",
    },
    bookContainer: {
        width: "auto",
        height: 200,
        borderRadius: 15,
        display: 'flex',
        alignItems: 'center',
        padding: "5px 15px",
        cursor: "pointer",
        opacity: 0,
        transform: "translateY(50px)",
    },
    bookImage: {
        transition: "200ms ease-in",
        width: "auto",
        borderRadius: 10,
        height: 175,
        boxShadow: "1px 1px 0px 3px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            transform: "translateY(-5px)",
            opacity: 0.5,
        }
    },
    header: {
        color: "#fff",
        fontFamily: "Birthstone",
        fontSize: 25,
        lineHeight: "25px",
    }
}))