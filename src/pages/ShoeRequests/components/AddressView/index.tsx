import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Typography, Box, tooltipClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setSnackbarEvent } from "../../../../store/actions/user.actions";
import type { IAggregatedBookForm } from "../../../../store/interfaces/aggregated-book-form";
import { useStyles } from "./styles";

type AddressViewProps = {
  bookForm: IAggregatedBookForm;
};

const CustomWidthTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 500,
    fontSize: 14,
  },
}));

const AddressView: React.FC<AddressViewProps> = ({ bookForm }) => {
  const address = useMemo(() => bookForm?.address?.absolute || "", [bookForm.address?.absolute]);
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigator.clipboard.writeText(address);
    dispatch(
      setSnackbarEvent({
        content: "Copied Address to Clipboard",
        variant: "success",
      })
    );
  };

  return (
    <CustomWidthTooltip title={address}>
      <Box className={classes.addressBox} onClick={handleClick}>
        <FontAwesomeIcon className={classes.icon} icon={faCopy} />
        <Typography className={classes.addressText}>{address}</Typography>
      </Box>
    </CustomWidthTooltip>
  );
};

export default AddressView;
