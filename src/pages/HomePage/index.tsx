import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import clsx from 'clsx';
import BrandButton from '../../components/BrandButton';
import { useHistory } from 'react-router';
import ShoeIcon from '../../components/ShoeIcon';
import Page from "../../components/Page";
import { useStyles } from './styles';
import { createdBookForm, isUserLoggedIn } from '../../store/selectors';
import type { IRootReducer } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import gsap from "gsap";
import DonatePopUp from '../../components/DonatePopUp';
import BookFormConfirmation from '../../components/BookFormConfirmation';
import { setCreatedBookForm } from '../../store/actions/book-form.actions';
import { Link } from 'react-router-dom';
import { Paper, Typography, useTheme } from '@mui/material';
import Footer from '../../components/Footer';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import { useBooks } from '../../hooks/useBooks';

const HomePage = () => {
    const { classes } = useStyles();
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

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, skipSnaps: false }, [Autoplay({
        stopOnInteraction: false,
        playOnInit: true,
        delay: 3000
    })]);

    const { books } = useBooks();

    const { palette } = useTheme(); 

    useEffect(() => {
        emblaApi?.reInit({ loop: true, skipSnaps: false });
    }, [ books, emblaApi ]);

    return (
        <Navbar>
            <>
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
            <section className='md:mt-0 mt-10 flex flex-col items-center space-y-10'>
                <h1
                    style={{
                        lineHeight: 1.3
                    }}
                    className='text-5xl text-center'>Explore Our  <span className={classes.shoesBold}>Handpicked</span> 2025 Book Choices.</h1>
                <a 
                    style={{
                        border: `2px solid ${ palette.primary.main}`,
                        color:  palette.primary.main
                    }}
                    href="/books" 
                    className='no-underline text-lg p-4'>
                        Explore Our Entire Collection
                </a>
                <div className="pb-10 overflow-x-clip overflow-y-visible" ref={emblaRef}>
                    <div className="flex space-x-14">
                        {
                            books.map((book: any, i) => (
                                <div className="w-[350px] shadow-2xl h-[550px] relative" key={i}>
                                    <img className='h-full w-full object-cover' src={book.aws.url}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
            </>
        </Navbar>
    )
}

export default HomePage; 