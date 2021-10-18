import React from 'react';

type ImageWithFallbackProps = {
    type?: string,
    src: string,
    fallbackSrc: string,
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const ImageWithFallback : React.FC<ImageWithFallbackProps> = ({ 
    type = "image/webp",
    src, 
    fallbackSrc, 
    ...props 
    }) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallbackSrc} {...props} />
        </picture>
    )
}

export default ImageWithFallback; 