import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()(theme => ({
    container: {
        width: "100%",
        height: "100%",
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: "100%",
        height: "100%",
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modal: {
        minWidth: 450,
        maxWidth: 550,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 0,
        maxHeight: '85vh',
        overflowY: 'auto',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        outline: 'none',
        "@media (max-width: 950px)": {
            minWidth: 320,
            maxWidth: '92vw',
        }
    },
    header: {
        padding: '24px 28px',
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontWeight: 600,
        fontSize: '1.25rem',
        color: theme.palette.grey[900],
        margin: 0,
    },
    closeButton: {
        color: theme.palette.grey[500],
        cursor: 'pointer',
        fontSize: '1.5rem',
        lineHeight: 1,
        padding: 4,
        '&:hover': {
            color: theme.palette.grey[700],
        }
    },
    nomineeList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
        padding: '8px 0',
    },
    nomineeItem: {
        padding: '20px 28px',
        borderBottom: `1px solid ${theme.palette.grey[100]}`,
        transition: 'background-color 0.2s ease',
        '&:hover': {
            backgroundColor: theme.palette.grey[50],
        },
        '&:last-child': {
            borderBottom: 'none',
        }
    },
    nomineeHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 8,
    },
    nomineeNumber: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.875rem',
        fontWeight: 600,
        marginRight: 12,
        flexShrink: 0,
    },
    nomineeName: {
        fontWeight: 600,
        fontSize: '1rem',
        color: theme.palette.grey[900],
    },
    nomineeEmailContainer: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 40,
    },
    emailIcon: {
        fontSize: '1rem',
        color: theme.palette.grey[400],
        marginRight: 8,
    },
    nomineeEmail: {
        color: theme.palette.grey[600],
        fontSize: '0.9rem',
    },
    noNominees: {
        color: theme.palette.grey[500],
        textAlign: 'center',
        padding: '40px 28px',
        fontSize: '0.95rem',
    }
}));
