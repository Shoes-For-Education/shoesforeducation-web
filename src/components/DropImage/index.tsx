import { faImages } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import clsx from 'clsx';
import React, { ChangeEvent, useMemo, useState } from 'react';
import { useStyles } from "./styles";
import { setSnackbarEvent } from '../../store/actions/user.actions';
import { useDispatch } from 'react-redux';

type DropImageProps = {
    disabled?: boolean,
    handleFileData: (e:FormData) => void,
    image?: File | any
    accept?: string[],
    maxSize?: number // in MB
}

const DropImage : React.FC<DropImageProps> = ({ maxSize, disabled = false, handleFileData, image, accept = [] }) => {
    const { classes } = useStyles();
    const [ dragging, setDragging ] = useState(false);

    const dispatch = useDispatch();

    const handleFileChange = (e:ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files; 
        if (!files || !files.length) return; 

        if (maxSize) {
            const sizeInMB = files[0].size / (1024 * 1024);

            if (sizeInMB > maxSize) {
                setDragging(false);
                dispatch(setSnackbarEvent({ content: `Max file size is ${maxSize} MB`, variant: "error" }));
                return;
            }
        }

        const images = new FormData();
        images.append('image', files[0]);
        handleFileData(images);
    }

    const handleDrag = () => {
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    }

    const handleDrop = (e:React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.stopPropagation();

        setDragging(false);

        const image = e?.dataTransfer?.files[0];
        if (image) {
            const images = new FormData();
            images.append('image', image);
            handleFileData(images);
        }
    };

    const acceptedFileTypes = useMemo(() => {
        const defaultValues = "image/png, image/jpeg, image/bmp, image/raw, image/tif, image/tiff"; 
        if (accept.length) return accept.join(", ");
        return defaultValues; 
    }, [ accept ]);

    return (
        <Box 
            style={{ opacity: dragging ? 0.5 : 1, transition: "150ms ease" }} 
            onDragOver={handleDrag}
            onDragLeave={handleDragLeave}
            >
            <Box 
            className={clsx(classes.container, disabled ? classes.disabled : '')}>
                {
                    !image ? (
                        <Box className={classes.label}>
                            <FontAwesomeIcon className={classes.icon} icon={faImages} />
                            <Typography className={classes.labelText}>Drag & Drop</Typography>
                        </Box>
                    ) : (
                        <Box className={classes.image}>
                            <Typography className={classes.fileName}>{ image?.name || "File Uploaded" }</Typography>
                        </Box>
                    )
                }
                <input
                    multiple={false}
                    type="file" 
                    accept={acceptedFileTypes}
                    onChange={handleFileChange} 
                    onDrop={handleDrop}
                    className={classes.input}
                />
            </Box>
        </Box>
    )
}

export default DropImage; 