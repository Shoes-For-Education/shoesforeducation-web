import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()(theme => ({
    user: {
        color: "grey",
    },
    userImg: {
        height: 35,
        width: 35,
        borderRadius: '50%',
    }
}))