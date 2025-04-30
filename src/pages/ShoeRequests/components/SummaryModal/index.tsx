import { Modal, Typography } from "@mui/material";
import { Box } from '@mui/system';
import { useMemo, useState } from 'react';
import BrandButton from '../../../../components/BrandButton';
import type { IAggregatedBookForm } from '../../../../store/interfaces/aggregated-book-form';
import { useStyles } from "./styles";

type SummaryModalProps = {
    bookForm: IAggregatedBookForm,
    disabled: boolean,
}

const SummaryModal : React.FC<SummaryModalProps> = ({ bookForm, disabled }) => {
    const { classes } = useStyles();

    const [ open, setOpen ] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleClose = () => setOpen(!open);

    const url = useMemo(() => bookForm?.book?.aws?.url || "", [ bookForm ]);
    const fullName = useMemo(() => {
        const { firstName, lastName } = bookForm.user; 
        const fullName = `${firstName} ${lastName}`;
        return fullName; 
    }, [ bookForm ]);
    const book = useMemo(() => bookForm?.book?.name, [ bookForm ]);

    return (
        <Box className={classes.container}>
            <BrandButton disabled={disabled} title="Summary" onClick={handleOpen}/>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modalContainer}
            >
                <Box className={classes.modal}>
                    <Box className={classes.section} >
                        <img 
                            referrerPolicy="no-referrer" 
                            src={url} 
                            alt="Book Cover" 
                            className={classes.img}
                        />
                    </Box>
                    <Box className={classes.section} >
                        {/* <Typography className={classes.title}>{ `${book} ` || "" }Summary</Typography> */}
                        <Typography className={classes.author}>By: { fullName }</Typography>
                        <Typography className={classes.summary}>
                            { bookForm?.summary || "" }
                        </Typography>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default SummaryModal; 