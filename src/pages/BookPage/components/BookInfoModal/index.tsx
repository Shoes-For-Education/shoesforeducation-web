import React from 'react';
import Modal from '@mui/material/Modal';
import { useStyles } from "./styles";
import { Box } from '@mui/system';
import { Typography } from '@material-ui/core';

type BookInfoModalProps = {
    visible: boolean; 
    handleClose: () => void; 
    book: any,
}

const BookInfoModal : React.FC<BookInfoModalProps>  = ({ visible, handleClose, book }) => {
    console.log(book);
    const classes = useStyles();

    return (
        <Modal
            open={visible}
            onClose={handleClose}
            closeAfterTransition
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={classes.container}>
                <Box className={classes.bookImageContainer}>
                    <img className={classes.bookImage} src={book?.aws?.url || ""} alt="Book Cover"/>
                </Box>
                <Box className={classes.bookDetailsContainer}>
                    <Box>
                        <Typography className={classes.title}>{ book?.name }</Typography>
                        { book?.author && <Typography className={classes.author}>By { book?.author }</Typography> }
                    </Box>
                    <Typography className={classes.description}>{ book?.description }</Typography>
                </Box>
            </Box>
        </Modal>
    )
}

export default BookInfoModal; 