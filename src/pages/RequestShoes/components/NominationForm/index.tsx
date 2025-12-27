import { Box, TextField, Typography, IconButton } from "@mui/material";
import clsx from "clsx";
import { IRequestShoesForm } from "../..";
import { useStyles } from "../../styles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import type { INominee } from "../../../../store/interfaces/book-request-form.interface";

type NominationFormProps = {
    values: IRequestShoesForm,
    setValues: (e: IRequestShoesForm) => void,
    books: any[],
}

const NominationForm: React.FC<NominationFormProps> = ({ values, setValues, books }) => {
    const { classes } = useStyles();

    const selectedBook = books.find(book => book._id === values.bookId);
    const bookName = selectedBook?.name?.trim() || 'the selected book';

    const handleNomineeChange = (index: number, field: keyof INominee) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedNominees = [...values.nominees];
        updatedNominees[index] = {
            ...updatedNominees[index],
            [field]: e.target.value
        };
        setValues({ ...values, nominees: updatedNominees });
    };

    const handleAddNominee = () => {
        setValues({
            ...values,
            nominees: [...values.nominees, { firstName: '', lastName: '', email: '' }]
        });
    };

    const handleRemoveNominee = (index: number) => {
        if (values.nominees.length > 1) {
            const updatedNominees = values.nominees.filter((_, i) => i !== index);
            setValues({ ...values, nominees: updatedNominees });
        }
    };

    return (
        <Box className="flex flex-col w-full p-4 pt-6">
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
                Nominate people to read "{bookName}"
            </Typography>
            <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', textAlign: 'left' }}>
                Nominate at least one person to read the book you selected. You can add multiple nominees.
            </Typography>
            <div className="flex gap-3 overflow-scroll">
                {values.nominees.map((nominee, index) => (
                <Box key={index} sx={{ mb: 3, p: 2, border: '1px solid #e0e0e0', borderRadius: 1, position: 'relative' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                        <Typography variant="subtitle2">Nominee {index + 1}</Typography>
                        {values.nominees.length > 1 && (
                            <IconButton
                                size="small"
                                onClick={() => handleRemoveNominee(index)}
                                color="error"
                            >
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                        )}
                    </Box>

                    <Box className={classes.flex}>
                        <TextField
                            label="First Name"
                            value={nominee.firstName}
                            onChange={handleNomineeChange(index, 'firstName')}
                            placeholder="John"
                            className={clsx(classes.input, classes.nameSegment)}
                            type="text"
                            variant="standard"
                            required
                        />
                        <TextField
                            label="Last Name"
                            value={nominee.lastName}
                            onChange={handleNomineeChange(index, 'lastName')}
                            placeholder="Doe"
                            className={clsx(classes.input, classes.nameSegment)}
                            type="text"
                            variant="standard"
                            required
                        />
                    </Box>

                    <TextField
                        label="Email"
                        value={nominee.email}
                        onChange={handleNomineeChange(index, 'email')}
                        placeholder="nominee@example.com"
                        className={classes.input}
                        type="email"
                        variant="standard"
                        required
                    />
                </Box>
            ))}
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, width: 200 }}>
                <IconButton
                    onClick={handleAddNominee}
                    color="primary"
                    sx={{
                        border: '1px dashed',
                        borderRadius: 1,
                        width: '100%',
                        py: 1
                    }}
                >
                    <AddCircleOutlineIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">Add Another Nominee</Typography>
                </IconButton>
            </Box>
        </Box>
    );
};

export default NominationForm;
