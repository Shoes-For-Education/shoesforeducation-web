import React from 'react';
import Navbar from '../../components/Navbar';
import Shoes from "../../assets/shoe.png";
import { useStyles } from './styles';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import BrandButton from '../../components/BrandButton';

const HomePage = () => {
    const classes = useStyles();

    return (
        <Navbar>
            <section 
                className={classes.container}
                style={{ minHeight: window.innerHeight }}>
                <div className={clsx(classes.subContainer)}>
                    <div>
                        {/* <Typography className={classes.read}>Read Books For</Typography> */}
                        <Typography className={classes.shoes}>
                            Read Books For <span className={classes.shoesBold}>Shoes</span>
                        </Typography>
                        <Typography className={classes.slogan}>
                            Every Kid Deserves Quality Shoes. 
                            Every Kid Deserves Their Confidence.
                            Donate today to help us continue providing our service.
                        </Typography>
                        <div className={classes.buttonGroup}>
                           <BrandButton title="Sign Up"/> 
                           <BrandButton mode="secondary" title="Donate Today"/> 
                        </div>
                    </div>
                </div>
                <div className={clsx(classes.subContainer)}>
                    <div className={classes.shoeCircle}>
                        <img className={classes.shoe} src={Shoes} alt="shoe" />
                    </div>
                </div>
            </section>
        </Navbar>
    )
}

export default HomePage; 