import { all, takeLatest } from "@redux-saga/core/effects";
import { EAuthActions, ICreateClient } from "../constants/auth";
import * as api from "../../utils/api";
import { CREATE_CLIENT } from "../../constants/endpoints/auth";
import { IRequestResponse, IRequestStatus } from "../constants/request";
import { IUser } from "../interfaces/user.interface";
import { put } from "redux-saga/effects";
import { setUser } from "../actions/user.actions";
import { setAccessToken } from "../actions/auth.actions";

function* createClient({ payload } : ICreateClient ) : Generator<any> {
    try {
        const response : IRequestResponse<IUser> | any = yield api.post(CREATE_CLIENT, payload);
        if (response?.data?.status !== IRequestStatus.SERVER_ERROR &&
            response?.data?.status !== IRequestStatus.BAD_REQUEST &&
            response.statusCode === IRequestStatus.CREATED) {
            const { data } : { data: IUser } = response; 
            if (data) localStorage.setItem('user', JSON.stringify(data));
            yield put(setAccessToken({ accessToken: data.accessToken }));
            delete data.accessToken; 
            yield put(setUser(data));
        } else new Error('Failed Account Creation');
    } catch {}
}   

const saga = function*() {
    yield all([
        takeLatest(EAuthActions.CREATE_CLIENT, createClient)
    ])
}

export default saga; 