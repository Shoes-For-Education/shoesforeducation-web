import type { IUser } from "../interfaces/user.interface";

export enum EUserActions {
    SET_USER = "SET_USER",
    SET_SNACKBAR_EVENT = "SET_SNACKBAR_EVENT",
}

export interface ISetUser {
    type: EUserActions.SET_USER,
    payload: IUser,
}

export interface ISetSnackbarEvent {
    type: EUserActions.SET_SNACKBAR_EVENT,
    payload: any,
}