import { IRootReducer } from "../reducers";

export const getSnackbarEvent = (state:IRootReducer) => state?.user?.snackbarEvent;

export * from "./auth";