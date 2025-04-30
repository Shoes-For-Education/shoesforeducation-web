import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    container: {
        width: "100%",
        height: "100%",
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: "100%",
        height: "100%",
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        minWidth: 350,
        minHeight: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
        display: 'flex',
        padding: 10,
        "@media (max-width: 950px)": {
           flexDirection: "column",
           padding: 15,
        }
    },
    section: {
        width: 350,
        flex: 1,
        position: 'relative',
        "&:first-child": {
            marginRight: 10,
        },
        "@media (max-width: 950px)": {
            "&:first-child": {
                marginRight: 0,
                marginBottom: 5,
            }
         }
    },
    img: {
        width: "100%",
        borderRadius: 10,
        "@media (max-width: 950px)": {
            width: 200,
            marginLeft: "50%",
            transform: "translateX(-50%)",
         }
    },
    author:{
        color: theme.palette.primary.main,
        marginBottom: 15,
        "@media (max-width: 950px)": {
            textAlign: 'center',
        }
    },
    summary: {
        height: "100%",
        maxHeight: 475,
        color: theme.palette.grey[500],
        overflowY: "scroll",
        overflowX: "hidden",
        marginTop: 15,
        "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
        },
        "@media (max-width: 950px)": {
            maxHeight: 250,
        }
    },
    title: {
        fontWeight: 600,
        whiteSpace: 'pre-wrap',
        marginBottom: 5,
    }
}));

