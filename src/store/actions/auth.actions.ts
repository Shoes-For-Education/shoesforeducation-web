import { EAuthActions, ICreateClient, ILoginClient, ISetAccessToken } from "../constants/auth";

export const setCreateClient = (payload:any) : ICreateClient => ({
    type: EAuthActions.CREATE_CLIENT,
    payload,
});

export const setAccessToken = (payload:any) : ISetAccessToken => ({
    type: EAuthActions.SET_ACCESS_TOKEN,
    payload,
});

export const setLoginClient = (payload:any) : ILoginClient => ({
    type: EAuthActions.LOGIN_CLIENT,
    payload,
});
