import { IRootReducer } from "../reducers";

export const getSnackbarEvent = (state:IRootReducer) => state?.user?.snackbarEvent;
export const getUser = (state:IRootReducer) => state?.user?.user; 

export * from "./auth";