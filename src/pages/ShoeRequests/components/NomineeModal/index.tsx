import { Modal, Typography, IconButton } from "@mui/material";
import { Box } from '@mui/system';
import { useState } from 'react';
import BrandButton from '../../../../components/BrandButton';
import type { IAggregatedBookForm } from '../../../../store/interfaces/aggregated-book-form';
import { useStyles } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';

type NomineeModalProps = {
    bookForm: IAggregatedBookForm,
    disabled: boolean,
}

const NomineeModal: React.FC<NomineeModalProps> = ({ bookForm, disabled }) => {
    const { classes } = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const nominees = bookForm.nominees || [];

    return (
        <Box className={classes.container}>
            <BrandButton disabled={disabled} title={`View Nominees`} onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modalContainer}
            >
                <Box className={classes.modal}>
                    <Box className={classes.header}>
                        <Typography className={classes.title}>Nominees</Typography>
                        <IconButton onClick={handleClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box className={classes.nomineeList}>
                        {nominees && nominees.length > 0 ? (
                            nominees.map((nominee, idx) => (
                                <Box key={idx} className={classes.nomineeItem}>
                                    <Box className={classes.nomineeHeader}>
                                        <Box className={classes.nomineeNumber}>
                                            {idx + 1}
                                        </Box>
                                        <Typography className={classes.nomineeName}>
                                            {nominee.firstName} {nominee.lastName}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.nomineeEmailContainer}>
                                        <EmailIcon className={classes.emailIcon} />
                                        <Typography className={classes.nomineeEmail}>
                                            {nominee.email}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))
                        ) : (
                            <Typography className={classes.noNominees}>
                                No nominees listed
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default NomineeModal;
