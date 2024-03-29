import React from 'react';
import { useStyles } from './styles';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';

type AvatarProps = {
    url?: string | null;
}

const Avatar : React.FC<AvatarProps> = ({ url }) => {
    const { classes } = useStyles();

    return (
        <div>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
            >
                { url ? (
                    <div className={classes.userImg}>
                        <img className={classes.userImg} src={url || ""} alt="Profile" />
                    </div>
                ) : (
                    <AccountCircle className={classes.user}/>
                )}
            </IconButton>
         </div>
    )
}

export default Avatar; 