import { Typography } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import React, { ReactChild } from 'react';
import BrandButton from '../BrandButton';
import { useStyles } from './styles'
import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
    children: ReactChild;
}

const Navbar : React.FC<NavbarProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                <div className={classes.navIcon}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <ul className={classes.ul}>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Request Book</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Book Choices</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Donate</Typography>
                    </li>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Login</Typography>
                    </li>
                    <li className={classes.li}>
                        <BrandButton className={classes.signUp} title="Sign Up" />
                    </li>
                </ul>
            </nav>
            { children }
        </div>
    )
}

export default Navbar;