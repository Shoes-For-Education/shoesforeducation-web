import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()((theme) => ({
    container: {
        width: '100%',
        height: '100%',
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        minHeight: 350,
        backgroundColor: "#000",
    }
}));