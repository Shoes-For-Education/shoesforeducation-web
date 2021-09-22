import { Typography } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import React, { ReactChild, useState } from 'react';
import BrandButton from '../BrandButton';
import { useStyles } from './styles'
import MenuIcon from "@mui/icons-material/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/icon.png";
import { useHistory } from 'react-router';

type NavbarProps = {
    children: ReactChild;
}

const Navbar : React.FC<NavbarProps> = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();

    const [ showNav, setShowNav ] = useState(false);

    const handleLogin = () => {
        history.push("/login");
    }

    const handleSignUp = () => {
        history.push("/signup");
    }

    const handleHome = () => {
        history.push("/")
    }

    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
                <img onClick={handleHome} className={classes.logo} src={Logo} alt="logo" />
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
                    style={{ transform: showNav || window.innerWidth >= 950 ? "translateX(0px)"  : "translateX(-230px)"}}
                    className={classes.ul}
                >
                    <li className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Request Shoes</Typography>
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
                    <li 
                        onClick={handleLogin}
                        className={classes.li}>
                        <Typography
                            className={classes.liContent}
                        >Login</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
                    </li>
                    <li className={classes.li}>
                        <BrandButton onClick={handleSignUp} className={classes.signUp} title="Sign Up" />
                    </li>
                </ul>
            </nav>
            { children }
        </div>
    )
}

export default Navbar;