export enum EAuthActions {
    CREATE_CLIENT = "CREATE_CLIENT",
    CREATE_GOOGLE_CLIENT = "CREATE_GOOGLE_CLIENT",
    LOGIN_CLIENT = "LOGIN_CLIENT",
    SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
    LOGIN_GOOGLE_CLIENT = "LOGIN_GOOGLE_CLIENT",
}

export interface ICreateClient {
    type: EAuthActions.CREATE_CLIENT,
    payload: {
        email: string,
        pass: string,
    }
}

export interface ICreateGoogleClient {
    type: EAuthActions.CREATE_GOOGLE_CLIENT,
    payload: {
        email: string,
        avatar: string,
        tokenId: string,
        firstName: string,
        lastName: string,
    }
}

export interface ILoginGoogleClient {
    type: EAuthActions.LOGIN_GOOGLE_CLIENT,
    payload: {
        email: string,
        avatar: string,
        tokenId: string,
        firstName: string,
        lastName: string,
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
