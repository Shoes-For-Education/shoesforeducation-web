import store from "../store";
import { setAccessToken } from "../store/actions/auth.actions";
import { setSnackbarEvent } from "../store/actions/user.actions";

export const logOutUser = () => {
    const auth = JSON.parse(localStorage.getItem("persist:root") || ""); 
    const user = JSON.parse(auth?.auth || "").user; 
    if (!user?.accessToken) return; 
    store.dispatch(setSnackbarEvent({ content: "Logged Out", variant: "info" }))
    store.dispatch(setAccessToken({ accessToken: '' }));
    localStorage.clear();
};