import React, { useCallback, useEffect } from 'react';
import Books from "../../assets/books.jpg";
import BrandButton from '../../components/BrandButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import ShoeIcon from '../../components/ShoeIcon';
import Page from '../../components/Page';
import { useStyles } from './styles';
import GoogleLogin from "react-google-login";
import { IRootReducer } from '../../store/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from '../../store/selectors';
import { useHistory } from 'react-router';
import sha256 from 'crypto-js/sha256';
import { setSnackbarEvent } from '../../store/actions/user.actions';
import { setCreateGoogleClient } from '../../store/actions/auth.actions';
import config from "../../config";
import { IconButton, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from '@mui/material';

interface IState {
    password: string;
    showPassword: boolean;
    email: string; 
    incomeValidated: boolean,
}

interface SignUpPageProps {
    signUp: (e:IState) => void;  
}

const SignUpPage : React.FC<SignUpPageProps> = ({ signUp }) => {
    const { classes } = useStyles();
    const state:IRootReducer = useSelector((state:IRootReducer) => state);
    const loggedIn = isUserLoggedIn(state);
    const dispatch = useDispatch();
    const history = useHistory();

    const redirectHome = useCallback(() => {
        if (loggedIn) history.push('/');
    }, [ loggedIn ]);

    useEffect(redirectHome, [ redirectHome ]);

    const handleGoogleSignUp = (response:any) => {
        try {
            const { profileObj, tokenId } = response;
            const { email, givenName, familyName, imageUrl } = profileObj; 
            const data = {
                email, tokenId,
                firstName: givenName,
                lastName: familyName,
                avatar: imageUrl,
            };
            dispatch(setCreateGoogleClient(data));
        } catch {
            dispatch(setSnackbarEvent({ 
                content: "Failed to Create Account",
                variant: "error",
            }));
        }
    }
    
    const handleGoogleFaliure = () => {
        dispatch(setSnackbarEvent({ 
            content: "Failed to Create Account",
            variant: "error",
        }));
    };

    const [values, setValues] = React.useState<IState>({
        password: '',
        showPassword: false,
        email: '',
        incomeValidated: false,
      });

    const handleChange =
    (prop: keyof IState) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

    const handleSignUp = useCallback(() => {
        const { password, email, incomeValidated } : IState = values; 

        if (!password || !email) {
            dispatch(setSnackbarEvent({ content: "Please Fill Out All of the Fields", variant: "error" }));
            return; 
        }; 

        if (!incomeValidated) {
            dispatch(setSnackbarEvent({ content: "Not Eligible to Create an Account", variant: "error" }));
            return;     
        }

        const hashedPassword = sha256(password).toString();
        signUp({ ...values, password: hashedPassword });
    }, [ values ]);

    const handleIncomeValidateCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.checked; 
        setValues({ ...values, incomeValidated: value });
    };

    return (
        <Page 
            className={classes.container}>
            <>
            <img className={classes.books} src={Books} alt="books" />
            <Paper className={classes.formContainer}>
                <div className={classes.shoeIcon}>
                    <ShoeIcon
                        style={{
                            minWidth: 100,
                            minHeight: 100,
                            width: 100,
                            height: 100,
                        }}
                    />
                </div>
                <Typography className={classes.title}>Sign Up</Typography>
                <form className={classes.form}>
                    <TextField
                        id="standard-helperText"
                        label="Email"
                        value={values.email}
                        onChange={handleChange('email')}
                        placeholder="example@gmail.com"
                        type="email"
                        variant="standard"
                        className={classes.input}
                        style={{ width: "285px"}}
                    />
                    <FormControl 
                        sx={{ 
                            m: 1, 
                            width: '285px',
                            marginTop: "35px",
                        }}  style={{ marginTop: 35 }}  variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>
                    <div 
                        style={{ 
                            flexDirection: "row-reverse", 
                            marginTop: 5,
                            marginBottom: 10,
                        }}  
                        className={classes.flex}>
                        <Typography
                            className={classes.caption}
                        >
                            Annual Household income is less than 70,000 USD.
                        </Typography>
                        <input 
                            onChange={handleIncomeValidateCheckbox}
                            style={{ margin: "0px 10px" }} 
                            type={"checkbox"} 
                        />
                    </div>
                    {/* <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        onChange={() => {}}
                        required={false}
                        className={classes.input}
                        helperText="Gender (optional)"
                        variant="standard"
                        >
                        {Object.keys(genderMap).map((key:any, index:number) => {
                            const genderKey:EGender = key;

                            return (<MenuItem key={index} value={key}>
                                { genderMap[genderKey] }
                            </MenuItem>
                        )})} 
                    </TextField> */}
                    <div className={classes.buttons}>
                        <BrandButton 
                            onClick={handleSignUp}
                            title="Create Account"
                            className={classes.signup}
                        />
                        <span className={classes.buttonLine}></span>
                        <GoogleLogin 
                            className={classes.googleSignUp}
                            clientId={config?.google?.clientId}
                            onSuccess={handleGoogleSignUp}
                            onFailure={handleGoogleFaliure}
                            cookiePolicy={'single_host_origin'}
                            buttonText="Sign Up With Google"
                        />
                    </div>
                </form>
            </Paper>
            </>
        </Page>
    )
}

export default SignUpPage; 