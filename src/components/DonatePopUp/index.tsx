import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GiftSVG from "../../assets/gift.svg";
import { useStyles } from "./styles";
import BrandButton from '../BrandButton';

type DonatePopUpProps = {
    visible: boolean;
    handleClose: () => void;
}

const DonatePopUp : React.FC<DonatePopUpProps> = ({
    visible = false,
    handleClose,
}) => {
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
            <img className={classes.image} src={GiftSVG} alt="Gift"/>
            <p className={classes.label}>
                We are initially donating 10,000 dollars to fund this Non Profit Organization.
                Donate today to help our organization be able to continue to bring confidence to children.
            </p>
            <Box className={classes.buttons}>
                <BrandButton 
                    mode="secondary"
                    title="Cancel"
                    onClick={handleClose}
                />
                <BrandButton 
                    title="Continue"
                    onClick={handleClose}
                />
            </Box>
          </Box>
        </Modal>
    )
};

export default DonatePopUp; 