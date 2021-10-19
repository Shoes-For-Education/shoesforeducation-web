import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useCallback, useEffect, useRef } from 'react';
import { useStyles } from './styles';
import gsap from "gsap";
import { Power1 } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type BookProps = {
    book: any,
    index: number,
    onClick: (e:any) => void,
}

const Book : React.FC<BookProps> = ({ book, index, onClick }) => {
    const classes = useStyles();
    gsap.registerPlugin(ScrollTrigger);

    const BookRef = useRef<any | null>(null);
    const TargetRef = useRef<any | null>(null);

    const handleBookAnimation = useCallback(() => {
        if (!BookRef?.current || !TargetRef?.current) return; 

        gsap.fromTo(BookRef.current, 
            { opacity: 0, y: 15  }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                ease: Power1.easeOut, 
                delay: 0.05 * index,
                scrollTrigger: {
                    trigger: TargetRef.current,
                }
            }
        )
    }, [ BookRef, gsap, TargetRef ]);

    const handleClick = () => {
        onClick(book);
    };

    useEffect(() => {
        handleBookAnimation();
    }, [ handleBookAnimation ]);

    return (
        <Box className={classes.bookContainer} onClick={handleClick} ref={BookRef}>
            <img 
                ref={TargetRef}
                className={classes.bookImage}
                src={book?.aws?.url} 
                loading="lazy" 
                alt={book?.name || "Book"}/>
        </Box>
    )
}

type ShelfRowProps = {
    catagory: any,
    toggleBookModal: () => void,
    setBook: (e:any) => void,
}

const ShelfRow : React.FC<ShelfRowProps> = ({ catagory, toggleBookModal, setBook }) => {
    const classes = useStyles();

    const { name, books } = catagory; 

    const handleBookClick = (e:any) => {
        toggleBookModal();
        setBook(e);
    }

    return (
        <Box className={classes.container} >
            <Box className={classes.shelf}>
                {
                    books.map((book:any, index:number) => <Book onClick={handleBookClick} index={index} key={index} book={book} />)
                }
            </Box>
            <Box className={classes.headerContainer}>
                <Typography className={classes.header}>{name}</Typography>
            </Box>
        </Box>
    )
}

export default ShelfRow; 