import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        width: 350,
        height: 450,
        borderRadius: 15,
        boxShadow: "0px 0px 3px 0px rgba(0, 0, 0, 0.1)",
    }
}));