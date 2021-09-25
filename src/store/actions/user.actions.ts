import { EUserActions, ISetSnackbarEvent, ISetUser } from "../constants/user";
import { IUser } from "../interfaces/user.interface";

export const setUser = (data:IUser) : ISetUser => ({
    type: EUserActions.SET_USER,
    payload: data,
});

export const setSnackbarEvent= (data:any) : ISetSnackbarEvent => ({
    type: EUserActions.SET_SNACKBAR_EVENT,
    payload: data,
});