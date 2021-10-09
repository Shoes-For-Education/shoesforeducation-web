import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SuccessSVG from "../../assets/success.svg";
import { useStyles } from "./styles";
import BrandButton from '../BrandButton';
import { Typography } from '@material-ui/core';

type BookFormConfirmationProps = {
    visible: boolean;
    handleClose: () => void;
}

const BookFormConfirmation : React.FC<BookFormConfirmationProps> = ({
    visible = false,
    handleClose,
}) => {
    const classes = useStyles();

    const handleCloseModal = () => {
        document.body.style.overflow = "visible";
        handleClose();
    }

    return (
        <Modal
            open={visible}
            onClose={handleCloseModal}
            closeAfterTransition
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box className={classes.container}>
            {/* <Typography className={classes.header}>Hooray!</Typography> */}
            <img className={classes.image} src={SuccessSVG} alt="Success"/>
            <Box className={classes.content}>
                <p className={classes.label}>
                    Hooray! Your Shoes Request Form has been submitted and will be reviewed. 
                    Check your email to view the latest updates on your new pair of shoes!
                </p>
            </Box>
            <Box className={classes.buttons}>
                <BrandButton 
                    mode="secondary"
                    title="Dismiss"
                    className={classes.button}
                    onClick={handleCloseModal}
                />
            </Box>
          </Box>
        </Modal>
    )
};

export default BookFormConfirmation; 