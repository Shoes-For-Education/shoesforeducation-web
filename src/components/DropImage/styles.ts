import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()(theme => ({
    container: {
        width: '100%',
        height: 125,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: theme.palette.grey[400],
        borderRadius: 10,
        margin: "10px 0px",
        position: 'relative',
    },
    label: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        transform: "translate(-50%, -50%)",
    },
    image: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: "translate(-50%, -50%)",
    },
    icon: {
        color: theme.palette.grey[400],
    },
    labelText: {
        marginLeft: 10,
        color: theme.palette.grey[400],
    },
    disabled: {
        opacity: '0.25',
        pointerEvents: 'none',
    },
    input: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        opacity: 0,
    },
    fileName: {
        marginLeft: 10,
        color: theme.palette.grey[400],
        maxWidth: 250,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: "ellipsis",
    }
}));