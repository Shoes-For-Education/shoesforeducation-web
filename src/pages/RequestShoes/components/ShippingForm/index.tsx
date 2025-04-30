import clsx from "clsx";
import { useDebounce } from "use-debounce";
import type { IRequestShoesForm } from "../..";
import { type IAddressPredication, useAddresses } from "../../../../hooks/useAddresses";
import { useStyles } from "../../styles";
import { MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAddressDetails } from "../../../../hooks/useAddressDetails";

type IAddressItem = {
    address: IAddressPredication,
    handleClick: (e:IAddressPredication) => void,
}

const STATES = [ 
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: "Nevada" },
    { value: 'NH', label: 'New Hampshire' },    
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
]

const AddressItem : React.FC<IAddressItem> = ({ address, handleClick }) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.addressContainer} onClick={() => { handleClick(address) }}>
            <Typography>{ address?.description || "-" }</Typography>
        </Box>
    )
}

type SetValueParameter = IRequestShoesForm | ((prevState:IRequestShoesForm) => IRequestShoesForm);

type ShippingFormProps = {
    values: IRequestShoesForm,
    setValues: (e: SetValueParameter) => void,
    setAddressDetails: (e:IRequestShoesForm['address']) => void,
}

const ShippingForm : React.FC<ShippingFormProps>  = ({ values, setValues, setAddressDetails }) => {
    const { classes } = useStyles();

    const handleAddressQueryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setAutocompleting(true);
        handleChange('addressLine1')(e);
    }

    const handleChange = (type:keyof IRequestShoesForm['address']) => (e:React.ChangeEvent<HTMLInputElement>) => {
        if (type === "addressLine2") {
            setValues({ ...values, address: {
                ...values.address,
                [type]: e.target.value,
            } });
        } else {
            setValues({ ...values, address: {
                ...values.address,
                placeId: "",
                absolute: "",
                [type]: e.target.value,
            }});
        }
    }

    const [ pattern ] = useDebounce(values.address.addressLine1 || "", 250);
    const { addresses } = useAddresses({ query: pattern });
    const addressDetails = useAddressDetails({ placeId: values.address.placeId });

    useEffect(() => {
        if (addressDetails) {
            setAddressDetails({
                absolute: addressDetails.absolute,
                country: addressDetails.country,
                city: addressDetails.city || "",
                state: STATES.find((state) => state.label === addressDetails.state)?.value,
                zipCode: addressDetails.zipCode,
                addressLine1: addressDetails.addressLineOne,
            });
        }
    }, [ setAddressDetails, addressDetails ]);

    const handleClick = (e:IAddressPredication) => {
        const { description } = e; 
        setAutocompleting(false);
        setValues({ ...values, address: { 
            ...values.address,
            absolute: description,
            placeId: e.place_id,
        }});
    };

    const [ autocompleting, setAutocompleting ] = useState(false);

    return (
        <Box className={classes.formType}>
            <div className="flex w-full flex-col relative">
                <TextField
                    id="standard-helperText"
                    label="Address line 1"
                    required={true}
                    autoComplete="new-address-line1" 
                    value={values.address.addressLine1}
                    onChange={handleAddressQueryChange}
                    placeholder="Street Address"
                    aria-autocomplete="none"
                    className={clsx(classes.input, classes.nameSegment)}
                    type="text"
                    onBlur={() => {
                        setTimeout(() => {
                            setAutocompleting(false);
                        }, 100);
                    }}
                    variant="standard"
                    helperText="Street Address"
                    disabled={false}
                /> 
                { addresses.length && autocompleting && values.address.addressLine1?.length ? (
                    <Box className={clsx(classes.addresses, "absolute top-16 bg-white z-10")}>
                        { addresses.map((address) => (
                            <AddressItem handleClick={handleClick} key={address.place_id} address={address} />
                        ))}
                    </Box>
                ) : null }
            </div>
            <TextField
                id="standard-helperText"
                label="Address line 2"
                autoComplete={"off"}
                value={values.address.addressLine2}
                onChange={handleChange('addressLine2')}
                placeholder="Apt, suite, unit, builder, floor, etc."
                className={clsx(classes.input, classes.nameSegment)}
                type="text"
                variant="standard"
                helperText="Apt, suite, unit, builder, floor, etc. (optional)"
                disabled={false}
            />
            <Box className={classes.flex}>
                <TextField
                    id="standard-helperText"
                    label="City"
                    autoComplete={"off"}
                    value={values.address.city}
                    onChange={handleChange('city')}
                    placeholder="City"
                    className={clsx(classes.input, classes.nameSegment)}
                    type="text"
                    variant="standard"
                    required={true}
                    disabled={false}
                />
                <TextField
                    id="standard-helperText"
                    select
                    label="State"
                    onChange={handleChange("state")}
                    required={true}
                    value={values.address.state}
                    variant="standard"
                    style={{ maxWidth: "25%" }}
                    className={clsx(classes.input, classes.select, classes.nameSegment)}
                >
                    {
                        STATES.map((option) => (
                            <MenuItem className={classes.selectItem} key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField
                    id="standard-helperText"
                    label="Zip Code"
                    autoComplete={"off"}
                    value={values.address.zipCode}
                    onChange={handleChange('zipCode')}
                    placeholder="Zip Code"
                    style={{ maxWidth: "25%" }}
                    className={clsx(classes.input, classes.nameSegment)}
                    type="text"
                    variant="standard"
                    required={true}
                    disabled={false}
                />
            </Box>
        </Box>
    )
};

export default ShippingForm; 