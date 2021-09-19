export enum EAuthActions {
    LOGIN_CLIENT = "LOGIN_CLIENT"
}

export interface ILoginClient {
    type: EAuthActions.LOGIN_CLIENT,
    payload: {
        email: string,
        pass: string,
    }
}