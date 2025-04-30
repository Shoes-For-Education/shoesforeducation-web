import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    container: {
        marginTop: 75,
        minHeight: '100vh',
        overflowY: 'scroll',
    },
    table: {
        marginLeft: '7.5px',
        border: "1px solid",
        borderColor: theme.palette.grey[300],
    },
    row: {
        height: 45,
    },
    cell: {
        minWidth: 95,
        height: 45,
        borderRight: "1px solid",
        borderRightColor: theme.palette.grey[300],
        color: theme.palette.grey[700],
        textAlign: 'center',
    },
    body: {
        maxHeight:"calc(70vh)",
        overflow: 'scroll', 
    },
}))