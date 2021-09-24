import React from 'react';
import Navbar from '../../components/Navbar';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import BrandButton from '../../components/BrandButton';
import { useHistory } from 'react-router';
import ShoeIcon from '../../components/ShoeIcon';
import Page from "../../components/Page";
import { useStyles } from './styles';

const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();

    const handleSignUp = () => {
        history.push("/signup");
    }

    const handleDonate= () => {
        return; 
    }

    return (
        <Navbar>
            <Page className={classes.container}>
                <>
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
                            <BrandButton onClick={handleSignUp} title="Sign Up"/> 
                            <BrandButton onClick={handleDonate} mode="secondary" title="Donate Today"/> 
                            </div>
                        </div>
                    </div>
                    <div className={clsx(classes.subContainer)}>
                    <ShoeIcon style={{}}/>
                    </div>
                </>
            </Page>
        </Navbar>
    )
}

export default HomePage; 