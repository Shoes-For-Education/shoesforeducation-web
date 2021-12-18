import { Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useBooksCatagories } from '../../hooks/useBookCatagories';
import BookInfoModal from './components/BookInfoModal';
import ShelfRow from './components/ShelfRow';
import { useStyles } from "./styles";
import BookStackSVG from "../../assets/book-stack.svg";

const BookPageContent = () => {
    const classes = useStyles();

    const [ showBookModal, setShowBookModal ] = useState(false);
    const [ book, setBook ] = useState<any>({});

    const handleToggleModal = () => setShowBookModal(!showBookModal);
    const handleSetBook = (data:any) => {
        setBook(data);
    };

    const { booksCatagories:catagories } = useBooksCatagories();

    return (
        <div className={classes.container}>
            <Box className={classes.shelfHeader}>
                <Typography className={classes.header}>Choose Books from Here to Read.</Typography>
            </Box>
            {
                catagories.map((catagory, index) => {
                    return (
                        <ShelfRow 
                            key={index}
                            toggleBookModal={handleToggleModal} 
                            catagory={catagory}
                            setBook={handleSetBook}
                        />
                    )
                })
            }
            <Box className={classes.extra}>
                <img className={classes.bookStack} src={BookStackSVG} alt="book stack" />
                { !catagories.length &&  <Typography className={classes.footerContent}>Watch Out! More Books Are Coming.</Typography> }
            </Box>
            <BookInfoModal book={book} visible={showBookModal} handleClose={handleToggleModal}/>
        </div>
    )
}

export default BookPageContent; 