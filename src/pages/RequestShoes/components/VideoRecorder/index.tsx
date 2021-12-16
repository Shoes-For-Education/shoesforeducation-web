import React, { useEffect, useRef } from 'react';
import { useStyles } from "./styles";

const VideoRecorder = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const classes = useStyles();

    useEffect(() => {

    });

    return (
        <section className={classes.container}>
            <div className={classes.videoContainer}>
                <video ref={videoRef} />
            </div>
        </section>
    )
}

export default VideoRecorder; 