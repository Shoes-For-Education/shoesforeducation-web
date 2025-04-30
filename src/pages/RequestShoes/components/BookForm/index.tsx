import { ToggleButtonGroup, ToggleButton, MenuItem, TextField, Box } from "@mui/material";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { IRequestShoesForm } from "../..";
import DropImage from "../../../../components/DropImage";
import { setSnackbarEvent } from "../../../../store/actions/user.actions";
import { useStyles } from "../../styles";
import VideoRecorder from "../VideoRecorder";

type BookFormProps = {
    books: any[],
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

const BookForm : React.FC<BookFormProps> = ({ books, values, setValues }) => {
    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [ type ] : e.target.value });
    }

    const { classes } = useStyles();
    const dispatch = useDispatch();

    const handleProofTypeChange = (_:any, value:any) => {
        if (!value) return; 
        setValues({ ...values, "proofType": value });
    };

    const handleFileData = (e:FormData) => {
        setValues({ ...values, videoFormData: e });
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
                        className={classes.proofOption} 
                        value="video">
                            Video
                    </ToggleButton>
                </ToggleButtonGroup>
                { values.proofType === "written" ? (
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
                ) : (
                    <div style={{ width: "100%" }}>
                        <p 
                            style={{ margin: "10px 0px "}}
                            className={classes.text}
                        >
                            Upload a breif video explaining what the book was about and what you learned.
                        </p>
                        <DropImage 
                            maxSize={450}
                            image={values.videoFormData ? (() => {
                                const image:any = values.videoFormData?.get('image');
                                return image;
                            })() : null}
                            accept={['video/*', 'video/quicktime']}
                            handleFileData={handleFileData}
                        />
                        {/* <VideoRecorder /> */}
                    </div>
                )}
        </Box>
    )
}

export default BookForm; 