import { all, takeLatest } from "@redux-saga/core/effects";
import { 
    EAuthActions, 
    type ICreateClient, 
    type ICreateGoogleClient, 
    type ILoginClient, 
    type ILoginGoogleClient
} from "../constants/auth";
import * as api from "../../utils/api";
import { CREATE_CLIENT, CREATE_GOOGLE_CLIENT, LOGIN_CLIENT, LOGIN_GOOGLE_CLIENT } from "../../constants/endpoints/auth";
import { type IRequestResponse, IRequestStatus } from "../constants/request";
import type { IUser } from "../interfaces/user.interface";
import { put } from "redux-saga/effects";
import { setSnackbarEvent, setUser } from "../actions/user.actions";
import { setAccessToken } from "../actions/auth.actions";

function* createClient({ payload } : ICreateClient ) : Generator<any> {
    try {
        const response : IRequestResponse<IUser> | any = yield api.post(CREATE_CLIENT, payload);
        if (response?.data?.status !== IRequestStatus.SERVER_ERROR &&
            response?.data?.status !== IRequestStatus.BAD_REQUEST &&
            response.statusCode === IRequestStatus.CREATED) {
            const { data } : { data: IUser } = response; 
            if (data) {
                localStorage.setItem('user', JSON.stringify(data)) 
                yield put(setSnackbarEvent({ content: "Created Account", variant: "success" }))
                yield put(setAccessToken({ accessToken: data.accessToken }));
                data.accessToken = undefined;

                yield put(setUser(data));
            } else { 
                yield put(setSnackbarEvent({ content: "Failed to Create Account", variant: "error" }))
            }
        } else yield put(setSnackbarEvent({ content: "Failed to Create Account", variant: "error" }))
    } catch {}
}   

function* createGoogleClient({ payload } : ICreateGoogleClient ) : Generator<any> {
    try {
        const response : IRequestResponse<IUser> | any = yield api.post(CREATE_GOOGLE_CLIENT, payload);
        if (response?.data?.status !== IRequestStatus.SERVER_ERROR &&
            response?.data?.status !== IRequestStatus.BAD_REQUEST &&
            response.statusCode === IRequestStatus.CREATED) {
            const { data } : { data: IUser } = response; 
            if (data) {
                localStorage.setItem('user', JSON.stringify(data)) 
                yield put(setSnackbarEvent({ content: "Created Account", variant: "success" }))
                yield put(setAccessToken({ accessToken: data.accessToken }));
                data.accessToken = undefined;
                 
                yield put(setUser(data));
            } else { 
                yield put(setSnackbarEvent({ content: "Failed to Create Account", variant: "error" }))
            }
        } else yield put(setSnackbarEvent({ content: "Failed to Create Account", variant: "error" }))
    } catch {}
}

function* loginClient({ payload } : ILoginClient ) : Generator<any> {
    try {
        const response : IRequestResponse<IUser> | any = yield api.post(LOGIN_CLIENT, payload);
        if (response?.data?.status !== IRequestStatus.SERVER_ERROR &&
            response?.data?.status !== IRequestStatus.BAD_REQUEST &&
            response.statusCode === IRequestStatus.CREATED) {
            const { data } : { data: IUser } = response; 
            if (data) {
                yield put(setSnackbarEvent({ content: "Logged In", variant: "success" }))
                localStorage.setItem('user', JSON.stringify(data));
                yield put(setAccessToken({ accessToken: data.accessToken }));
                data.accessToken = undefined;
                 
                yield put(setUser(data));
            } else {
                yield put(setSnackbarEvent({ content: "Failed to Login", variant: "error" }))
            }
        } else {
            yield put(setSnackbarEvent({ content: "Failed to Login", variant: "error"  }))
        };
    } catch {}
}

function* loginGoogleClient({ payload } : ILoginGoogleClient ) : Generator<any> {
    try {
        const response : IRequestResponse<IUser> | any = yield api.post(LOGIN_GOOGLE_CLIENT, payload);
        if (response?.data?.status !== IRequestStatus.SERVER_ERROR &&
            response?.data?.status !== IRequestStatus.BAD_REQUEST &&
            response.statusCode === IRequestStatus.CREATED) {
            const { data } : { data: IUser } = response; 
            if (data) {
                yield put(setSnackbarEvent({ content: "Logged In", variant: "success" }))
                localStorage.setItem('user', JSON.stringify(data));
                yield put(setAccessToken({ accessToken: data.accessToken }));
                data.accessToken = undefined;

                yield put(setUser(data));
            } else {
                yield put(setSnackbarEvent({ content: "Failed to Login", variant: "error" }))
            }
        } else {
            yield put(setSnackbarEvent({ content: "Failed to Login", variant: "error"  }))
        };
    } catch {}
}


const saga = function*() {
    yield all([
        takeLatest(EAuthActions.CREATE_CLIENT, createClient),
        takeLatest(EAuthActions.CREATE_GOOGLE_CLIENT, createGoogleClient),
        takeLatest(EAuthActions.LOGIN_CLIENT, loginClient),
        takeLatest(EAuthActions.LOGIN_GOOGLE_CLIENT, loginGoogleClient),
    ])
}

export default saga; 