import { useStyles } from "./styles"
import ShoesWEBP from "../../assets/shoe-optimized.webp"
import ShoesPNG from "../../assets/shoe.png"
import gsap, { Power3 } from "gsap";
import { useCallback, useEffect, useRef } from "react";
import ImageWithFallback from "../ImageWithFallback";

type ShoeIconProps = {
    style: {
        width?: number,
        height?: number,
        minHeight?: number,
        minWidth?: number,
    },
    animation?: boolean,
}

const ShoeIcon : React.FC<ShoeIconProps> = ({ 
    style: { minWidth, minHeight, width, height }, animation = false,
}) => {
    const { classes } = useStyles();
   
    const ShoeRef = useRef<any | null>(null);

    const handleShoeAnimation = useCallback(() => {
        if (animation) {
            gsap.fromTo(ShoeRef.current, 
                { rotateZ: 0, scaleX: 1 }, 
                { rotateZ: -15, scaleX: 1, duration: 1.5, ease: Power3.easeOut })
        }
    }, [ ShoeRef ]);  

    useEffect(handleShoeAnimation, [ handleShoeAnimation ]);

    return (
        <div 
            className={classes.shoeCircle}
            style={{
                width: width|| 200,
                height: height || 200,
                minHeight: minHeight || "35vw",
                minWidth: minWidth || "35vw"
            }}>
            <img 
                src={ShoesPNG}
                ref={ShoeRef}
                className={classes.shoe}
                style={{
                    width: width|| 200,
                    height: height || 200,
                    minHeight: minHeight || "35vw",
                    minWidth: minWidth || "35vw"
                }} 
            />
            {/* <ImageWithFallback 
                src={ShoesPNG}
                type="image/webp"
                fallbackSrc={ShoesPNG}
                ref={ShoeRef}
                className={classes.shoe}
                style={{
                    width: width|| 200,
                    height: height || 200,
                    minHeight: minHeight || "35vw",
                    minWidth: minWidth || "35vw"
                }} 
            /> */}
        </div>
    )
}

export default ShoeIcon; 