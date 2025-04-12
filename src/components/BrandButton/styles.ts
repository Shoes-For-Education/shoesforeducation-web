import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(() => ({
    button: {
        minWidth: 150,
        height: 45,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
        outline: "none",
        border:"none",
        fontSize: 14,
        fontWeight: 500,
        textTransform: 'capitalize',
        boxShadow: "none",
        "&:hover": {
            cursor: "pointer",
        },
    },
    container: {
        marginRight: 0,
    }
}));