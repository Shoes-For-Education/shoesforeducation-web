import { Typography } from '@material-ui/core';
import React, { ReactChild } from 'react';
import BrandButton from '../BrandButton';
import { useStyles } from './styles';

type NavbarProps = {
    children: ReactChild;
}

const Navbar : React.FC<NavbarProps> = ({ children }) => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <nav className={classes.nav}>
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