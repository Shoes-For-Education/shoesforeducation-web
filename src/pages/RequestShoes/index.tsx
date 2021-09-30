import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import { TextField } from '@material-ui/core';
import { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../store/selectors";
import { IRootReducer } from "../../store/reducers";
import { useStyles } from "./styles";


interface IRequestShoesValue {
    email: string;
}

const RequestShoes = () => {
    const state:IRootReducer = useSelector((state:IRootReducer) => state);
    const user = getUser(state);

    const [ values, setValues ] = useState<IRequestShoesValue>({
        email: user.email,
    })

    const handleChange = (field:any) => (e:any) => {
       // values[field] = e.target.value;
    };

    const classes = useStyles();

    return (
        <Navbar>
            <Page className={classes.container}>
                <section className={classes.formContainer}>
                <form>
                    {/* <TextField
                            id="standard-helperText"
                            label="Email"
                            value={values.email}
                            onChange={handleChange('email')}
                            placeholder="example@gmail.com"
                            type="email"
                            variant="standard"

                            style={{ width: "285px"}}
                        /> */}
                </form>
                </section>
            </Page>
        </Navbar>
    )
}

export default RequestShoes;