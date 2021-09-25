export enum EAuthActions {
    CREATE_CLIENT = "CREATE_CLIENT",
    LOGIN_CLIENT = "LOGIN_CLIENT",
    SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
}

export interface ICreateClient {
    type: EAuthActions.CREATE_CLIENT,
    payload: {
        email: string,
        pass: string,
    }
}

export interface ILoginClient {
    type: EAuthActions.LOGIN_CLIENT,
    payload: {
        email: string,
        pass: string,
    }
}
export interface ISetAccessToken {
    type: EAuthActions.SET_ACCESS_TOKEN,
    payload: {
        accessToken: string
    }
}
