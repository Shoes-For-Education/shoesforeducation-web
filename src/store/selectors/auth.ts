import type { IRootReducer } from "../reducers";

export const isUserLoggedIn = (state:IRootReducer) => {
    try {
        return !!state?.auth?.user?.accessToken;
    } catch {
        return false; 
    }
}