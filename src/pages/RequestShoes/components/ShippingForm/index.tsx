import { Typography, TextField } from "@material-ui/core";
import { Box } from "@mui/system";
import clsx from "clsx";
import { useDebounce } from "use-debounce";
import { IRequestShoesForm } from "../..";
import { useAddresses } from "../../../../hooks/useAddresses";
import { useStyles } from "../../styles";

type IAddressItem = {
    address: any,
    handleClick: (e:any) => void,
}

const AddressItem : React.FC<IAddressItem> = ({ address, handleClick }) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.addressContainer} onClick={() => { handleClick(address) }}>
            <Typography>{ address?.description || "-" }</Typography>
        </Box>
    )
}

type ShippingFormProps = {
    values: IRequestShoesForm,
    setValues: (e:IRequestShoesForm) => void,
}

const ShippingForm : React.FC<ShippingFormProps>  = ({ values, setValues }) => {
    const { classes } = useStyles();

    const handleChange = (type:keyof IRequestShoesForm) => (e:React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [ type ] : e.target.value, address: {} });
    }

    const [ pattern ] = useDebounce(values.addressQuery, 250);
    const { addresses } = useAddresses({ query: pattern });
    
    const handleClick = (e:any) => {
        const { terms, description } = e; 
        setValues({ ...values, addressQuery: description, address: { terms, description } });
    };

    return (
        <Box className={classes.formType}>
            <TextField
                id="standard-helperText"
                label="Address"
                autoComplete={"off"}
                value={values.addressQuery}
                onChange={handleChange('addressQuery')}
                placeholder=""
                className={clsx(classes.input, classes.nameSegment)}
                type="text"
                variant="standard"
                helperText="Shoe Delivery Address"
                disabled={false}
            /> 
            { addresses.length && !Object.keys(values.address).length ? (
                <Box className={classes.addresses}>
                    { addresses.map((address, index) => {
                        return <AddressItem handleClick={handleClick} key={index} address={address} />
                    })}
                </Box>
            ) : null }
        </Box>
    )
};

export default ShippingForm; 