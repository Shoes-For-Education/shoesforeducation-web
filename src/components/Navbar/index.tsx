import { Typography } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import React, { ReactChild, useState } from 'react';
import BrandButton from '../BrandButton';
import { useStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/icon.png";
import { useHistory } from 'react-router';
import { isUserLoggedIn } from '../../store/selectors';
import Avatar from '../Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { logOutUser } from '../../utils/user';
import { useSelector } from 'react-redux';
import { IRootReducer } from '../../store/reducers';

type NavbarProps = {
    children: ReactChild;
}

const Navbar : React.FC<NavbarProps> = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const state = useSelector((state:IRootReducer) => state); 
    const loggedIn = isUserLoggedIn(state); 

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

    const handleBookPage = () => {
        history.push("/books");
    }

    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setIsMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClose = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogOutUser = () => {
        history.push("/");
        logOutUser();
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          style={{ transform: 'translateX(-15px)' }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem  
            onClick={handleLogOutUser}>
                <Typography className={classes.menuItem}>Sign Out</Typography>
            </MenuItem>
        </Menu>
      );

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
                    <li className={classes.li} onClick={handleBookPage}>
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
                    {
                        !loggedIn ? (
                            <>
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
                            </>
                        ) : (
                            <li className={classes.liUser} onClick={handleProfileMenuOpen}>
                                <Avatar />
                                { renderMenu }
                            </li>
                        )
                    }
                </ul>
            </nav>
            { children }
        </div>
    )
}

export default Navbar;