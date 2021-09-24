import { IconButton, Input, InputAdornment, InputLabel, MenuItem, Paper, TextField, Typography } from '@material-ui/core';
import React, { useCallback } from 'react';
import Books from "../../assets/books.jpg";
import BrandButton from '../../components/BrandButton';
import GoogleLogin from "react-google-login";
import { genderMap } from '../../utils/mapping';
import { EGender } from '../../store/enums/gender.enum';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import ShoeIcon from '../../components/ShoeIcon';
import Page from '../../components/Page';
import { useStyles } from './styles';

type LoginPageProps = {};

interface IState {
    password: string;
    showPassword: boolean;
    email: string; 
}


const LoginPage : React.FC<LoginPageProps> = () => {
    const classes = useStyles();

    const handleGoogleSignUp = (response:any) => {
        console.log(response);
    }
    
    const handleGoogleFaliure = () => {

    };

    const [values, setValues] = React.useState<IState>({
        password: '',
        showPassword: false,
        email: '',
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

    const handleLogIn = useCallback(() => {
        const { password, email } : IState = values; 
        if (!password || !email) {
            return; 
        }; 

    }, [ values ]);


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
                <Typography className={classes.title}>Sign In</Typography>
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
                        }} variant="standard">
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
                    <div className={classes.buttons}>
                        <BrandButton 
                            onClick={handleLogIn}
                            title="Sign In"
                            className={classes.signup}
                        />
                        <span className={classes.buttonLine}></span>
                        <GoogleLogin 
                            className={classes.googleLogIn}
                            clientId="22"
                            onSuccess={handleGoogleSignUp}
                            onFailure={handleGoogleFaliure}
                            cookiePolicy={'single_host_origin'}
                            buttonText="Log In With Google"
                        />
                    </div>
                </form>
            </Paper>
            </>
        </Page>
    )
}

export default LoginPage; 