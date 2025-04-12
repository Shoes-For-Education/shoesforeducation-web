import { useCallback, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import GiftSVG from "../../assets/gift.svg";
import { useStyles } from "./styles";
import BrandButton from '../BrandButton';
import StripeCheckout, { type Token } from "react-stripe-checkout";
import config from "../../config";
import { FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { donateAction } from '../../store/actions/payment';
import { ECurrency } from '../../store/enums/currency.enum';
import clsx from 'clsx';
import { currencySymbolMap } from '../../utils/mapping';

export const DONATE_MODAL_URL_PARAM = "donateModalVisible";

type DonatePopUpProps = {
    visible: boolean;
    handleClose: () => void;
}

const DonatePopUp : React.FC<DonatePopUpProps> = ({
    visible = false,
    handleClose,
}) => {
    const { classes } = useStyles();
    const dispatch = useDispatch();

    const [ currency, setCurrency ] = useState<ECurrency>(ECurrency.USD);
    const [ amount, setAmount ] = useState<string>("0");

    const handleToken = (token:Token) => {
        dispatch(donateAction({ token, amount }));
        handleCloseModal();
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAmount(value);
    };

    const handleCloseModal = () => {
        const urlParams = new URLSearchParams(window.location.search);
         if (urlParams.has(DONATE_MODAL_URL_PARAM)) {
             urlParams.delete(DONATE_MODAL_URL_PARAM)
             window.history.replaceState(null, "", `?${urlParams.toString()}`); 
         }

        document.body.style.overflow = "visible";
        handleClose();
    }

    const currencies = useMemo(() => {
        return Object.values(ECurrency).map((currency) => {
            return {
                value: currency,
                label: currency.toString(),
            }
        })
    }, []);

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCurrency(value as ECurrency);
        setAmount("0");
    };

    const handleRupeeDonate = useCallback(() => {
        window.open("https://donate.stripe.com/cN22c8g2M9xcf9S000", "_blank");
    }, []);

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
            
            <TextField
                    id="donate-currency"
                    select
                    label="Currency"
                    onChange={handleCurrencyChange}
                    required={true}
                    variant="outlined"
                    value={currency}
                    className={clsx(classes.input, classes.select)}
                    >
                    {currencies.map((currency, index:number) => {
                        return (
                            <MenuItem className={classes.selectItem} value={currency.value} key={currency.value}>
                                { currency.label }
                            </MenuItem>
                        )
                    })} 
                </TextField>

            {
                currency === ECurrency.USD && (
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={amount}
                            onChange={handleAmountChange}
                            startAdornment={(
                                <InputAdornment position="start">
                                    {currencySymbolMap[currency]}
                                </InputAdornment>
                            )}
                            label="Amount"
                        />
                    </FormControl>
                )
            }
            <Box className={classes.buttons}>
                <BrandButton 
                    mode="secondary"
                    title="Cancel"
                    onClick={handleCloseModal}
                />
               {
                    currency === ECurrency.USD && (
                        <StripeCheckout
                            stripeKey={config?.stripe?.key || ""}
                            token={handleToken}
                            name="Your Donation"  
                            panelLabel={"Donate"}
                            currency="USD"
                            amount={Number.parseInt(amount) * 100}
                        >
                            <BrandButton 
                                title="Continue"
                                onClick={() => {}}
                            /> 
                        </StripeCheckout>
                    )
               }
               {
                    currency === ECurrency.INR && (
                        <BrandButton 
                            title="Continue"
                            onClick={handleRupeeDonate}
                        /> 
                    )
               }
            </Box>
          </Box>
        </Modal>
    )
};

export default DonatePopUp; 