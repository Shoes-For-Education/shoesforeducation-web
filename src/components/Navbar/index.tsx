import { Typography } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import React, { ReactChild, useState } from 'react';
import BrandButton from '../BrandButton';
import { useStyles } from './styles'
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

type NavbarProps = {
    children: ReactChild;
}

const Navbar : React.FC<NavbarProps> = ({ children }) => {
    const classes = useStyles();

    const [ showNav, setShowNav ] = useState(false);

    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                <div className={classes.navIcon}>
                    <IconButton
                        onClick={() => setShowNav(!showNav)}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
                <ul 
                    style={{ transform: showNav ? "translateX(0px)"  : "translateX(-230px)"}}
                    className={classes.ul}
                >
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Request Book</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
                    </li>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Book Choices</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
                    </li>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Donate</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
                    </li>
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Login</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
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