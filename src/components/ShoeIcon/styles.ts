import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    shoeCircle: {
        minWidth: 200,
        minHeight: 200,
        width: "35vw",
        height: "35vw",
        aspectRatio: "1.0",
        borderRadius: '50%',
        backgroundColor: "#FFE66D",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 750,
        maxHeight: 750,
    },
    shoe: {
        minWidth: 225,
        minHeight: 225,
        width: "35vw",
        maxWidth: 750,
        maxHeight: 750,
        height: "35vw",
        transform: "rotateZ(-15deg) scale(1.1)",
    },
}));