import { IRootReducer } from "../reducers";

export const getSnackbarEvent = (state:IRootReducer) => state?.user?.snackbarEvent;
export const getUser = (state:IRootReducer) => state?.user?.user; 
export const createdBookForm = (state:IRootReducer) => state.bookForm.isCreated;
export const failedCreatingBookForm = (state:IRootReducer) => state.bookForm.isError;

export * from "./auth";