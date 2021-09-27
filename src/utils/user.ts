import store from "../store";
import { setAccessToken } from "../store/actions/auth.actions";
import { setSnackbarEvent } from "../store/actions/user.actions";

export const logOutUser = () => {
    if (!localStorage.getItem("user")) return; 
    store.dispatch(setSnackbarEvent({ content: "Logged Out", variant: "info" }))
    store.dispatch(setAccessToken({ accessToken: '' }));
    localStorage.clear();
};