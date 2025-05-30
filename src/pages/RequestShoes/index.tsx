import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createdBookForm, failedCreatingBookForm, getUser } from "../../store/selectors";
import type { IRootReducer } from "../../store/reducers";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
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
import type { IBookRequestForm } from "../../store/interfaces/book-request-form.interface";
import { setCreateBookForm, setFailedCreatingBookForm } from "../../store/actions/book-form.actions";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";

export interface IRequestShoesForm {
    email: string,
    bookId: string,
    proofType: EProofType,
    summary?: string,
    firstName: string,
    lastName: string,
    gender: EGender,
    address: {
        absolute: string,
        placeId?: string,
        addressLine1?: string,
        addressLine2?: string,
        city?: string,
        state?: string,
        country?: string,
        zipCode?: string,
    },
    age?: number; 
    error: boolean,
    shoeSize: string,
    videoFormData: FormData | null,
}

const RequestShoes = () => {
    const state:IRootReducer = useSelector((state:IRootReducer) => state);
    const user = getUser(state);
    const history = useHistory();
    const dispatch = useDispatch();

    const [ values, setValues ] = useState<IRequestShoesForm>({
        videoFormData: null,
        email: user?.email || "",
        proofType: EProofType.VIDEO,
        bookId: "",
        summary: "",
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        gender:  user?.gender || EGender.MALE,
        address: {
            absolute: user?.address?.absolute || "",
            addressLine1: user?.address?.addressLine1 || "",
            addressLine2: user?.address?.addressLine2 || "",
            country: user?.address?.country || "",
            city: user?.address?.city || "",
            placeId: user?.address?.placeId || "",
            zipCode: user?.address?.zipCode || "",
            state: user?.address?.state || "",
        },
        error: false,
        shoeSize: user.shoeSize || '',
        age: user.age,
    });

    useEffect(() => {
        if (user) {
            setValues((prevState) => ({
                ...prevState,
                email: user.email || "",
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                gender: user.gender || EGender.MALE,
                age: user.age,
                shoeSize: user.shoeSize || "",
                address: {
                    ...prevState.address,
                    ...(user.address || {}),
                }   
            }));
        }
    }, [ user ]);

    const [ loading, setLoading ] = useState<boolean>(false);
    const isFailed = failedCreatingBookForm(state);
    const isCreated = createdBookForm(state);

    const finishProgressBar = useCallback(() => {
        if (uploadIntervalId) {
            clearInterval(uploadIntervalId);
            setUploadIntervalId(null);
          }
        setUploadProgress(100);
    }, []);

    const handleIsFailed = useCallback(() => {
        if (isFailed) {
            finishProgressBar();
            setLoading(false);
            dispatch(setFailedCreatingBookForm(false));
        }
    }, [ isFailed, dispatch, finishProgressBar ]);

    const handleIsCreated = useCallback(() => {
        if (isCreated) {
            finishProgressBar()
            setLoading(false);
            history.push("/");
        };
    }, [ isCreated, history, finishProgressBar ]);

    useEffect(() => { handleIsCreated() }, [ handleIsCreated ]);
    useEffect(() => { handleIsFailed() }, [ handleIsFailed ]);

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
                }
                if (values.proofType === EProofType.WRITTEN && !values.summary) {
                    handleEmptyFields();
                    return; 
                }
                if (values.proofType === EProofType.VIDEO && !values.videoFormData?.get('image')) {
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

    const constructAbsolute = (address:IRequestShoesForm['address']) => {
        const { addressLine1, addressLine2, city, state, country, zipCode } = address;
        return `${addressLine1}${addressLine2 ? `, ${addressLine2}` : ""}, ${city}, ${state}, ${country}, ${zipCode}`;
    };

    const handleSubmit = () => {
        switch(activeStep.stage) {
            case RequestShoesFormSteps.SHIPPING: {
                if (!values.address.addressLine1 && !values.address.placeId) {
                    handleEmptyFields();
                    return; 
                }
                break; 
            }
        };

        setLoading(true);

        setUploadProgress(0);
        const intervalId = setInterval(() => {
            setUploadProgress((prev) => {
                if (prev < 75) return prev + 1;         
                if (prev < 95) return prev + 0.2;      
                return prev;                             
            });
        }, 100); 
        setUploadIntervalId(intervalId);

        const bookFormData = new FormData();

        const payload:IBookRequestForm = {
            userId: user._id,
            firstName: values.firstName,
            lastName: values.lastName,
            gender: values.gender,
            age: values.age,
            email: values.email,
            bookId: values.bookId,
            address: {
                absolute: constructAbsolute(values.address),
                placeId: values.address.placeId,
                addressLine1: values.address.addressLine1,
                addressLine2: values.address.addressLine2,
                city: values.address.city,
                state: values.address.state,
                country: values.address.country,
                zipCode: values.address.zipCode,
            },
            summary: values.summary,
            proofType: values.proofType,
            shoeSize: values.shoeSize,
        };

        bookFormData.append('fields', JSON.stringify(payload));
       
        const videos = values.videoFormData; 

        if (videos) {
            for (const [ _, value ] of Array.from(videos.entries())) {
                bookFormData.append('video', value);
            }
        };

        dispatch(setCreateBookForm(bookFormData));
    }
    
    const handleBack = () => {
        const prev = activeStep.index - 1; 
        setActiveStep({ index: prev, stage: Object.keys(requestShoesFormStepsMap)[prev] });
    };

    const { classes } = useStyles();
    const handleSetValues = (payload:IRequestShoesForm) => {
        setValues(payload);
    }

    const handleSetAddressDetails = useCallback((address:IRequestShoesForm['address']) => {
        setValues((prevState) => ({
            ...prevState,
            address: {
                ...prevState.address,
                ...address,
            }
        }));
    }, []);

    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadIntervalId, setUploadIntervalId] = useState<NodeJS.Timeout | null>(null)

    return (
        <>
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
                        { (activeStep.stage === RequestShoesFormSteps.SHIPPING) && 
                            <ShippingForm values={values} setValues={setValues} setAddressDetails={handleSetAddressDetails} />
                        }
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
                    {loading && uploadProgress > 0 && (
                        <Box sx={{ width: '100%', mt: 2 }}>
                        <Box sx={{ height: 10, backgroundColor: '#e0e0e0', borderRadius: 4 }}>
                        <Box
                            sx={{
                            width: `${uploadProgress}%`,
                            height: '100%',
                            backgroundColor: "#3cb043",
                            transition: 'width 0.2s ease-out',
                            borderRadius: 4,
                            }}
                        />
                        </Box>
                        <Box sx={{ textAlign: 'right', fontSize: 12, mt: 0.5, color: "grey" }}>
                            {Math.floor(uploadProgress)}%
                        </Box>
                    </Box>
                    )}
                </section>
                <img className={classes.bgImage} src={PrizeSVG} alt="prize" />
                </>
            </Page>
        </Navbar>
        <Footer />
        </>
    )
}

export default RequestShoes;