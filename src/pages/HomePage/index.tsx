import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import clsx from 'clsx';
import { Typography } from '@material-ui/core';
import BrandButton from '../../components/BrandButton';
import { useHistory } from 'react-router';
import ShoeIcon from '../../components/ShoeIcon';
import Page from "../../components/Page";
import { useStyles } from './styles';
import { createdBookForm, isUserLoggedIn } from '../../store/selectors';
import { IRootReducer } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import gsap from "gsap";
import DonatePopUp from '../../components/DonatePopUp';
import BookFormConfirmation from '../../components/BookFormConfirmation';
import { setCreatedBookForm } from '../../store/actions/book-form.actions';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSignUp = () => {
        history.push("/signup");
    }
    
    const state = useSelector((state:IRootReducer) => state); 
    const isCreated = createdBookForm(state);
    const loggedIn = isUserLoggedIn(state); 

    const [ showDonate, setShowDonate ] = useState<boolean>(false);
    const [ showBookFormConfirmation, setShowBookFormConfirmation ] = useState<boolean>(isCreated);

    const handleBookFormConfirmationClose = () => {
        setShowBookFormConfirmation(!showBookFormConfirmation);
        dispatch(setCreatedBookForm(false));
    }
    const handleDonateClose = () => setShowDonate(!showDonate);
    const handleDonate= () => setShowDonate(!showDonate);

    const TitleRef = useRef<HTMLAnchorElement | null>(null);
    const LabelRef = useRef<HTMLAnchorElement | null>(null);
    const ButtonsRef = useRef<HTMLDivElement | null>(null);

    const handleHomeAnimation = useCallback(() => {
        gsap.timeline({
            repeat: 0
        })
        .fromTo(TitleRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 })
        .fromTo(LabelRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, "-=0.1")
        .fromTo(ButtonsRef.current, { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, "-=0.1")
    }, [ TitleRef, LabelRef, ButtonsRef ]);

    useEffect(handleHomeAnimation, [ handleHomeAnimation ]);

    return (
        <Navbar>
            <Page className={classes.container}>
                <>
                    <div className={clsx(classes.subContainer)}>
                        <div>
                            {/* <Typography className={classes.read}>Read Books For</Typography> */}
                            <Typography ref={TitleRef} className={classes.shoes}>
                                Read Books For <span className={classes.shoesBold}>Shoes</span>
                            </Typography>
                            <Typography ref={LabelRef} className={classes.slogan}>
                                Every Kid Deserves Quality Shoes. 
                                Every Kid Deserves Their Confidence.
                                Donate today to help us continue providing our service.&nbsp; 
                                <Link style={{ textDecoration: "none", color: "#4ECDC4" }} to="/about">Learn More.</Link>
                            </Typography>
                            <div ref={ButtonsRef} className={classes.buttonGroup}>
                            { !loggedIn && <BrandButton className={classes.button} onClick={handleSignUp} title="Sign Up"/> }
                            <BrandButton className={classes.button} onClick={handleDonate} mode="secondary" title="Help Needed"/> 
                            </div>
                        </div>
                    </div>
                    <div className={clsx(classes.subContainer)}>
                    <ShoeIcon animation={true} style={{}}/>
                    </div>
                    <DonatePopUp 
                        visible={showDonate} 
                        handleClose={handleDonateClose} 
                    />
                    <BookFormConfirmation 
                        visible={showBookFormConfirmation} 
                        handleClose={handleBookFormConfirmationClose} 
                    />
                </>
            </Page>
        </Navbar>
    )
}

export default HomePage; 