import { Box } from '@mui/system';
import React, { useMemo, useState } from 'react';
import { useBooksCatagories } from '../../hooks/useBookCatagories';
import BookInfoModal from './components/BookInfoModal';
import ShelfRow from './components/ShelfRow';
import { useStyles } from "./styles";
import BookStackSVG from "../../assets/book-stack.svg";
import { Typography, useTheme } from '@mui/material';
import { TailSpin } from "react-loader-spinner";

const BookPageContent = () => {
    const { classes } = useStyles();

    const [ showBookModal, setShowBookModal ] = useState(false);
    const [ book, setBook ] = useState<any>({});

    const handleToggleModal = () => setShowBookModal(!showBookModal);
    const handleSetBook = (data:any) => {
        setBook(data);
    };

    const { booksCatagories:catagories = [], loading:loadingBookCatagories } = useBooksCatagories();

    const filteredCatagories = useMemo(() => {
        return catagories.filter((catagory: any) => catagory.books.length > 0);
    }, [ catagories ]);

    const { palette } = useTheme();

    return (
        <div className={classes.container}>
            <div className='flex w-full h-[35px] justify-center mb-5'>
                <TailSpin
                    height="35"
                    width="35"
                    color={palette.primary.main || "#000000"}
                    ariaLabel="tail-spin-loading"
                    radius="3"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={loadingBookCatagories && catagories.length == 0}
                    />
            </div>
            <Box className={classes.shelfHeader}>
                <Typography className={classes.header}>Choose Books from Here to Read</Typography>
            </Box>
            {
                filteredCatagories.map((catagory, index) => {
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