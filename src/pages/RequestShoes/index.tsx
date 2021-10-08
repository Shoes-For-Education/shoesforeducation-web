import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import { Box, TextField, Typography } from '@material-ui/core';
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";
import { IRootReducer } from "../../store/reducers";
import { MenuItem, Step, StepLabel, Stepper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useBooks } from "../../hooks/useBooks";
import BrandButton from "../../components/BrandButton";
import PrizeSVG from "../../assets/prize.svg";
import clsx from "clsx";
import { useAddresses } from "../../hooks/useAddresses";
import { useDebounce } from "use-debounce/lib";
import { useStyles } from "./styles";
import BookForm from "./components/BookForm";
import PersonalForm from "./components/PersonalForm";
import ShippingForm from "./components/ShippingForm";

export interface IRequestShoesForm {
    email: string,
    bookId: string,
    proofType: 'written' | 'video',
    summary?: string,
    firstName: string,
    lastName: string,
    gender: "male" | "female" | "non binary",
    addressQuery: string,
    address: any,
    age?: number; 
    shoeSize: string,
}

const RequestShoes = () => {
    const state:IRootReducer = useSelector((state:IRootReducer) => state);
    const user = getUser(state);

    const [ values, setValues ] = useState<IRequestShoesForm>({
        email: user?.email || "",
        proofType: 'written',
        bookId: "",
        summary: "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        gender: "male",
        addressQuery: "",
        address: {},
        shoeSize: "",
    });

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Book', 'Personal', 'Shipping'];
    const { books } = useBooks();

    const handleNext = () => {    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const classes = useStyles();
    const handleSetValues = (payload:any) => {
        setValues(payload);
    }

    return (
        <Navbar>
            <Page className={classes.container}>
                <>
                <section className={classes.formContainer}>
                    <Stepper style={{ marginBottom: 'auto' }} activeStep={activeStep}>
                        {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                        })}
                    </Stepper>
                    <form>
                        { activeStep === 0 && <BookForm values={values} setValues={handleSetValues} books={books} /> }
                        { activeStep === 1 && <PersonalForm values={values} setValues={handleSetValues} /> }
                        { activeStep === 2 && <ShippingForm values={values} setValues={handleSetValues} /> }
                    </form>
                    <Box sx={{ display: 'flex', marginTop: 'auto', flexDirection: 'row', pt: 2 }}>
                        <BrandButton
                            color="inherit"
                            mode={'secondary'}
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            title="Back"
                        />
                        <Box sx={{ flex: '1 1 auto' }} />
                        <BrandButton 
                            title={activeStep === steps.length - 1 ? 'Finish' : 'Next'} 
                            onClick={activeStep !== steps.length - 1 ? handleNext : () => {}}>
                        </BrandButton>
                    </Box>
                </section>
                <img className={classes.bgImage} src={PrizeSVG} alt="prize" />
                </>
            </Page>
        </Navbar>
    )
}

export default RequestShoes;