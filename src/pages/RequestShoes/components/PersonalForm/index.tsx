import { Box, MenuItem, TextField, Typography } from "@mui/material";
import clsx from "clsx";
import { IRequestShoesForm } from "../..";
import { useStyles } from "../../styles";
import { EMALE_UNISEX_SIZES } from "./constants/shoe-sizes";
import { mappedFemaleSizes, mappedFemaleUnisexSizes, mappedMaleSizes, mappedMaleUnisexSizes } from "./utils/mapping";

type PersonalFormProps = {
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

const PersonalForm : React.FC<PersonalFormProps> = ({ values, setValues }) => {
    const { classes } = useStyles();

    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        const updatedValues = { ...values, [ type ] : e.target.value }; 
        if (type === "gender") updatedValues.shoeSize = "";
        setValues(updatedValues);
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
                    value={values.gender}
                    variant="standard"
                    className={clsx(classes.input, classes.select, classes.nameSegment)}
                >
                    <MenuItem className={classes.selectItem} value={"male"}>
                        Male
                    </MenuItem>
                    <MenuItem className={classes.selectItem} value={"female"}>
                        Female
                    </MenuItem>
                    <MenuItem className={classes.selectItem} value={"non binary"}>
                        Non Binary
                    </MenuItem>
                </TextField>
                <TextField
                    id="standard-choose-age"
                    variant="standard"
                    onChange={handleChange('age')}
                    label="Age"
                    value={values?.age}
                    className={clsx(classes.input, classes.nameSegment)}
                    type="number"
                />
            </Box>
            <TextField
                id="standard-select-shoe-sizes"
                select
                label="Select"
                required={true}
                variant="standard"
                value={values.shoeSize}
                helperText="Choose Shoe Size"
                onChange={handleChange('shoeSize')}
                className={clsx(classes.input, classes.select)}
            >
                    {   
                        (values.gender === "male" || values.gender === "non binary")  && (
                            Object.values(mappedMaleSizes).map((key, index) => {
                                const value = Object.keys(mappedMaleSizes)[index];
                                return (
                                    <MenuItem key={index} className={classes.selectItem} value={value}>
                                    <Typography>{ key }</Typography>
                                    </MenuItem>
                                )
                            })
                        )
                    }
                    {
                        (values.gender === "male" || values.gender === "non binary") && ( Object.values(mappedMaleUnisexSizes).map((key, index) => {
                            const value = Object.keys(mappedMaleUnisexSizes)[index];
                            return (
                                <MenuItem key={index}  className={classes.selectItem} value={value}>
                                <Typography>{ key }</Typography>
                                </MenuItem>
                            )
                        })
                        )
                    }
                    {
                        (values.gender === "female" || values.gender === "non binary") &&  (Object.values(mappedFemaleSizes).map((key, index) => {
                            const value = Object.keys(mappedFemaleSizes)[index];
                            return (
                                <MenuItem key={index}  className={classes.selectItem} value={value}>
                                <Typography>{ key }</Typography>
                                </MenuItem>
                            )
                        }))
                    }
                    {
                        (values.gender === "female" || values.gender === "non binary") && ( Object.values(mappedFemaleUnisexSizes).map((key, index) => {
                            const value = Object.keys(mappedFemaleUnisexSizes)[index];
                            return (
                                <MenuItem key={index}  className={classes.selectItem} value={value}>
                                <Typography>{ key }</Typography>
                                </MenuItem>
                            )
                        }))
                    }
            </TextField>
        </Box>
    )
}

export default PersonalForm; 