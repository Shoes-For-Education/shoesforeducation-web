import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import { Box } from '@material-ui/core';
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdBookForm, failedCreatingBookForm, getUser } from "../../store/selectors";
import { IRootReducer } from "../../store/reducers";
import { Step, StepLabel, Stepper } from "@mui/material";
import { useBooks } from "../../hooks/useBooks";
import BrandButton from "../../components/BrandButton";
import PrizeSVG from "../../assets/prize.svg";
import { useStyles } from "./styles";
import BookForm from "./components/BookForm";
import PersonalForm from "./components/PersonalForm";
import ShippingForm from "./components/ShippingForm";
import { RequestShoesFormSteps, requestShoesFormStepsMap } from "./enums/form-steps.enum";
import { setSnackbarEvent } from "../../store/actions/user.actions";
import { EProofType } from "../../store/enums/proof-type.enum";
import { EGender } from "../../store/enums/gender.enum";
import { IBookRequestForm } from "../../store/interfaces/book-request-form.interface";
import { setCreateBookForm, setCreatedBookForm, setFailedCreatingBookForm } from "../../store/actions/book-form.actions";
import { useHistory } from "react-router";

export interface IRequestShoesForm {
    email: string,
    bookId: string,
    proofType: EProofType,
    summary?: string,
    firstName: string,
    lastName: string,
    gender: EGender,
    addressQuery: string,
    address: any,
    age?: number; 
    error: boolean,
    shoeSize: string,
}

const RequestShoes = () => {
    const state:IRootReducer = useSelector((state:IRootReducer) => state);
    const user = getUser(state);
    const history = useHistory();
    const dispatch = useDispatch();

    const [ values, setValues ] = useState<IRequestShoesForm>({
        email: user?.email || "",
        proofType: EProofType.WRITTEN,
        bookId: "",
        summary: "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        gender:  user?.gender || EGender.MALE,
        addressQuery: user?.address?.absolute || "",
        address: {
            absolute: user?.address?.absolute || "",
        },
        error: false,
        shoeSize: user.shoeSize || '',
        age: user.age,
    });

    const [ loading, setLoading ] = useState<boolean>(false);
    const isFailed = failedCreatingBookForm(state);
    const isCreated = createdBookForm(state);

    const handleIsFailed = useCallback(() => {
        if (isFailed) {
            setLoading(false);
            dispatch(setFailedCreatingBookForm(false));
        }
    }, [ isFailed ]);

    const handleIsCreated = useCallback(() => {
        if (isCreated) {
            setLoading(false);
            history.push("/");
        };
    }, [ isCreated ]);

    useEffect(handleIsCreated, [ handleIsCreated ]);
    useEffect(handleIsFailed, [ handleIsFailed ]);

    const [activeStep, setActiveStep] = useState<{
        index: number,
        stage: RequestShoesFormSteps | string,
    }>({ index: 0, stage: RequestShoesFormSteps.BOOK });

    const { books } = useBooks();

    const handleEmptyFields = () => {
        dispatch(setSnackbarEvent({ 
            content: "Please fill out all the fields!", 
            variant: "error",
        }));
    };

    const handleNext = () => {    

        switch(activeStep.stage) {
            case RequestShoesFormSteps.BOOK: {
                if (!values.bookId) {
                    handleEmptyFields();
                    return; 
                } else if (values.proofType === EProofType.WRITTEN && !values.summary) {
                    handleEmptyFields();
                    return; 
                };
                break; 
            }
            case RequestShoesFormSteps.PERSONAL: {
                if (!values.firstName || 
                    !values.lastName || 
                    !values.email ||
                    !values.gender ||
                    !values.age ||
                    !values.shoeSize ) {
                        handleEmptyFields();
                        return; 
                    }
                break; 
            }
        }

        const next = activeStep.index + 1; 
        setActiveStep({ index: next, stage: Object.keys(requestShoesFormStepsMap)[next] });
    };

    const handleSubmit = () => {
        switch(activeStep.stage) {
            case RequestShoesFormSteps.SHIPPING: {
                if (!Object.keys(values.address).length && !values.addressQuery) {
                    handleEmptyFields();
                    return; 
                }
                break; 
            }
        };

        setLoading(!loading);

        const payload:IBookRequestForm = {
            userId: user._id,
            firstName: values.firstName,
            lastName: values.lastName,
            gender: values.gender,
            age: values.age,
            email: values.email,
            bookId: values.bookId,
            address: {
                absolute: values?.address?.description || values?.addressQuery?.trim(),
            },
            summary: values.summary,
            proofType: values.proofType,
            shoeSize: values.shoeSize,
        };

        dispatch(setCreateBookForm(payload));
    }
    
    const handleBack = () => {
        const prev = activeStep.index - 1; 
        setActiveStep({ index: prev, stage: Object.keys(requestShoesFormStepsMap)[prev] });
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
                    <Stepper style={{ marginBottom: 'auto' }} activeStep={activeStep.index}>
                        { Object.values(requestShoesFormStepsMap).map((label, index) => {
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
                        { activeStep.stage === RequestShoesFormSteps.BOOK && <BookForm values={values} setValues={handleSetValues} books={books} /> }
                        { activeStep.stage === RequestShoesFormSteps.PERSONAL  && <PersonalForm values={values} setValues={handleSetValues} /> }
                        { activeStep.stage === RequestShoesFormSteps.SHIPPING  && <ShippingForm values={values} setValues={handleSetValues} /> }
                    </form>
                    <Box sx={{ display: 'flex', marginTop: 'auto', flexDirection: 'row', pt: 2 }}>
                        <BrandButton
                            color="inherit"
                            mode={'secondary'}
                            disabled={activeStep.index === 0 || loading}
                            onClick={handleBack}
                            title="Back"
                        />
                        <Box sx={{ flex: '1 1 auto' }} />
                        <BrandButton 
                            loading={loading}
                            title={activeStep.index === Object.keys(requestShoesFormStepsMap).length - 1 ? 'Finish' : 'Next'} 
                            onClick={activeStep.index !== Object.keys(requestShoesFormStepsMap).length - 1 ? handleNext : handleSubmit}>
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