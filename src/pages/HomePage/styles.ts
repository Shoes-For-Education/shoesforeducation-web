import { makeStyles } from 'tss-react/mui';


export const useStyles = makeStyles()((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        "@media(max-width: 950px)": {
            paddingTop: 75,
            flexDirection: "column-reverse",
        },
    },
    
    subContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
    },
    read: {
        fontWeight: 'normal',
        fontSize: "clamp(36px, 2.5vw, 2.5vw)"
    },
    shoes: {
        opacity: 0,
        fontWeight: 'bold',
        fontSize: "clamp(50px, 5.25vw, 5.25vw)",
        color: "#181818",
        maxWidth: "30vw",
        "@media(max-width: 950px)": {
            maxWidth: "85vw",
        },
    },
    shoesBold: {
        fontWeight: 'bold',
        fontSize: "clamp(56px, 5.25vw, 5.25vw)",
        color: "#181818",
        textShadow: "4px 0px #4ECDC4"
    },  
    buttonGroup: {
        opacity: 0,
        display: 'flex',
        marginTop: 15,
    },
    button: {
        marginRight: 10,
    },
    slogan: {
        opacity: 0,
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