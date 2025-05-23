import React, { ReactChild, useCallback, useEffect, useRef, useState } from 'react';
import BrandButton from '../BrandButton';
import { useStyles } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/icon.png";
import { useHistory } from 'react-router';
import { getUser, isUserLoggedIn } from '../../store/selectors';
import Avatar from '../Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import { logOutUser } from '../../utils/user';
import { useDispatch, useSelector } from 'react-redux';
import { IRootReducer } from '../../store/reducers';
import DonatePopUp, { DONATE_MODAL_URL_PARAM } from '../DonatePopUp';
import { setSnackbarEvent } from '../../store/actions/user.actions';
import { IconButton, Menu, MenuItem, Typography } from '@mui/material';

type NavbarProps = {
    children: ReactChild;
}

const Navbar : React.FC<NavbarProps> = ({ children }) => {
    const { classes } = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state:IRootReducer) => state); 

    const loggedIn = isUserLoggedIn(state); 
    const user = getUser(state);

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

    const handleRequestShoes = () => {
        if (!isUserLoggedIn(state)) {
            dispatch(setSnackbarEvent({ content: "Log in to Request Shoes", variant: "info" }));
            return; 
        }
        history.push("/request-shoes");
    }

    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [ donateVisible, setDonateVisible ] = useState<boolean>(false);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has(DONATE_MODAL_URL_PARAM)) setDonateVisible(true);
    }, []);

    const handleDonate = () => setDonateVisible(!donateVisible);

    const handleProfileMenuOpen = (_: React.MouseEvent<HTMLElement>) => {
        setIsMenuOpen(!isMenuOpen);
    };
  
    const handleMenuClose = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogOutUser = () => {
        history.push("/");
        logOutUser();
    }

    const handleAboutPage = () => {
        history.push("/about");
    }

    const handleShoeRequestStatus = () => {
        if (!isUserLoggedIn(state)) {
            dispatch(setSnackbarEvent({ content: "Log in to check Request Status", variant: "info" }));
            return; 
        }
        history.push("/requests");
    }

    const menuId = 'primary-search-account-menu';
    const menuRef = useRef<any | null>(null);
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
          style={{ transform: 'translateX(-15px)', padding: 10, }}
          open={isMenuOpen}
          onClose={handleMenuClose}
          ref={menuRef}
          anchorEl={menuRef.current}
        >
          <MenuItem  
            onClick={handleLogOutUser}>
                <Typography className={classes.menuItem}>Sign Out</Typography>
            </MenuItem>
        </Menu>
      );

    const handleMenu = () => setShowNav(!showNav);

    const [ isMobile, setIsMobile ] = useState(false);

    const handleResize = useCallback(() => {
        if (window.innerWidth >= 950) setIsMobile(false);
        else setIsMobile(true);
    }, []);

    useEffect(() => { handleResize(); }, [ handleResize ]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => { window.removeEventListener("resize", handleResize); }
    }, [ handleResize ]);

    return (
        <div className={classes.container}>
            <nav className={classes.nav} style={{ marginTop: 0, }}>
                <img onClick={handleHome} className={classes.logo} src={Logo} alt="logo" />
                <div className={classes.navIcon}>
                    <IconButton
                        onClick={handleMenu}
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
                    style={{ transform: showNav || (!isMobile && window.innerWidth >= 950) ? "translateX(0px)"  : "translateX(-230px)"}}
                    className={classes.ul}
                >
                    {
                        !!Object.keys(user).length && (
                        <>
                            <li className={classes.li} onClick={handleRequestShoes}>
                                <Typography
                                    className={classes.liContent}
                                >Request Shoes</Typography>
                                <FontAwesomeIcon 
                                    className={classes.arrow}
                                    icon={faChevronRight} 
                                />
                            </li>
                            <li className={classes.li} onClick={handleShoeRequestStatus}>
                                <Typography
                                    className={classes.liContent}
                                >Request Status</Typography>
                                <FontAwesomeIcon 
                                    className={classes.arrow}
                                    icon={faChevronRight} 
                                />
                            </li>
                        </>)
                    }
                    <li className={classes.li} onClick={handleBookPage}>
                        <Typography
                            className={classes.liContent}
                        >Book Choices</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
                    </li>
                    <li className={classes.li} onClick={handleAboutPage}>
                        <Typography
                            className={classes.liContent}
                        >About</Typography>
                        <FontAwesomeIcon 
                            className={classes.arrow}
                            icon={faChevronRight} 
                        />
                    </li>
                    <li className={classes.li} onClick={handleDonate}>
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
                                <Avatar url={user?.avatar || null}/>
                                { renderMenu }
                            </li>
                        )
                    }
                </ul>
            </nav>
            { children }
            <DonatePopUp visible={donateVisible} handleClose={handleDonate}/>
        </div>
    )
}

export default Navbar;