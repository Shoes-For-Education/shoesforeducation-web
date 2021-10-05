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

type IAddressItem = {
    address: any,
    handleClick: (e:any) => void,
}

const AddressItem : React.FC<IAddressItem> = ({ address, handleClick }) => {
    const classes = useStyles();
    return (
        <Box className={classes.addressContainer} onClick={() => { handleClick(address) }}>
            <Typography>{ address?.description || "-" }</Typography>
        </Box>
    )
}

interface IRequestShoesForm {
    email: string,
    bookId: string,
    proofType: 'written' | 'video',
    summary?: string,
    firstName: string,
    lastName: string,
    gender: "male" | "female" | "non binary",
    addressQuery: string,
    address: any,
}

type BookFormProps = {
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

type PersonalFormProps = {
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

type ShippingFormProps = {
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

const ShippingForm : React.FC<ShippingFormProps>  = ({ values, setValues }) => {
    const classes = useStyles();

    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [ type ] : e.target.value, address: {} });
    }

    const [ pattern ] = useDebounce(values.addressQuery, 250);
    const { addresses } = useAddresses({ query: pattern });
    
    const handleClick = (e:any) => {
        const { terms, description } = e; 
        setValues({ ...values, addressQuery: description, address: { terms, description } });
    };

    return (
        <Box className={classes.formType}>
            <TextField
                id="standard-helperText"
                label="Address"
                autoComplete={"off"}
                value={values.addressQuery}
                onChange={handleChange('addressQuery')}
                placeholder=""
                className={clsx(classes.input, classes.nameSegment)}
                type="text"
                variant="standard"
                helperText="Shoe Delivery Address"
                disabled={false}
            /> 
            { addresses.length && !Object.keys(values.address).length ? (
                <Box className={classes.addresses}>
                    { addresses.map((address, index) => {
                        return <AddressItem handleClick={handleClick} key={index} address={address} />
                    })}
                </Box>
            ) : null }
        </Box>
    )
};

const PersonalForm : React.FC<PersonalFormProps> = ({ values, setValues }) => {
    const classes = useStyles();

    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [ type ] : e.target.value });
    }

    return (
        <Box className={classes.formType}>
            <Box className={classes.flex}>
                <TextField
                    id="standard-helperText"
                    label="First Name"
                    value={values.firstName}
                    onChange={handleChange('firstName')}
                    placeholder="Elon"
                    className={clsx(classes.input, classes.nameSegment)}
                    type="text"
                    variant="standard"
                    disabled={false}
                />
                <TextField
                    id="standard-helperText"
                    label="Last Name"
                    value={values.lastName}
                    onChange={handleChange('lastName')}
                    placeholder="Musk"
                    className={clsx(classes.input, classes.nameSegment)}
                    type="text"
                    variant="standard"
                    disabled={false}
                />
            </Box>
            <TextField
                id="standard-helperText"
                label="Email"
                value={values.email}
                onChange={handleChange('email')}
                placeholder="example@gmail.com"
                className={classes.input}
                type="email"
                variant="standard"
                disabled={true}
            />
            <Box className={classes.flex}>
                <TextField
                    id="standard-select-gender"
                    select
                    label="Select"
                    onChange={handleChange("gender")}
                    required={true}
                    helperText="Choose Gender"
                    variant="standard"
                    className={clsx(classes.input, classes.select, classes.nameSegment)}
                >
                    <MenuItem value={"male"}>
                        Male
                    </MenuItem>
                    <MenuItem value={"female"}>
                        Female
                    </MenuItem>
                    <MenuItem value={"non binary"}>
                        Non Binary
                    </MenuItem>
                </TextField>
                <TextField
                    id="standard-choose-age"
                    variant="standard"
                    label="Age"
                    className={clsx(classes.input, classes.nameSegment)}
                    type="number"
                />
            </Box>
        </Box>
    )
}

const BookForm : React.FC<BookFormProps> = ({ values, setValues }) => {
    const { books } = useBooks();

    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [ type ] : e.target.value });
    }
    const classes = useStyles();

    const handleProofTypeChange = (_:any, value:any) => {
        if (!value) return; 
        setValues({ ...values, "proofType": value });
    };

    return (
        <Box className={classes.formType}>
             <TextField
                    id="standard-select-book"
                    select
                    label="Select"
                    onChange={handleChange("bookId")}
                    required={true}
                    helperText="Choose Book"
                    variant="standard"
                    className={clsx(classes.input, classes.select)}
                    >
                    {books.map((book:any, index:number) => {
                        return (
                            <MenuItem value={book._id} key={index}>
                                { book.name }
                            </MenuItem>
                        )
                    })} 
                </TextField>
                <ToggleButtonGroup
                    color="primary"
                    value={values.proofType}
                    exclusive
                    className={classes.proofButtons}
                    onChange={handleProofTypeChange}
                    >
                    <ToggleButton 
                        className={classes.proofOption} 
                        value="written">
                            Written
                    </ToggleButton>
                    <ToggleButton 
                        className={classes.proofOption} 
                        value="video">
                            Video
                    </ToggleButton>
                </ToggleButtonGroup>
                <TextField
                    id="filled-multiline-static"
                    label="Book Summary"
                    multiline
                    rows={4}
                    onChange={handleChange('summary')}
                    defaultValue=""
                    className={classes.input}
                    variant="outlined"
                    helperText="What Did You Learn?"
                />
        </Box>
    )
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
    });

    const [activeStep, setActiveStep] = useState(0);
    const steps = ['Book', 'Personal', 'Shipping'];

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
    
    console.log(values);

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
                        { activeStep === 0 && <BookForm values={values} setValues={handleSetValues} /> }
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