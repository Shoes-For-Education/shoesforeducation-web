import { makeStyles } from '@material-ui/styles';


export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        "@media(max-width: 950px)": {
            paddingTop: 75,
            flexDirection: "column-reverse",
        },
    },
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
    subContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
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
    read: {
        fontWeight: 'normal',
        fontSize: "clamp(36px, 2.5vw, 2.5vw)"
    },
    shoes: {
        fontWeight: 'bold',
        fontSize: "clamp(50px, 4.25vw, 4.25vw)",
        color: "#181818",
        maxWidth: "30vw",
        "@media(max-width: 950px)": {
            maxWidth: "85vw",
        },
    },
    shoesBold: {
        fontWeight: 'bold',
        fontSize: "clamp(56px, 4.5vw, 4.5vw)",
        color: "#181818",
        textShadow: "4px 0px #4ECDC4"
    },  
    buttonGroup: {
        display: 'flex',
        marginTop: 15,
    },
    slogan: {
        color: "grey",
        marginTop: 15,
        marginBottom: 30,
        fontSize: 14,
        maxWidth: "30vw",
        "@media(max-width: 950px)": {
            maxWidth: "85vw",
        },
    }
}));