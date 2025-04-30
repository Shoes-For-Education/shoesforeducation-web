import { useEffect, useMemo, useRef, useState } from 'react';
import { Box } from '@mui/system';
import BrandButton from '../../../../components/BrandButton';
import type { IAggregatedBookForm } from '../../../../store/interfaces/aggregated-book-form';
import { useStyles } from "./styles";
import { Modal } from "@mui/material";
import { useBookFormVideoURL } from '../../../../hooks/useBookFormVideoURL';

const VideoPlayer : React.FC<{ url: string }> = ({ url }) => {
    const { classes } = useStyles();

    const videoRef = useRef<HTMLVideoElement | null>(null);
    useEffect(() => videoRef.current?.focus(), []);

    return (
        <Box className={classes.videoContainer}>
            <video ref={videoRef} controls={true} className={classes.video}>
                <source src={url} type="video/mp4"/>
            </video>
        </Box>
    )
}

type VideoModalProps = {
    bookForm: IAggregatedBookForm,
    disabled: boolean,
}

const VideoModal : React.FC<VideoModalProps> = ({ bookForm, disabled }) => {
    const { classes } = useStyles();

    const [ open, setOpen ] = useState(false);

    const handleModal = () => setOpen(!open);

    const objectKey = useMemo(() => bookForm.aws?.key || "", [ bookForm ]);

    const { url } = useBookFormVideoURL({ key: objectKey, userId: bookForm.userId, active:open });

    return (
        <Box className={classes.container}>
            <BrandButton disabled={disabled} title="Video" onClick={handleModal}/>
            <Modal
                open={open}
                onClose={handleModal}
                className={classes.modalContainer}
            >
               <Box className={classes.modal}>
                    {
                        url && <VideoPlayer url={url} />
                    }
               </Box>
            </Modal>
        </Box>
    )
}

export default VideoModal; 