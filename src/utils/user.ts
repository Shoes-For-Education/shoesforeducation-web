import store from "../store";
import { setAccessToken } from "../store/actions/auth.actions";

export const logOutUser = () => {
    localStorage.clear();
    store.dispatch(setAccessToken({ accessToken: '' }));
};