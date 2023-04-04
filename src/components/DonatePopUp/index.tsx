import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import GiftSVG from "../../assets/gift.svg";
import { useStyles } from "./styles";
import BrandButton from '../BrandButton';
import StripeCheckout from "react-stripe-checkout";
import config from "../../config";
import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { useDispatch } from 'react-redux';
import { donateAction } from '../../store/actions/payment';
import clsx from 'clsx';

type DonatePopUpProps = {
    visible: boolean;
    handleClose: () => void;
}

export const DONATE_MODAL_URL_PARAM = "donateModalVisible";

const DonatePopUp : React.FC<DonatePopUpProps> = ({
    visible = false,
    handleClose,
}) => {
    const { classes } = useStyles();
    const dispatch = useDispatch();

    const [ amount, setAmount ] = useState<number>(0);

    const handleToken = (token:any) => {
        dispatch(donateAction({ token, amount }));
        handleCloseModal();
    };

    const handleAmountChange = (e:any) => {
        const value = e.target.value;
        setAmount(value);
    };


    const handleCloseModal = () => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has(DONATE_MODAL_URL_PARAM)) {
            urlParams.delete(DONATE_MODAL_URL_PARAM)
            window.history.replaceState(null, "", "?" + urlParams.toString());
        }

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
            <img className={classes.image} src={GiftSVG} alt="Gift"/>
            <p className={classes.label}>
                You can become part of S4E by recommending the book which has made most impact in your life.
                You can also support financially by providing one time or monthly sustaining contributions.
                Remember your noble cause may be reason to change someone’s mindset and life forever!
                How do I know? Because it changed mine…
            </p>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={amount || ""}
                    placeholder='Enter an Amount'
                    onChange={handleAmountChange}
                    startAdornment={<InputAdornment position="start">$ USD</InputAdornment>}
                    label="Amount"
                />
            </FormControl>
            <Box className={classes.buttons}>
                <BrandButton 
                    mode="secondary"
                    title="Cancel"
                    onClick={handleCloseModal}
                />
                <div className={clsx(!amount && 'pointer-events-none')}>
                    <StripeCheckout
                        stripeKey={config?.stripe?.key || ""}
                        token={handleToken}
                        name=""
                        
                        panelLabel={`Donate`}
                        currency="USD"
                        amount={amount * 100}
                    >
                        <BrandButton 
                            disabled={!amount}
                            title="Continue"
                            onClick={() => {
                            }}
                        /> 
                    </StripeCheckout>
                </div>
            </Box>
          </Box>
        </Modal>
    )
};

export default DonatePopUp; 