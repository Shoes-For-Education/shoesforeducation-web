import { EUserActions, ISetUser } from "../constants/user";
import { IUser } from "../interfaces/user.interface";

export const setUser = (data:IUser) : ISetUser => ({
    type: EUserActions.SET_USER,
    payload: data,
});