import clsx from "clsx";
import { useStyles } from './styles';
import { Button, CircularProgress, Typography } from '@mui/material';

type BrandButtonProps = {
    title:string,
    mode?: "brand" | "secondary";
    color?: string; 
    className?: string,
    onClick: () => void; 
    disabled?: boolean,
    loading?: boolean,
}

const BrandButton : React.FC<BrandButtonProps> = ({
    mode = "brand",
    className,
    onClick,
    title,
    disabled = false,
    loading = false,
}) => {

    const { classes } = useStyles();

    return (
        <div className={classes.container}>
            <Button 
                onClick={onClick}
                variant={"contained"}
                color={mode === "brand" ? "primary" : "secondary"}
                disabled={disabled || loading}
                className={
                clsx(
                    classes.button,
                    className ? className : null,                
                )}>
                <Typography style={{
                    fontSize: 14, color: "#fff",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                }}>{ title }</Typography>
                { loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            color: "#fff",
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
            </Button>
        </div>
    )
}

export default BrandButton; 