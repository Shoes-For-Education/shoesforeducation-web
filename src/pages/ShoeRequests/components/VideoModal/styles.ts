import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(_ => ({
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
        width: "55vw",
        height: "35.5vw",
        minWidth: 350,
        minHeight: 250,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        display: 'flex',
        outline: 'none',
        padding: 10,
        justifyContent: 'center',
    },
    video: {
        height: "100%",
        borderRadius: 10,
        maxWidth: "100%",
        outline: 'none',
    },
    videoContainer: {
        borderRadius: 10,
    }
}));