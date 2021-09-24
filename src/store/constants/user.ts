import { IUser } from "../interfaces/user.interface";

export enum EUserActions {
    SET_USER = "SET_USER"
}

export interface ISetUser {
    type: EUserActions.SET_USER,
    payload: IUser,
}