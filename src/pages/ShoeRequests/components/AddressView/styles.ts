import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    addressBox: {
        display: 'flex',
        alignItems: 'center',
        cursor: "pointer",
    },
    addressText: {
        marginLeft: 10,
        width: "100%",
        maxWidth: 200,
        whiteSpace: "nowrap",
        overflow: 'hidden',
        textOverflow: "ellipsis",
    },
    icon: {
        color: theme.palette.grey[400]
    },
}))