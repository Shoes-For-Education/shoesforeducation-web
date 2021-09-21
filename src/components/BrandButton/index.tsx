import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from './styles';
import { Button } from '@material-ui/core';

type BrandButtonProps = {
    title:string,
    mode?: "brand" | "secondary";
    color?: string; 
    className?: any,
}

const BrandButton : React.FC<BrandButtonProps> = ({
    mode = "brand",
    className,
    title,
}) => {

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button 
                variant={"contained"}
                color={mode === "brand" ? "primary" : "secondary"}
                className={
                clsx(
                    classes.button,
                    className ? className : null,                
                )}>
                <Typography style={{
                    fontSize: 14, color: "#fff" 
                }}>{ title }</Typography>
            </Button>
        </div>
    )
}

export default BrandButton; 