import { useStyles } from "./styles"
import Shoes from "../../assets/shoe.png"
import { height } from "@mui/system";

type ShoeIconProps = {
    style: {
        width?: number,
        height?: number,
        minHeight?: number,
        minWidth?: number,
    }
}

const ShoeIcon : React.FC<ShoeIconProps> = ({ 
    style: { minWidth, minHeight, width, height }
}) => {
    const classes = useStyles();

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
                className={classes.shoe}
                style={{
                    width: width|| 200,
                    height: height || 200,
                    minHeight: minHeight || "35vw",
                    minWidth: minWidth || "35vw"
                }} src={Shoes} alt="shoe" />
        </div>
    )
}

export default ShoeIcon; 