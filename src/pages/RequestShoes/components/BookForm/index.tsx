import { Box, TextField, MenuItem } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { IRequestShoesForm } from "../..";
import { setSnackbarEvent } from "../../../../store/actions/user.actions";
import { useStyles } from "../../styles";

type BookFormProps = {
    books: any[],
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

const BookForm : React.FC<BookFormProps> = ({ books, values, setValues }) => {
    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [ type ] : e.target.value });
    }

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleProofTypeChange = (_:any, value:any) => {
        if (!value) return; 
        setValues({ ...values, "proofType": value });
    };

    const handleVideo = (e:any) => {
        e.preventDefault();
        dispatch(setSnackbarEvent({
            content: "Under Construction",
            variant: "info",
        }))
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
                    value={values.bookId}
                    className={clsx(classes.input, classes.select)}
                    >
                    {books.map((book:any, index:number) => {
                        return (
                            <MenuItem className={classes.selectItem} value={book._id} key={index}>
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
                        onClick={handleVideo}
                        className={classes.proofOption} 
                        value="video">
                            Video
                    </ToggleButton>
                </ToggleButtonGroup>
                { values.proofType === "written" && (
                    <TextField
                        error={!values.summary && values.error}
                        id="filled-multiline-static"
                        label="Book Summary"
                        multiline
                        inputProps={{ maxLength: 10000 }}
                        rows={4}
                        onChange={handleChange('summary')}
                        className={classes.input}
                        value={values.summary}
                        variant="outlined"
                        helperText="What Did You Learn?"
                    />
                )}
        </Box>
    )
}

export default BookForm; 