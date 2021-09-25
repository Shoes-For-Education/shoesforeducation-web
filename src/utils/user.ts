import store from "../store";
import { setAccessToken } from "../store/actions/auth.actions";
import { setSnackbarEvent } from "../store/actions/user.actions";

export const logOutUser = () => {
    localStorage.clear();
    store.dispatch(setSnackbarEvent({ content: "Logged Out", variant: "info" }))
    store.dispatch(setAccessToken({ accessToken: '' }));
};